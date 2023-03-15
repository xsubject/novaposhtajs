import stringToUpperCamelCase from "./stringToUpperCamelCase";

const objectToUpperCamelCase = (obj: any) => {
    const tmp: any = {};

    for(const key in obj) {
        const ukey = stringToUpperCamelCase(key);
        
        if(typeof obj[key] === "object") {

            tmp[ukey] = objectToUpperCamelCase(obj[key]);
        } else {
            tmp[ukey] = obj[key];
        }
    }

    return tmp;
}

export default objectToUpperCamelCase;