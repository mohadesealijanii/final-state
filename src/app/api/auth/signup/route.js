import User from "@/models/User";
import { hashPass } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    connectDB();
    console.log("connected to DB");
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }

    const existingUSer = await User.findOne({ email });

    if (existingUSer) {
      return NextResponse.json(
        { message: "این کاربر از قبل وجود دارد" },
        { status: 422 }
      );
    }

    const hashedpass = await hashPass(password);
    const newUser = await User.create({
      email,
      password: hashedpass,
      createdAt: Date.now(),
    });

    console.log(newUser);
    return NextResponse.json(
      { message: "کاربر با موفقیت ایجاد شد" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "مشکلی در سرور به وحود آمده است" },
      { status: 500 }
    );
  }
}
