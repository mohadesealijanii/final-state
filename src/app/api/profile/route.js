import connectDB from "@/utils/connectDB"
import User from "@/models/User"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { Types } from "mongoose"
import Profile from "@/models/Profile"

export async function GET() {
  try {
    connectDB()

    const profiles = await Profile.find({published: true}).select("-userId")

    return NextResponse.json({
      data: profiles,
      status: 200,
    })
  } catch (error) {
    return NextResponse.json(
      { message: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    )
  }
}

export async function POST(req) {
  try {
    connectDB()

    const {
      title,
      description,
      location,
      phone,
      realState,
      price,
      constructionDate,
      category,
      amenities,
      rules,
    } = await req.json()

    const session = await getServerSession(req)
    console.log(session)

    if (!session) {
      return NextResponse.json(
        { error: "لطفا ابتدا وارد شوید" },
        { status: 401 }
      )
    }

    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json({ error: "کابر وجود ندارد" }, { status: 404 })
    }

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا فرم زیر را کامل کنید" },
        { status: 400 }
      )
    }

    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      realState,
      constructionDate,
      amenities,
      rules,
      category,
      price: +price,
      // userId: new Types.ObjectId.createFromHexString(user._id),
      userId: new Types.ObjectId(user._id),
    })
    console.log(newProfile)

    return NextResponse.json({ message: "آگهی جدید اضافه شد" }, { status: 201 })
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    )
  }
}

export async function PATCH(req) {
  try {
    connectDB()
    const {
      _id,
      title,
      description,
      location,
      phone,
      realState,
      price,
      constructionDate,
      category,
      amenities,
      rules,
    } = await req.json()

    const session = await getServerSession(req)
    if (!session) {
      return NextResponse.json(
        { error: "لطفا ابتدا وارد شوید" },
        { status: 401 }
      )
    }

    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json({ error: "کابر وجود ندارد" }, { status: 404 })
    }

    if (
      !_id ||
      !title ||
      !description ||
      !location ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا فرم زیر را کامل کنید" },
        { status: 400 }
      )
    }

    const profile = await Profile.findOne({ _id })
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      )
    }

    profile.title = title
    profile.description = description
    profile.location = location
    profile.phone = phone
    profile.realState = realState
    profile.constructionDate = constructionDate
    profile.category = category
    profile.price = price
    profile.amenities = amenities
    profile.rules = rules

    profile.save()

    return NextResponse.json(
      { message: "آگهی با موفقیت ویرایش شد" },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    )
  }
}
