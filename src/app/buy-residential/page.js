import BuyResidentialPage from "@/template/BuyResidentialPage"

async function BuyResidential({ searchParams }) {
  const res = await fetch("http://final-state.vercel.app/api/profile", {
    cache: "no-store",
  })
  // const res = await fetch("http://localhost:3000/api/profile", {
  //   cache: "no-store",
  // })
  const data = await res.json()

  if (data.error) return <h3>مشکلی پیش آمده است</h3>

  let finalData = await data.data

  const { category } = await searchParams
  if (category) {
    finalData = await data.data.filter((i) => i.category === category)
  }

  return (
    <div>
      <BuyResidentialPage data={finalData} />
    </div>
  )
}

export default BuyResidential
