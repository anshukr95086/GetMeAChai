"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Upgrade from "@/components/upgrade";
const Profile = () => {
  const { data: session } = useSession();
  if (!session) {
    return redirect("/login");
  }

  return (
    <>
      <div className="mt-2 relative">
        <img className="object-cover w-full h-[300px]" src="/banner.jpg" alt=""/>
        <div className="absolute w-full -bottom-[75px]"><img className="rounded-full border-2 border-[#535256] mx-auto" src="/profile.jpg" width="150" alt=""/></div>   

        <div className="flex gap-3 items-center mt-5 absolute right-14">
          <Upgrade/>
          <button className="bg-[#4a4a4a] p-2 rounded-md"><img className="invert" src="/share.svg" alt=""/></button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-22">
        <h1 class="name text-3xl font-bold">Anshu Kumar</h1>
        <div class="description text-[#a0a0a0] font-medium">Creating Websites, YouTube videos, and more!</div>
      </div>

      <div className="container flex justify-center items-center gap-20 mt-10 mx-auto">
        <div class="supporters w-1/2 h-64 bg-red-800 flex items-center justify-center">
           <div>Our Recent supporters</div>
        </div>
        <div class="support w-1/2 bg-amber-500 flex items-center justify-center">
        <div>Become One of Them</div></div>
      </div>
    </>
  );
};

export default Profile;
