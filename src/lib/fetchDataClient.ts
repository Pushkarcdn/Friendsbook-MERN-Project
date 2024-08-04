import { baseUrl } from "./config";

export const fetchDataClient = async (
    url: string,
    method = "GET" as string,
    body = {} as any,
    headers = {} as any) => {

    "use client"

    // console.log("running fetchData")

    // const myCookie = cookieStore.get('token');
    // console.log(myCookie)

    // const Cookie = `token=${myCookie?.value}`

    // console.log(Cookie, typeof Cookie)

    if (method.toLowerCase() === 'get') {

        const res = await fetch(`${baseUrl}${url}`, {
            method,
            headers: { "content-Type": 'application/json' },
            credentials: 'include',
        }) as any

        // const data = await res.json()

        return (res);

    } else {

        const res = await fetch(`${baseUrl}${url}`, {
            method,
            headers: { "content-Type": 'application/json', ...headers },
            body: JSON.stringify(body),
            credentials: 'include',
        }) as any

        // const data = await res.json()

        // console.log(res)

        // console.log(typeof res)

        // const ress = await JSON.parse(JSON.stringify(res));

        // const cookies = res.cookies;

        // const ress = makeSerializable(res);

        // const data = await res.json()

        return (res);

    }

}

export default fetchDataClient






// function makeSerializable(data: any): any {
//     // Custom serialization logic here
//     if (Array.isArray(data)) {
//         return data.map(item => makeSerializable(item));
//     } else if (data && typeof data === 'object') {
//         const serialized: { [key: string]: any } = {};
//         for (const key in data) {
//             if (data[key] !== undefined && typeof data[key] !== 'function') {
//                 serialized[key] = makeSerializable(data[key]);
//             }
//         }
//         return serialized;
//     }

//     return data;
// }