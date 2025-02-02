import LogoutButton from "@/module/LogoutButton"
import Link from "next/link"
import { CgProfile } from "react-icons/cg"

async function DashboardSidebar({ children, email, role }) {
  return (
    <div className="flex flex-col sm:flex-row mt-14 min-w-ful ">
      <div className="sm:w-48 md:w-48 lg:w-48 h-fit pb-3 min-w-48 lg:text-right md:text-right sm:text-right rounded-md shadow-lg text-center bg-white">
        <div className="justify-items-center">
          <CgProfile
            style={{ fontSize: 50, strokeWidth: 0, color: "#304ffe" }}
          />
          <p> {role === "ADMIN" ? "ادمین" : null}</p>
          <p className=" mt-2 mb-5 text-gray-500 font-medium text-sm border-b-2">
            {email}
          </p>
        </div>
        <div className=" text-sm pr-5">
          <p className="pb-3 font-bold">
            <Link href="/dashboard">حساب کاربری</Link>
          </p>
          <p className="pb-3">
            <Link href="/dashboard/my-profile">آگهی‌های من</Link>
          </p>
          <p className="pb-3">
            <Link href="/dashboard/add">ثبت آگهی</Link>
          </p>
          {role === "ADMIN" ? (
            <p>
              <Link href={"/admin"}>در انتظار تایید</Link>
            </p>
          ) : null}

          <p className="font-semibold">
            <LogoutButton />
          </p>
        </div>
      </div>
      {children}
    </div>
  )
}

export default DashboardSidebar

