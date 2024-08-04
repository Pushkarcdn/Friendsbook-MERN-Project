"use server"

import Post from '@/components/Post'
import ProfilePic from '@/components/ProfilePic'
import ShowPosts from '@/components/ShowPosts'
import fetchData from '@/lib/fetchData'
import dynamic from 'next/dynamic'

async function Page() {

    let user: any;
    let data;

    const getData = async () => {

        "use server"

        let res = await fetchData('/profileDetails', 'GET')

        let ress = await res.json()

        user = ress.data

        console.log(ress)

        data = JSON.parse(JSON.stringify(user))

    }

    dynamic(() => getData() as any)

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

