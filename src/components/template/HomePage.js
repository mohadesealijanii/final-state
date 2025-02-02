import { categories, cities, services } from "@/constants/strings"
import CategoryCard from "@/module/CategoryCard"
import { FaCity } from "react-icons/fa"
import { FiCircle } from "react-icons/fi"

function HomePage() {
  return (
    <div>
      <h1 className="font-extrabold text-3xl text-center pt-24 text-blue-800">
        سامانه خرید، فروش و اجاره ملک
      </h1>

      <ul>
        <div className="flex justify-center pt-10 mb-28">
          {services.map((i) => (
            <li key={i}>
              <span className="flex bg-blue-200 mr-4 rounded pl-2 text-blue-800">
                <p className="pt-0.5 p-1">
                  <FiCircle />
                </p>
                {i}
              </span>
            </li>
          ))}
        </div>
        <div className="flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap sm:flex-nowrap justify-center">
          {Object.keys(categories).map((i) => (
            <CategoryCard key={i} title={categories[i]} name={i} />
          ))}
        </div>
      </ul>

      <h3 className="font-semibold text-2xl text-center text-blue-800 pb-7 pt-28">
        شهرهای پر بازدید
      </h3>
      <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 place-items-center font-semibold pb-12">
        {cities.map((i) => (
          <li key={i}>
            <div className="bg-blue-200 flex justify-center rounded py-1 m-5 w-36 text-blue-800 content-center p-2">
              <p className="p-1">
                <FaCity />
              </p>
              <p>{i}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
