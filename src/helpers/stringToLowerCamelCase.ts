const stringToLowerCamelCase = (str: string) => {
    if(str.length == 0) return str;
    if(str.length == 1) return str.toLowerCase();

    return str[0].toLowerCase() + str.slice(1);
}

export default stringToLowerCamelCase;