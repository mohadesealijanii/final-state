"use client";

import Loader from "@/module/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== repassword) {
      toast.error("رمزعبور مطابقت ندارد");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);
    const data = await res.json();
    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className="container">
      <div className=" mt-28 ">
        <h3 className="text-xl flex justify-center mb-3 font-semibold text-blue-800">
          فرم ثبت نام
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

          <label>تکرار رمز عبور:</label>
          <input
            className="border-dashed border border-gray-400 mb-6 mt-2 rounded"
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
          {loading ? (
            <Loader/>
          ) : (
            <button
              className="hover:bg-blue-900 bg-blue-800 text-white rounded"
              type="submit"
              onClick={signupHandler}
            >
              ثبت نام
            </button>
          )}
        </form>
        <div className="mt-3 flex justify-center font-semibold text-gray-600">
          <p>حساب کاربری دارید؟</p>
          <p className="underline">
            <Link href={"/signin"}>ورود ‌ </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;


