"use client"

import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import fetchData from '@/lib/fetchData'
import logOut from '@/lib/logout'

function Navbar() {


    const [user, setUser] = useState<any>()

    const getData = async () => {

        const res = await fetchData('/profileDetails', 'GET')

        const ress = await res.json()

        if (ress.data) {
            setUser(ress.data)
        }

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
                    <span onClick={() => logOut()}>Logout</span>
                </div>
            }

            {
                !user && <Link href="/login">Login</Link>
            }

        </div>
    )
}

export default Navbar