"use client"
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi"

function LogoutButton() {
  const signoutHandler = async ()  => {
    signOut()
  }
  return (
    <button className="flex mt-2 text-red-600 " onClick={signoutHandler}>
      <p className="p-1 font-bold">
        <FiLogOut />
      </p>
      خروج
    </button>
  )
}

export default LogoutButton

