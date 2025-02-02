import Link from "next/link"

function DashboardPage({ createdAt }) {
 
  return (
    <div className="p-5">
      <h3>به اِی جِی استیت خوش‌آمدید!</h3>
      آگهی‌های خرید و فروش خود
      <p className="inline p-1 text-xl text-blue-800">
        <Link href={"/dashboard/add"} className="font-semibold">
          اینجا
        </Link>
      </p>
      ثبت کنید.
      <p className="bg-slate-50 max-w-fit shadow-lg rounded-md p-1 mt-10">
        تاریخ عضویت: ‌
        <span> {new Date(createdAt).toLocaleDateString("fa-IR")}</span>
      </p>
    </div>
  )
}

export default DashboardPage
