"use client"

import fetchDataClient from '@/lib/fetchDataClient'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Page() {

    const [term, setTerm] = useState('')
    const [data, setData] = useState([]) as any

    const getData = async () => {

        const res = await fetchDataClient(`/user/search/${term}`)
        const data = await res?.json()
        setData(data?.data)

        console.log(data?.data)

    }

    useEffect(() => {

        if (term) {
            getData()
        }

    }, [term])

    return (

        <div className='w-full min-h-screen bg-zinc-900 flex flex-col p-5 sm:p-12 text-white'>

            <input type="text" className='w-full py-3 px-5 rounded-full outline-none bg-zinc-700 text-zinc-300' value={term} onChange={(e) => setTerm(e.target.value)} placeholder='Search' />

            <div className='flex flex-col gap-6 mt-8'>

                {term && data.map((item: any, index: any) => (
                    <div key={index} className='bg-zinc-800 p-5 rounded-lg w-full flex items-center gap-6'>

                        <Image src={'data:image/jpeg;base64,' + item?.profilePic?.toString('base64')} alt={''} width={200} height={200} className='w-16 aspect-square object-cover rounded-full border-2' />

                        <div>
                            <h1 className='text-xl font-bold'>{item?.name}</h1>
                            <p className='text-zinc-400'>{item?.email}</p>
                        </div>

                    </div>
                ))}

                {!term && (
                    <div className='text-center text-zinc-400 py-32'>
                        <h1>Enter a name to search</h1>
                    </div>
                )}

                {term && data.length === 0 && (
                    <div className='text-center text-zinc-400 py-32'>
                        <h1>No results found</h1>
                    </div>
                )}

            </div>

        </div>
    )
}

export default Page