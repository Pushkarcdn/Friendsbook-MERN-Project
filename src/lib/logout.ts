"use client"

import router from "next/router"
import fetchData from "./fetchData"

const logOut = async () => {

    const res = await fetchData('/logout', 'GET')

    if (res.ok) {

        router.push('/login')

    }

}

export default logOut