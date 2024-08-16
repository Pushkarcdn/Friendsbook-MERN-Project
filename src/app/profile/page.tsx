"use client"

import Post from '@/components/Post'
import ProfilePic from '@/components/ProfilePic'
import ShowPosts from '@/components/ShowPosts'
import fetchDataClient from '@/lib/fetchDataClient'
import { get } from 'http'
import { useEffect, useState } from 'react'

function Page() {

    const [user, setUser] = useState<any>()
    const [posts, setPosts] = useState<any>()

    const getUser = async () => {

        let res = await fetchDataClient('/user', 'GET')

        let ress = await res?.json()

        setUser(ress?.data)

    }

    const getPosts = async () => {

        const res = await fetchDataClient(`/post/${user.email}`, "GET") as any

        const ress = await res?.json()

        setPosts(ress?.data)

    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        if (user?.email) getPosts()
    }, [user])

    return (
        <div className='bg-zinc-900 p-10 text-zinc-300 min-h-screen flex flex-col items-start gap-5'>

            <div className='flex gap-6 p-10 rounded-[15px] border-2 border-zinc-600 transition flex-wrap'>

                <ProfilePic />

                <div className='flex flex-col justify-center gap-4'>
                    <p>{user?.name}</p>
                    <p>Email: {user?.email}</p>
                </div>

            </div>

            <h2 className='text-2xl font-semibold mt-4'>New post</h2>

            <Post posts={posts} getPosts={getPosts} />

            <ShowPosts user={user} posts={posts} getPosts={getPosts} />

        </div>
    )
}

export default Page

