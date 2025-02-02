import Profile from "@/models/Profile"
import User from "@/models/User"
import connectDB from "@/utils/connectDB"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function DELETE(req, context) {
  try {
    await connectDB()
    const copa = await context.params
    const { profileId } = copa

    const session = await getServerSession(req)
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      )
    }

    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      )
    }

    const profile = await Profile.findOne({ _id: profileId })

    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      )
    }
    await Profile.deleteOne({ _id: profileId })

    return NextResponse.json({ message: "آگهی حذف شد" }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    )
  }
}
