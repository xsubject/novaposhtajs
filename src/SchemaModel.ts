interface SchemaModel {
    [key: string]: {
        params: {
            [key: string]: any
        },
        ret: any
    }
}

export default SchemaModel;