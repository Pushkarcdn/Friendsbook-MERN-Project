"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import fetchDataClient from '@/lib/fetchDataClient'

export default function Logout() {

    const router = useRouter()

    const logout = async () => {

        await fetchDataClient('/logout', 'GET')

        location.href = '/login'

    }

    logout()

    return (
        <div className='w-full h-screen bg-zinc-900 flex justify-center items-center text-zinc-300'>Logging out</div>
    )
}