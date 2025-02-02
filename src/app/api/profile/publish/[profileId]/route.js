import Profile from "@/models/Profile"
import User from "@/models/User"
import connectDB from "@/utils/connectDB"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function PATCH (req, context) {
  try {
    await connectDB()
    const id = context.params.profileId
    console.log(id)
    const session = await getServerSession(req)

    if (!session) {
      return NextResponse.json(
        { error: "ابتدا وارد حساب کاربری خود شوید" },
        { status: 401 }
      )
    }

    const user = await User.findOne({ email: session.user.email })

    if (!user) {
      return NextResponse.json({ error: "کاربر یافت نشد" }, { status: 404 })
    }

    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "شما به این صفحه دسترسی ندارید" },
        { status: 403 }
      )
    }

    const profile = await Profile.findOne({ _id: id })
    console.log(profile)
    profile.published = true
    profile.save()
    return NextResponse.json({ message: "آگهی منتشر شد" }, { status: 200 })
  
  
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    )
  }
}


