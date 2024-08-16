"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import fetchDataClient from '@/lib/fetchDataClient'

function Navbar() {

    const [user, setUser] = useState<any>()

    const getData = async () => {

        let res = await fetchDataClient('/user', 'GET')

        let ress = await res?.json()

        setUser(ress?.data)

    }

    useEffect(() => {

        getData()

    }, [])

    return (
        <div className='min-h-20 bg-zinc-800 text-zinc-300 flex items-center justify-between py-3 px-4 sm:px-12'>

            <Link href="/" className='text-2xl font-bold'>
                <span>Friends-book.</span>
            </Link>

            {

                user && <div className='flex items-center gap-6 sm:gap-10'>

                    <Link href="/profile">New Post</Link>

                </div>

            }

            {
                user &&
                <div className='flex items-center gap-6'>
                    <Link href="/profile">{user?.name}</Link>
                    <Link href="/logout">Logout</Link>
                </div>
            }

            {
                !user && <Link href="/login">Login</Link>
            }

        </div>
    )
}

export default Navbar