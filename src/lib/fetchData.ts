const baseUrl = 'http://localhost:3001';

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

        return res;

    } else {

        const res = await fetch(`${baseUrl}${url}`, {
            method,
            headers: { "content-Type": 'application/json', ...headers },
            body: JSON.stringify(body),
            credentials: 'include',
        }) as any

        return res;

    }

}

export default fetchData;