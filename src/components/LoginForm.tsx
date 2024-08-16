"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import fetchDataClient from "@/lib/fetchDataClient"

export default function Login() {

  const router = useRouter()

  const [formData, setFormData] = useState({ email: "", password: "" } as { email: string, password: string })

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e: any) => {

    e.preventDefault()
    // console.log("Form submitted", formData)

    try {

      let res = await fetchDataClient("/user/login", "POST", formData) as any

      // console.log(await res)

      if (res.ok) {
        console.log("Logged in")
        router.push("/profile")
      }

    } catch (error) {
      console.log(error)
    }

  }

  return (

    <div className="w-full min-h-screen bg-zinc-800 flex justify-center items-center px-3 py-6">

      <div className="w-full max-w-[500px] flex flex-col items-center gap-3 bg-zinc-700 text-zinc-300">

        <div className="w-full py-8 px-4 sm:px-10 mt-2 flex flex-col items-center gap-8">

          <span className="text-primary text-lg sm:text-2xl font-medium">Login</span>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
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
            <input type="submit" value="Login" className="w-full py-2.5 px-3 bg-zinc-900 rounded-md text-white" />
          </form>

        </div>

        <div className="w-full flex items-center justify-between text-sm text-[#d6d6d6] text-primary p-5 pt-0 ">

          <Link href={"/signup"} >Don&apos;t have an account?</Link>

          <Link href={"/"} >Go to homepage</Link>

        </div>

      </div>

    </div>
  )


}