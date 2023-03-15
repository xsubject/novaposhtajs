import { ParamType } from "@ethersproject/abi";
import axios from "axios";
import * as cheerio from 'cheerio';
import { appendFileSync, existsSync, rmSync } from "fs";
import toCamelCase from "../src/helpers/toCamelCase"

type Req = {
    name: string,
    required: boolean,
    type: string
}

type Resp = {
    name: string,
    type: string
}

const baseUrl = (p: string) => `https://developers.novaposhta.ua${p}`;
const formatType = (t: string): string => {
    if(t?.startsWith("string")) return "string";
    if(t?.startsWith("array")) return "string[]";
    if(t?.startsWith("float")) return "number";
    if(t?.startsWith("bool")) return "boolean";
    return t;
}
async function fetchAllLinks(url: string): Promise<string[]> {
    const resp = await axios.get(baseUrl(url))
    const $ = cheerio.load(resp.data);

    const hrefs = Array.from($(".documentation__aside-link"))
                        .map(item => item.attribs["href"])
                        .filter(item => item.startsWith("/view/model/"))
    return hrefs;
}

function parseReq($: cheerio.CheerioAPI) {
    let trs = $("#paramRequest > tbody > tr").slice(1)
    const req: Req[] = [];
    trs.map(((index, el) => {
        const tds = $(el).find("td")
        const name = tds.html()

        let type = tds.next().html();

        if(name == null || type == null) return;

        type = formatType(type);

        if(!name.endsWith('*')) {
            req.push({
                name,
                required: false,
                type
            });
        } else {
            req.push({
                name: name.slice(0, name.length-1),
                required: true,
                type
            })
        }
        
    }))
    return req;
}

function parseResp($: cheerio.CheerioAPI) {
    let trs = $("#paramResponse > tbody > tr").slice(1)
    const res: Resp[] = [];
    trs.map(((index, el) => {
        const tds = $(el).find("td")
        const name = tds.html()

        const t = tds.next().html();
        if(name == null || t == null) return;
        let type = formatType(t);

        res.push({
            name,
            type
        });
        
    }))
    return res;
}

async function fetch(url: string) {
    console.log(baseUrl(url));
    const resp = await axios.get(baseUrl(url))
    const $ = cheerio.load(resp.data);
    const req = parseReq($);
    const res = parseResp($);

    const exampleString = $("code").first().html() as string;
    if(exampleString === null) {
        return {
            url,
            error: "code not found"
        };
    }
    const regModelName = exampleString.match(/"modelName": "(.*)",/);
    let modelName: string;
    if(regModelName && regModelName.length >= 2) modelName = regModelName[1];

    const regCalledMethod = exampleString.match(/"calledMethod": "(.*)",/);
    let calledMethod: string;
    if(regCalledMethod && regCalledMethod.length >= 2) calledMethod = regCalledMethod[1];

    // const {modelName, calledMethod}: {modelName: string, calledMethod: string} = example;
    
    return {
        url,
        modelName: modelName!,
        calledMethod: calledMethod!,
        req,
        res
    }
}

const stringToLowerCamelCase = (str: string) => {
    if(str.length == 0) return str;
    if(str.length == 1) return str.toLowerCase();

    return str[0].toLowerCase() + str.slice(1);
}


async function main(startUrl: string) {
    const hrefs = await fetchAllLinks(startUrl);
    // console.log(await fetch(hrefs[0]));
    let currentModel: string;
    const schemaPath = "./scripts/Schema.ts";

    if(existsSync(schemaPath)) {
        rmSync(schemaPath);
    }
    const w = (text: string) => appendFileSync(schemaPath, text);
    const types: string[] = [];
    await (await Promise.all(hrefs.map(href => fetch(href)))).filter(item => {
        if(item.error !== undefined) {
            console.log(item);
            return false;
        } else {
            return true
        }
    }).map(item => {
        const paramsType = `export type ${item.modelName}${toCamelCase(item.calledMethod!, "upper")}Request = {\n`+
            item.req?.map(r => `\t${stringToLowerCamelCase(r.name)}${!r.required?"?":""}: ${r.type}`).join("\n") +
        `\n}`
        const retTypeType = `export type ${item.modelName}${toCamelCase(item.calledMethod!, "upper")}Response = {\n`+
            item.res?.map(r => `\t${stringToLowerCamelCase(r.name)}: ${r.type}`).join("\n") +
        `\n}`
        types.push(paramsType);
        types.push(retTypeType);

        return item;
    }).map(item => {
        if(currentModel === undefined) {
            w(types.join("\n\n"));
            w(`\n\nexport interface Schema {`);
        }
        if(currentModel != item.modelName) {
            if(currentModel !== undefined) {
                w("\n\t}")
            }
            currentModel = item.modelName!;
            w(`\n\t${stringToLowerCamelCase(item.modelName!)}: {`)
        }
        
        w(`\n\t\t${item.calledMethod}: {`+
            `\n\t\t\tparams: ${item.modelName}${toCamelCase(item.calledMethod!, "upper")}Request,` +
            `\n\t\t\tret: ${item.modelName}${toCamelCase(item.calledMethod!, "upper")}Response`
        +`\n\t\t}`)
        
        
    });
    w("\n\t}\n}")
}

main("/view/model/a0cf0f5f-8512-11ec-8ced-005056b2dbe1/method/a0eb83ab-8512-11ec-8ced-005056b2dbe1");
