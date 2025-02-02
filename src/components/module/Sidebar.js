"use client"

import Link from "next/link"
import { categories } from "@/constants/strings"
import { useSearchParams } from "next/navigation"

function Sidebar() {
  const category = useSearchParams().get("category")

  return (
    <div className="flex justify-center mb-24">
      <div className="bg-blue-100 mt-3 rounded py-1 flex justify-around w-96">
        <Link
          href={"/buy-residential"}
          className={`${
            !category
              ? "border-double border-b-2 border-b-blue-700 text-blue-700 font-medium"
              : null
          }`}
        >
          همه آگهی‌ها
        </Link>
        {Object.keys(categories).map((i) => (
          <Link
            key={i}
            href={{
              pathname: "/buy-residential",
              query: { category: i },
            }}
          >
            <span
              className={`${
                category === i
                  ? "border-double border-b-2 border-b-blue-700 text-blue-700 font-medium"
                  : null
              }`}
            >
              {categories[i]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
