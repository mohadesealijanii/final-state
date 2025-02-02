import AdminCard from "@/module/AdminCard"

function AdminPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : <p className="m-5 p-3 shadow-2xl rounded font-medium text-red-700">هیچ آگهی‌ای برای تایید موجود نیست!</p>}
      {profiles.map((i) => (
        <AdminCard data={JSON.parse(JSON.stringify(i))} key={i._id} />
      ))}
    </div>
  )
}

export default AdminPage
