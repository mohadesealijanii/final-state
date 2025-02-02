import Card from "@/module/Card"
import Sidebar from "@/module/Sidebar"

function BuyResidentialPage({ data }) {
  return (
    <>
      <Sidebar />

      <div className="flex flex-wrap justify-around">
        {data.length ? null : <p>هیچ آگهی‌ای ثبت نشده است!</p>}
        {data.map((profile) => (
          <div
            key={profile._id}
            className="shadow-xl border border-dashed m-2 p-2 rounded bg-white min-w-48"
          >
            <Card data={profile} />
          </div>
        ))}
      </div>
    </>
  )
}

export default BuyResidentialPage
