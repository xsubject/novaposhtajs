import toCamelCase from './helpers/toCamelCase';
import Schema from './Schema';
import SchemaCallable from './SchemaCallable';
import send from './send';


const ENDPOINT = "https://api.novaposhta.ua/v2.0/json/";

export type NovaPoshta = SchemaCallable;

export const initNovaPoshta = (apiKey: string = "") => {
    return new Proxy({} as SchemaCallable, {
        get: (_, model: string) => {
            return new Proxy({} as SchemaCallable[typeof model], {
                get: (_, method: string) => {

                    return (props: Schema[typeof model][typeof method]["params"]) => {
                        model = toCamelCase(model, "upper");


                        const res = send(ENDPOINT, {
                            apiKey,
                            modelName: model,
                            calledMethod: method,
                            methodProperties: toCamelCase(props, "upper")
                        })
                        
                        return new Promise(done => {
                            res.then(r => 
                                done(
                                    toCamelCase(
                                        JSON.parse(r.responseText).data,
                                        "lower"
                                    )
                                )
                            )
                        }) as Promise<Schema[typeof model][typeof method]["ret"][]>
                    }
                }
            })
        }
    }) as NovaPoshta
}
export default NovaPoshta;