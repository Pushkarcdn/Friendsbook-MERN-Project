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

        const res = await fetchDataClient('/profileDetails', 'GET')

        const ress = await res.json()

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

        const res = await fetch(baseUrl + '/dpchange', {
            method: 'POST',
            body: formData,
            credentials: 'include'
        })

        getUser()

    }

    return (
        <div className='flex flex-col gap-3'>

            {user?.profilePic && <Image src={`${baseUrl}/images/profile-pics/${user?.profilePic}`} alt={''} width={80} height={80} className='rounded-full aspect-square' />}

            <form className='flex flex-col items-start justify-center gap-3 text-xs' encType="multipart/form-data" onSubmit={handleDPChange}>
                <input type="file" name="dp" id="" onChange={handleFileChange} />
                <button type="submit" className='bg-zinc-700 py-2.5 px-4 rounded-md' >Save</button>
            </form>

        </div>

    )
}

export default ProfilePic