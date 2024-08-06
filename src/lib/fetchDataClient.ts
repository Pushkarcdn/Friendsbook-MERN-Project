"use client"

import { baseUrl } from "./config";

export const fetchDataClient = async (
    url: string,
    method = "GET" as string,
    body = {} as any,
    headers = {} as any) => {

    if (method.toLowerCase() === 'get') {

        const res = await fetch(`${baseUrl}${url}`, {
            method,
            headers: { "content-Type": 'application/json' },
            credentials: 'include',
        }) as any

        return (res);

    } else {

        const res = await fetch(`${baseUrl}${url}`, {
            method,
            headers: { "content-Type": 'application/json', ...headers },
            body: JSON.stringify(body),
            credentials: 'include',
        }) as any

        return (res);

    }

}

export default fetchDataClient