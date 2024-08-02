"use server"

import { redirect } from "next/navigation"

import fetchData from "./fetchData"

const logOut = async () => {

    const res = await fetchData('/logout', 'GET')

    if (res.ok) {

        redirect('/login')

    }

}

export default logOut