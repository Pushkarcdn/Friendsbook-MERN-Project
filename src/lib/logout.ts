"use client"

import { useRouter } from "next/navigation"
import fetchDataClient from "./fetchDataClient"

const LogOut = async () => {

    const router = useRouter()

    const res = await fetchDataClient('/logout', 'GET')

    if (res.ok) {

        router.push('/login')

    }

}

export default LogOut