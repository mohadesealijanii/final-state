"use client"

import { HiOutlineLocationMarker } from "react-icons/hi"
import { sp } from "@/utils/replaceNumber"
import { icons } from "@/constants/icons"
// import { useRouter } from "next/navigation"
import Link from "next/link"

function Card({ data: { _id, category, title, location, price } }) {
  //   const router = useRouter()
  // console.log(router.pathname)

  return (
    <>
      <div className="h-36">
        <p className="text-blue-700 bg-blue-100 p-1 rounded max-w-fit mb-3 shadow-xl border border-dashed border-slate-300">
          {icons[category]}
        </p>
        <p className="font-medium">{title}</p>
        <div className="flex text-sm text-slate-400">
          <p>
            <HiOutlineLocationMarker />
          </p>
          {location}
        </div>
        <span className="text-slate-600 text-sm block mb-3">
          {sp(price)}تومان
        </span>

        <Link
          href={`/buy-residential/${_id}`}
          className="text-blue-700 font-medium"
        >
          مشاهده آگهی
        </Link>
        {/* {router.pathname === "/buy-residential" ? (
          <Link
            href={`/buy-residential/${_id}`}
            className="text-blue-700 font-medium"
          >
            مشاهده آگهی
          </Link>
        ) : null} */}
      </div>
    </>
  )
}

export default Card
