import ItemList from "@/module/ItemList"
import { BiCalendarCheck, BiStore } from "react-icons/bi"
import { GiOfficeChair } from "react-icons/gi"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdApartment } from "react-icons/md"
import { RiHome3Line } from "react-icons/ri"
import { MdOutlineRealEstateAgent } from "react-icons/md"
import { AiOutlinePhone } from "react-icons/ai"
import { e2p, sp } from "@/utils/replaceNumber"
import { icons } from "@/constants/icons"
import { categories } from "@/constants/strings"

function DetailsPage({
  data: {
    title,
    location,
    amenities,
    rules,
    description,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}) {
  return (
    <div className="mx-auto mt-36 flex justify-between">
      <div>
        <div className="mb-16">
          <h1 className="font-semibold text-xl text-blue-700 mb-2">{title}</h1>
          <p className="flex text-sm text-slate-500">
            <span className="pl-1">
              <HiOutlineLocationMarker />
            </span>
            {location}
          </p>
        </div>
        <h3 className="text-blue-700 mt-5 font-medium">توضیحات</h3>
        <p>{description}</p>
        <h3 className="text-blue-700 mt-5 font-medium">امکانات</h3>
        {amenities.length ? (
          <ul className="list-disc">
            {amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        ) : (
          <p>هیچ موردی ذکر نشده است.</p>
        )}

        <h3 className="text-blue-700 mt-5 font-medium">قوانین</h3>
        <ItemList data={rules} />
        <h3 className="text-blue-700 mt-5 font-medium">امکانات</h3>
        <ItemList data={amenities} />
      </div>

      <div className="">
        <div className="shadow-xl rounded-md justify-items-center p-3 bg-white">
          <span className="">
            <MdOutlineRealEstateAgent
              style={{ fontSize: 60, strokeWidth: 0, color: "#304ffe" }}
            />
          </span>
          <p className="font-medium mb-3">املاک {realState}</p>
          <p className="flex">
            <span className="p-1 text-blue-700">
              <AiOutlinePhone />
            </span>
            {e2p(phone)}
          </p>
        </div>
        <div className="mt-12 shadow-2xl rounded-md justify-items-center p-3 bg-white">
          <p className="flex">
            <span className="p-1 mb-3 text-blue-700"> {icons[category]}</span>
            <span className="text-slate-500 font-medium">
              {categories[category]}
            </span>
          </p>
          <p className="mb-3 text-slate-500 font-medium">{sp(price)}تومان</p>
          <p className="flex">
            <span className="p-1 text-blue-700">
              <BiCalendarCheck />
            </span>
            <span className="text-slate-500 font-medium">
              {new Date(constructionDate).toLocaleString("fa-IR")}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
