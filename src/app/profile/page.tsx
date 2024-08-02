"use client"

import Post from '@/components/Post'
import ShowPosts from '@/components/ShowPosts'
import fetchData from '@/lib/fetchData'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Page() {

    const router = useRouter()

    const [user, setUser] = useState<any>()

    const [newPost, setNewPost] = useState<number>(0)

    const getData = async () => {

        const res = await fetchData('/profileDetails', 'GET')

        if (!res.ok) {
            router.push('/login')
        }

        const ress = await res.json()

        setUser(ress.data)

    }

    useEffect(() => {
        getData()
    }, [newPost])

    return (
        <div className='bg-zinc-900 p-10 text-zinc-300 min-h-screen flex flex-col items-start gap-5'>


            <div className='flex flex-col gap-6 p-10 rounded-[15px] border-2 border-zinc-600 transition'>
                <p>{user?.name}</p>
                <p>Email: {user?.email}</p>
            </div>

            <h2 className='text-2xl font-semibold mt-4'>New post</h2>

            <Post newPost={newPost} setNewPost={setNewPost} />

            <ShowPosts user={user} />

        </div>
    )
}

export default Page