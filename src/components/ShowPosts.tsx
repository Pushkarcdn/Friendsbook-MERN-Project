"use client"

import React, { useEffect, useState } from 'react'
import fetchDataClient from '@/lib/fetchDataClient'

function ShowPosts({ data }: { data: any }) {

    // console.log(data)

    const user = data

    // console.log(user)

    const [posts, setPosts] = useState<any>()

    const getPosts = async () => {

        const res = await fetchDataClient(`/posts/${user?.email}`, "GET") as any

        if (!res.ok) {
            return
        }

        const ress = await res.json()

        // console.log(ress)

        setPosts(ress.data)

    }


    useEffect(() => {

        if (user) getPosts()

    }, [user])

    const handleLike = async (id: string) => {

        const res = await fetchDataClient(`/like`, "PUT", { id }) as any

        getPosts()

    }

    const handleDelete = async (id: string) => {

        const res = await fetchDataClient(`/deletePost/${id}`, "DELETE", { id }) as any

        getPosts()

    }

    return (

        <div className='flex flex-col gap-6'>

            <h2 className='text-2xl font-semibold mt-4'>Posts</h2>

            {posts?.reverse().map((post: any, index: number) => {

                return (

                    <div key={index} className='w-full max-w-[800px] flex flex-col gap-5 p-10 rounded-[15px] border-2 border-zinc-600'>

                        <div className='flex w-full justify-between'>
                            <span className='text-sm'>@{user?.name}</span>
                            <span className='text-sm'>2024/02/02</span>
                        </div>

                        <p>{post.content}</p>

                        <div className='flex items-center gap-6'>

                            <button className='bg-blue-500 text-zinc-300 py-2 px-4 rounded-md flex items-center gap-2 text-sm' onClick={() => handleLike(post._id)}>
                                <span>{post.likes.length}</span>
                                {
                                    post.likes.includes(user._id) ? "Liked" : "Like"
                                }
                            </button>

                            <button className='bg-yellow-700 text-zinc-300 py-2 px-4 rounded-md'>Edit</button>
                            <button className='bg-red-700 text-zinc-300 py-2 px-4 rounded-md' onClick={() => handleDelete(post._id)}>Delete</button>

                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default ShowPosts