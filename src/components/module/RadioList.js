import React from "react"

function RadioList({ profileData, setProfileData }) {
  const { category } = profileData
  const changeHandler = (e) => {
    const { name, value } = e.target
    setProfileData({ ...profileData, [name]: value })
  }
  return (
    <div className="lg:flex pb-6 pt-4">
      <p className="font-medium sm:mb-3">دسته بندی</p>
      <div className="lg-mr-9">
        <input
          name="category"
          type="radio"
          value="apartment"
          id="apartment"
          checked={category === "apartment"}
          onChange={changeHandler}
        />
        <label htmlFor="" className="ml-3 p-1 font-medium">
          آپارتمان
        </label>
      </div>

      <div>
        <input
          name="category"
          type="radio"
          value="villa"
          id="villa"
          checked={category === "villa"}
          onChange={changeHandler}
        />
        <label htmlFor="" className="ml-3 p-1 font-medium">
          ویلا
        </label>
      </div>

      <div>
        <input
          name="category"
          type="radio"
          value="store"
          id="store"
          checked={category === "store"}
          onChange={changeHandler}
        />
        <label htmlFor="" className="ml-3 p-1 font-medium">
          مغازه
        </label>
      </div>

      <div>
        <input
          name="category"
          type="radio"
          value="office"
          id="office"
          checked={category === "office"}
          onChange={changeHandler}
        />
        <label htmlFor="" className="ml-3 p-1 font-medium">
          دفتر
        </label>
      </div>
    </div>
  )
}

export default RadioList
