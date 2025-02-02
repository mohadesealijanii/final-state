import DashboardCard from "@/module/DashboardCard"

function MyProfilePage({ profiles }) {
  return (
    <div className="sm:flex sm:flex-wrap  sm:justify-between">
      {profiles.length ? null : <p>هیچ آگهی‌ ثبت نشده است!</p>}

      {profiles.map((i) => (
        <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  )
}

export default MyProfilePage
