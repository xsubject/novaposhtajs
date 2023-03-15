import Schema from "./Schema";

type SchemaCallable = {
    [model in keyof Schema]: {
        [method in keyof Schema[model]]: 
            (params: Schema[model][method]["params"]) 
                => Promise<Schema[model][method]["ret"][]>
    };
};

export default SchemaCallable;