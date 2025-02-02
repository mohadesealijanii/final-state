"use client"
import RadioList from "@/module/RadioList"
import CustomDatePicker from "@/module/CustomDatePicker"
import TextInput from "@/module/TextInput"
import TextList from "@/module/TextList"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"
import Loader from "@/module/Loader"

function AddProfilePage({ data }) {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  })

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (data) setProfileData(data)
  }, [data])

  const router = useRouter()

  const submitHandler = async () => {
    setLoading(true)
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    })
    const data = await res.json()
    setLoading(false)
    if (data.error) {
      toast.error(data.error)
    } else {
      toast.success(data.message)
      router.refresh()
      router.push("/dashboard/my-profile")
    }
  }

  const editHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    })
    const data = await res.json()
    setLoading(false)
    if (data.error) {
      return toast.error(data.error)
    } else {
      toast.success(data.message)
      router.refresh()
  router.push("/dashboard/my-profile")
    }
  }
  return (
    <div className="pr-10 mr-20 mt-5">
      <h3 className="font-semibold text-xl text-blue-800 pb-14 sm:text-center">
        {data ? "ویرایش آگهی" : "ثبت آگهی"}
      </h3>
      <div className="lg:flex">
        <div className="ml-40 ">
          <TextInput
            title="عنوان آگهی"
            name="title"
            profileData={profileData}
            setProfileData={setProfileData}
          />

          <TextInput
            title="توضیحات"
            name="description"
            profileData={profileData}
            setProfileData={setProfileData}
            textarea="true"
          />

          <TextInput
            title="آدرس"
            name="location"
            profileData={profileData}
            setProfileData={setProfileData}
          />

          <TextInput
            title="شماره تماس"
            name="phone"
            profileData={profileData}
            setProfileData={setProfileData}
          />

          <TextInput
            title="قیمت (تومان)"
            name="price"
            profileData={profileData}
            setProfileData={setProfileData}
          />

          <TextInput
            title="بنگاه"
            name="realState"
            profileData={profileData}
            setProfileData={setProfileData}
          />
        </div>
        <div>
          <RadioList
            profileData={profileData}
            setProfileData={setProfileData}
          />

          <TextList
            title="امکانات رفاهی"
            type="amenities"
            profileData={profileData}
            setProfileData={setProfileData}
          />

          <TextList
            title="قوانین"
            type="rules"
            profileData={profileData}
            setProfileData={setProfileData}
          />

          <CustomDatePicker
            profileData={profileData}
            setProfileData={setProfileData}
          />

          <Toaster />
          {loading ? (
            <Loader />
          ) : data ? (
            <button
              onClick={editHandler}
              className="bg-blue-800 p-1 rounded text-white mt-14 px-16 font-semibold mb-5"
            >
              ثبت اطلاعات
            </button>
          ) : (
            <button
              onClick={submitHandler}
              className="bg-blue-800 p-1 rounded text-white mt-14 px-16 font-semibold mb-5"
            >
              ثبت
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddProfilePage
