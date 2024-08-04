"use server"

import { cookies } from 'next/headers';

const baseUrl = 'http://localhost:3002';
// const baseUrl = 'https://fb-clone-backend.pushkar.live';


const fetchData = async (
    url: string,
    method = "GET" as string,
    body = {} as any,
    headers = {} as any) => {

    "use server"

    const cookieStore = cookies();
    // console.log("running fetchData")

    const myCookie = cookieStore.get('token');
    // console.log(myCookie)

    const Cookie = `token=${myCookie?.value}`

    // console.log(Cookie, typeof Cookie)

    if (method.toLowerCase() === 'get') {

        const res = await fetch(`${baseUrl}${url}`, {
            method,
            headers: { "content-Type": 'application/json', Cookie, ...headers },
            credentials: 'include',
        }) as any

        // const data = await res.json()

        return res;

    } else {

        const res = await fetch(`${baseUrl}${url}`, {
            method,
            headers: { "content-Type": 'application/json', ...headers },
            body: JSON.stringify(body),
            credentials: 'include',
        }) as any

        // const data = await res.json()

        return res;

    }

}


export default fetchData;