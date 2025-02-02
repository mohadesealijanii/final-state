"use client";

import Loader from "@/module/Loader";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="container">
      <div className=" mt-28 ">
        <h3 className="text-xl flex justify-center mb-3 font-semibold text-blue-800">
          فرم ورود به حساب کاربری
        </h3>
        <form className="flex flex-col w-60 p-7 mx-auto border-2 border-blue-900 rounded shadow-2xl">
          <label>ایمیل:</label>
          <input
            className="border-dashed border border-gray-400 mb-6 mt-2 rounded"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>رمز عبور:</label>
          <input
            className="border-dashed border border-gray-400 mb-6 mt-2 rounded"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {loading ? (
            <Loader/>
          ) : (
            <button
              className="hover:bg-blue-900 bg-blue-800 text-white rounded"
              type="submit"
              onClick={signinHandler}
            >
              ثبت نام
            </button>
          )}
        </form>
        <div className="mt-3 flex justify-center font-semibold text-gray-600">
          <p>حساب کاربری ندارید؟ ‌ </p>
          <p className="underline">
            <Link href={"/signup"}>ثبت نام ‌ </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
