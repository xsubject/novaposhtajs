import axios from 'axios';
import objectToUpperCamelCase from './helpers/objectToUpperCamelCase';
import stringToUpperCamelCase from './helpers/stringToUpperCamelCase';
import Schema from './Schema';
import SchemaCallable from './SchemaCallable';

const ENDPOINT = "https://api.novaposhta.ua/v2.0/json/";

export type NovaPoshta = SchemaCallable;

export const initNovaPoshta = (apiKey: string = "") => {
    return new Proxy({} as SchemaCallable, {
        get: (_, model: string) => {
            return new Proxy({} as SchemaCallable[typeof model], {
                get: (_, method: string) => {

                    return (props: Schema[typeof model][typeof method]["params"]) => {
                        model = stringToUpperCamelCase(model);


                        const res = axios.post(ENDPOINT, {
                            apiKey,
                            modelName: model,
                            calledMethod: method,
                            methodProperties: objectToUpperCamelCase(props)
                        })
                        
                        return new Promise(done => {
                            res.then(r => done(r.data.data))
                        }) as Promise<Schema[typeof model][typeof method]["ret"]>
                    }
                }
            })
        }
    }) as NovaPoshta
}
export default NovaPoshta;