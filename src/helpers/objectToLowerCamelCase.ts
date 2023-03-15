import stringToLowerCamelCase from "./stringToLowerCamelCase";

const objectToLowerCamelCase = (obj: any): any => {
    const tmp: any = {};
    if(Array.isArray(obj)) {
        return obj.map((item: any) => objectToLowerCamelCase(item))
    } else {
        for(const key in obj) {
            const ukey = stringToLowerCamelCase(key);
 
            if(typeof obj[key] === "object") {
                tmp[ukey] = objectToLowerCamelCase(obj[key]);
            } else {
                tmp[ukey] = obj[key];
            }
        }
    }

    return tmp;
}

export default objectToLowerCamelCase;