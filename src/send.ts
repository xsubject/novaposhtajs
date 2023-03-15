import { XMLHttpRequest } from "xmlhttprequest-ts";

const send = async (url: string, props: any) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    return new Promise<any>((resolve, reject) => {
        xhr.onload = () => {
            if(xhr.status === 200) resolve(xhr);
            else reject(xhr);
        };
        xhr.onerror = () => {
            reject(xhr);
        }

        xhr.send(JSON.stringify(props));
    })

    // return ;
}
 
export default send;