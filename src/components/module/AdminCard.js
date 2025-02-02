"use client"

import { sp } from "@/utils/replaceNumber"
import { useRouter } from "next/navigation"
import React from "react"
import toast, { Toaster } from "react-hot-toast"

function AdminCard({ data: { _id, title, description, location, price } }) {
  const router = useRouter()

  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" })
    const result = await res.json()
    console.log(result)
    console.log(_id)
    if (result.message) {
      toast.success(result.message)
      router.refresh()
    }
  }

  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${_id}`, {
      method: "DELETE",
    })
    const result = await res.json()
    if (result.error) {
      toast.error(result.error)
    } else {
      toast.success(result.message)
      router.refresh()
      router.push("/dashboard/my-profile")
    }
  }

  return (
    <div className="my-5 sm:mx-5 sm:w-72 md:w-72 lg:w-72 flex flex-col shadow-xl border border-dashed border-slate-300 p-3 rounded">
      <h3 className="font-medium text-blue-700 mb-3">{title}</h3>
      <p className="text-sm mb-1">
        <span className="font-medium">توضیحات: ‌ </span>
        {description}
      </p>
      <div className=" text-sm mb-1">
        <p>
          <span className="font-medium">آدرس: ‌ </span>
          {location}
        </p>
        <p>
          <span className="font-medium">قیمت: ‌ </span>
          {sp(price)}
        </p>
      </div>
      <div className="flex justify-evenly">
        <button
          onClick={deleteHandler}
          className="font-medium mt-3 text-white bg-red-800 rounded w-fit px-2"
        >
          حذف
        </button>
        <button
          onClick={publishHandler}
          className="font-medium mt-3 text-white bg-blue-700 rounded w-fit px-2"
        >
          انتشار
        </button>
      </div>

      <Toaster />
    </div>
  )
}

export default AdminCard
