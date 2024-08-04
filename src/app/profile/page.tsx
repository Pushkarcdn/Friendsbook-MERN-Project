"use server"

import Post from '@/components/Post'
import ProfilePic from '@/components/ProfilePic'
import ShowPosts from '@/components/ShowPosts'
import { baseUrl } from '@/lib/config'
import fetchData from '@/lib/fetchData'
import Image from 'next/image'

async function Page() {

    const image = "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/368224027_122112137204004710_7482623737080898229_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGFpxeuivN3o5cROUF6RLGMwCrK2QVK4VDAKsrZBUrhUOOQhC62PkjEqHHwFuh97qmn0Qt4CuDPd7V-3vfb5_vO&_nc_ohc=swzc81nXkNQQ7kNvgFin3zX&_nc_ht=scontent.fktm17-1.fna&oh=00_AYByvbG6LWiGwP0OUeDzHEGb-xEDfYHfO3W1sLpecu1sIQ&oe=66B55F5D"

    let user: any;
    let data;

    const getData = async () => {

        let res = await fetchData('/profileDetails', 'GET')

        let ress = await res.json()

        user = ress.data

        data = JSON.parse(JSON.stringify(user))

    }

    await getData()

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

            <Post />

            <ShowPosts data={data} />

        </div>
    )
}

export default Page

