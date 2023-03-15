function toCamelCase<T>(x: T, format: "lower" | "upper"): T {
    const fn = format === "upper" ? "toUpperCase" : "toLowerCase";

    if(typeof x === "string") {
        if(x.length == 0) return x;
        if(x.length == 1) return x[fn]() as T;

        return x[0][fn]() + x.slice(1) as T;
    }

    if(typeof x === "object") {
        const tmp: any = {};
        if(Array.isArray(x)) {
            return x.map((item: any) => toCamelCase(item, format)) as T
        } else {
            for(const key in x) {
                const ukey = toCamelCase(key, format);
    
                if(typeof x[key] === "object") {
                    tmp[ukey] = toCamelCase(x[key], format);
                } else {
                    tmp[ukey] = x[key];
                }
            }
        }

        return tmp;
    }

    return x;
}

export default toCamelCase;