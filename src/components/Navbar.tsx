

import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import fetchData from '@/lib/fetchData'
import logOut from '@/lib/logout'
import LogOutBtn from './LogOutBtn'

async function Navbar() {

    let user: any;
    let data;

    const getData = async () => {

        let res = await fetchData('/profileDetails', 'GET')

        let ress = await res.json()

        user = ress.data

        if (user) data = JSON.parse(JSON.stringify(user))

        // console.log(data)

    }

    await getData()

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
                    <LogOutBtn />
                </div>
            }

            {
                !user && <Link href="/login">Login</Link>
            }

        </div>
    )
}

export default Navbar