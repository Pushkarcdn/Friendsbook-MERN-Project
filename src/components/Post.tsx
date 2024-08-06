"use client"

import fetchDataClient from "@/lib/fetchDataClient"
import { get } from "https"
import { useState } from "react"

export default function Post({ posts, getPosts }: any) {

  const [formData, setFormData] = useState({ content: "" })

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {

    e.preventDefault()

    try {

      const res = await fetchDataClient("/post", "POST", formData) as any

      if (res.ok) {
        getPosts()
        setFormData({ content: "" })
      }


    } catch (error) {
      console.log(error)
    }

  }

  return (

    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 items-start">

      <div className="flex w-full flex-col gap-2">
        {/* <label htmlFor="email">Email </label> */}
        <textarea rows={7} name="content" value={formData.content} required onChange={handleChange} className="py-4 px-5 text-sm rounded-md flex-grow outline-none bg-zinc-800 w-full resize-none max-w-[1000px]" placeholder="What's on your mind ?" />
      </div>

      <input type="submit" value="Post" className=" py-4 px-3 bg-zinc-800 rounded-md text-white w-52" />

    </form>

  )

}