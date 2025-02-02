import Image from "next/image"
import Link from "next/link"
import React from "react"

function CategoryCard({ name, title }) {
  return (
    <div className="flex flex-col">
      <Link href={`/buy-residential?category=${name}`}>
        <div className="p-3 px-2 shadow-xl rounded-xl mr-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-800 hover:text-white text-blue-700">
          <div className="rounded md:mt-0 sm:mt-0 lg:mt-0 mt-5">
            <Image
              src={`/images/${name}.png`}
              alt={title}
              width={240}
              height={144}
              priority={true}
              className="rounded-xl"
            />
            <p className="pt-5 text-center font-normal">
              {title}
            </p>
          </div>
        </div>
      </Link>
      <p></p>
    </div>
  )
}

export default CategoryCard
