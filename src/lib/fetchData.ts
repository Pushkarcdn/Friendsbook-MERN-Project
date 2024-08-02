const baseUrl = 'https://fb-clone-backend.pushkar.live';
const baseUrl2 = 'http://localhost:3002';

const fetchData = async (
    url: string,
    method = "GET" as string,
    body = {} as any,
    headers = {} as any) => {

    // console.log("running fetchData")

    if (method.toLowerCase() === 'get') {

        const res = await fetch(`${baseUrl}${url}`, {
            method,
            headers: { "content-Type": 'application/json', ...headers },
            credentials: 'include',
        }) as any

        console.log(res)

        return res;

    } else {

        const res = await fetch(`${baseUrl}${url}`, {
            method,
            headers: { "content-Type": 'application/json', ...headers },
            body: JSON.stringify(body),
            credentials: 'include',
        }) as any

        console.log(res)

        return res;

    }

}

export default fetchData;