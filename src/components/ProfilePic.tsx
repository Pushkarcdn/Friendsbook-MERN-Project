"use client"

// import { baseUrl } from '@/lib/config';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import fetchDataClient from '@/lib/fetchDataClient';
import { baseUrl } from '@/lib/config';

function ProfilePic() {

    const [file, setFile] = useState() as any;

    const [user, setUser] = useState() as any;

    const getUser = async () => {

        const res = await fetchDataClient('/user', 'GET')

        let ress = await res.json()

        let buffer = ress?.data?.profilePic

        buffer = buffer?.toString('base64')

        // console.log(buffer)

        const dataUrl = `data:image/jpeg;base64,${buffer}`; // Adjust MIME type as needed
        // console.log("data: " + dataUrl)

        ress.data.profilePic = dataUrl

        // console.log(ress.data)

        setUser(ress.data)

    }

    useEffect(() => {
        getUser()
    }, [])


    const handleFileChange = (e: any) => {

        setFile(e.target.files[0]);

    };

    const handleDPChange = async (e: any) => {

        e.preventDefault()

        // console.log(file)

        const formData = new FormData()

        formData.append('dp', file)

        const res = await fetch(baseUrl + '/user/profilePic', {
            method: 'POST',
            body: formData,
            credentials: 'include'
        })

        getUser()

    }

    return (
        <div className='flex flex-col gap-3'>

            {user?.profilePic && <Image src={user?.profilePic} alt={''} width={80} height={80} className='rounded-full aspect-square object-cover object-center' />}

            <form className='flex flex-col items-start justify-center gap-3 text-xs' encType="multipart/form-data" onSubmit={handleDPChange}>
                <input type="file" name="dp" id="" onChange={handleFileChange} />
                <button type="submit" className='bg-zinc-700 py-2.5 px-4 rounded-md' >Save</button>
            </form>

        </div>

    )
}

export default ProfilePic