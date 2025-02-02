"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { FiLogIn } from "react-icons/fi"
import { FaUserAlt } from "react-icons/fa"
import Image from "next/image"

function Header({ children }) {
  const { data } = useSession()
  return (
    <div>
      <div className="min-h-screen">
        <div className="mt-3 flex justify-between bg-blue-700 rounded p-3 text-white font-extrabold">
          <div className="flex">
            <p className="ml-4">
              <Link href={"/"} className="hover:font-semibold">
                صفحه اصلی
              </Link>
            </p>
            <p>
              <Link href={"/buy-residential"} className="hover:font-semibold">
                آگهی‌ها‌
              </Link>
            </p>
          </div>

          {data ? (
            <div className="flex bg-white rounded text-blue-700 px-1">
              <Link href={"/dashboard"}>
                <p className="p-1">
                  <FaUserAlt />
                </p>
              </Link>
            </div>
          ) : (
            <div className="flex bg-white rounded text-blue-700 px-1">
              <div className="py-1">
                <FiLogIn />
              </div>
              <Link href={"/signin"}>‌ ورود</Link>
            </div>
          )}
        </div>
        {children}
      </div>

      <footer className="bg-blue-800 text-white rounded mb-4">
        <div className="container px-6 py-12">
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="text"
                  type="text"
                  className="px-4 py-2 bg-white border rounded-md"
                  placeholder="نیاز به برقراری ارتباط با مشاورین ما دارید؟"
                />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  ثبت تیکت
                </button>
              </div>
            </div>

            <div className="pl-">
              <p className="font-semibold">دسترسی سریع </p>

              <div className="flex flex-col items-start mt-5 space-y-1">
                <Link href={"/"}>صفحه اصلی</Link>
                <Link href={"/contact-us"}>ارتباط با ما</Link>
                <Link href={"/buy-residential"}>خدمات مجموعه</Link>
              </div>
            </div>

            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex gap-4 hover:cursor-pointer ">
                <Link href={"https://www.instagram.com/alijaniimohadese"}>
                  <Image
                    src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                    width="60"
                    height="60"
                    alt="inst"
                    className="bg-white rounded-full p-0.5"
                  />
                </Link>
                <Link href={"https://github.com/mohadesealijanii"}>
                  <Image
                    src="https://www.svgrepo.com/show/94698/github.svg"
                    width="60"
                    height="60"
                    alt="gt"
                    className="bg-white rounded-full p-0.5"
                  />
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/in/mohadese-alijani-2b929b241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  }
                >
                  <Image
                    src="https://www.svgrepo.com/show/28145/linkedin.svg"
                    width="60"
                    height="60"
                    alt="in"
                    className="bg-white rounded-full p-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Header
