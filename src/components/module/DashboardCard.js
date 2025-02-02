"use client"

import Card from "./Card"
import { FiEdit } from "react-icons/fi"
import { AiOutlineDelete } from "react-icons/ai"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"
import Link from "next/link"

function DashboardCard({ data }) {
  const id = data._id

  
  const router = useRouter()

  const editHandler = () => {
    router.push(`/dashboard/my-profile/${id}`)
  }
  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${id}`, {
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
    <div className="my-5 w-full sm:mx-5 sm:w-52 md:w-52 lg:w-52 flex flex-col shadow-xl border border-dashed border-slate-300 p-3 rounded">
      <div className="w-52 h-32">
        <Card data={data} />
      </div>
      <div className="pt-9">
        <p className="text-sm text-blue-700 mb-4">
          {/* <Link href={`/buy-residential${id}`} className="font-medium">
            مشاهده آگهی
          </Link> */}
        </p>
        <div className="flex justify-between">
          <button onClick={editHandler}>
            <div className="flex font-medium  hover:text-blue-700  text-slate-500">
              <p className="p-1">
                <FiEdit />
              </p>
              ویرایش
            </div>
          </button>

          <button onClick={deleteHandler}>
            <div className="flex font-medium hover:text-red-700  text-slate-500">
              <p className="py-1">
                <AiOutlineDelete />
              </p>
              حذف
            </div>
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default DashboardCard
