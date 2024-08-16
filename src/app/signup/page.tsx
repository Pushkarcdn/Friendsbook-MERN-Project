"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import fetchDataClient from "@/lib/fetchDataClient";

export default function Signup() {

    const router = useRouter();

    const [formData, setFormData] = useState({ name: "", email: "", password: "" } as { name: string, email: string, password: string })

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: any) => {

        e.preventDefault()

        try {
            const res = await fetchDataClient("/user/signup", "POST", formData) as any

            if (res.ok) {

                router.push("/login")
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (

        <div className="w-full min-h-screen bg-zinc-800 flex justify-center items-center px-3 py-6">

            <div className="w-full max-w-[500px] flex flex-col items-center gap-3 bg-zinc-700 text-zinc-300">

                <div className="w-full py-8 px-4 sm:px-10 mt-2 flex flex-col items-center gap-8">

                    <span className="text-primary text-lg sm:text-2xl font-medium">Signup</span>

                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Full name </label>
                            <input type="text" name="name"
                                value={formData.name} required onChange={handleChange} className="py-2.5 px-5 text-sm rounded-md flex-grow outline-none bg-zinc-800" placeholder="Full name" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email </label>
                            <input type="email" name="email" value={formData.email} required onChange={handleChange} className="py-2.5 px-5 text-sm rounded-md flex-grow outline-none bg-zinc-800" placeholder="example@gmail.com" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Password </label>
                            <input type="password" name="password" onChange={handleChange} value={formData.password} required className="py-2.5 px-5 text-sm rounded-md flex-grow outline-none bg-zinc-800" placeholder="**********" />
                        </div>
                        <div className="flex items-center gap-2 my-2">
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember" className="text-sm">Remember me</label>
                        </div>
                        <input type="submit" value="Signup" className="w-full py-2.5 px-3 bg-zinc-900 rounded-md text-white font-medium" />
                    </form>

                </div>

                <div className="w-full flex items-center justify-between text-sm text-[#d6d6d6] text-primary p-5 pt-0 ">

                    <Link href={"/login"} >Already have an account? </Link>

                    <Link href={"/"} >Go to homepage</Link>

                </div>

            </div>

        </div>
    )


}