const stringToUpperCamelCase = (str: string) => {
    if(str.length == 0) return str;
    if(str.length == 1) return str.toUpperCase();

    return str[0].toUpperCase() + str.slice(1);
}

export default stringToUpperCamelCase;