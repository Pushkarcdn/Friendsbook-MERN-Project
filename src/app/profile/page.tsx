"use server"

import Post from '@/components/Post'
import ShowPosts from '@/components/ShowPosts'
import fetchData from '@/lib/fetchData'

async function Page() {

    let user: any;
    let data;

    const getData = async () => {

        let res = await fetchData('/profileDetails', 'GET')

        let ress = await res.json()

        user = ress.data

        data = JSON.parse(JSON.stringify(user))

        // console.log(data)

    }

    await getData()

    // console.log(ress.data)

    return (
        <div className='bg-zinc-900 p-10 text-zinc-300 min-h-screen flex flex-col items-start gap-5'>

            <div className='flex flex-col gap-6 p-10 rounded-[15px] border-2 border-zinc-600 transition'>
                <p>{user?.name}</p>
                <p>Email: {user?.email}</p>
            </div>

            <h2 className='text-2xl font-semibold mt-4'>New post</h2>

            <Post />

            <ShowPosts data={data} />

        </div>
    )
}

export default Page

