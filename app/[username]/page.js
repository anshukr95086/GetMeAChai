/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Button from "@/components/button";
import Image from "next/image";
const Profile = () => {
  const { data: session } = useSession();
  if (!session) {
    return redirect("/login");
  }

  const payPrice = (amount) => {
    const price = amount.target.value;
  };

  return (
    <>
      <div className="mt-2 relative">
        <img
          className="object-cover w-full h-[300px]"
          src="/banner.jpg"
          alt=""
        />
        <div className="absolute w-full -bottom-[75px]">
          <img
            className="rounded-full border-2 border-[#535256] mx-auto"
            src="/profile.jpg"
            width="150"
            alt=""
          />
        </div>

        <div className="flex gap-3 items-center mt-5 absolute right-14">
          <Button>Upgrade</Button>
          <button className="bg-[#4a4a4a] p-2 rounded-md">
            <img className="invert" src="/share.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-22">
        <h1 className="name text-3xl font-bold">Anshu Kumar</h1>
        <div className="description text-[#a0a0a0] font-medium">
          Creating Websites, YouTube videos, and more!
        </div>
      </div>

      {/* Supporters part */}
      <div className="container flex justify-center items-center gap-20 mt-10 mx-auto">
        <div className="supporters w-1/2 h-[300px] flex flex-col items-center justify-center relative px-10">
          <div className="absolute top-4 font-bold text-2xl bg-black/40 pb-1 border-[#535256]/40 border-1 w-3/4 text-center rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Our Recent Supporters
          </div>
          <div className="flex flex-col gap-1 text-lg overflow-y-scroll mt-16">
            <li className="list-none flex gap-2">
              <div><Image src={"/avatar.gif"} width={30} height={30} alt=""/></div>
              <div>Anshu donated <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text"> $20 </span>with a
              message &quot;&quot;</div>
            </li>
          </div>
        </div>
        <div className="support w-1/2 h-[300px] flex items-center justify-center relative px-10">
          <div className="absolute top-4 font-bold text-2xl bg-black/20 pb-1 border-[#535256]/40 border-1 w-3/4 text-center rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Get Me A Chai
          </div>

          <div className="payment mt-10">
            <div className="flex flex-col gap-2">
              <input
                className="border-[#535256] border-1 pl-4 rounded-md max-w-full py-2"
                type="text"
                placeholder="Enter Name"
              />
              <input
                className="border-[#535256] border-1 pl-4 rounded-md max-w-full py-2"
                type="text"
                placeholder="Enter Message"
              />
              <div className="flex gap-2 mb-4 w-full">
                <input
                  className="border-[#535256] border-1 pl-4 rounded-md max-w-full"
                  type="number"
                  placeholder="Enter Amount"
                />
                <Button>Donate</Button>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="border-1 border-[#535256] rounded-md px-3 py-1 bg-gray-600"
                name="20"
                value={20}
                onClick={() => payPrice()}
              >
                $20
              </button>
              <button
                className="border-1 border-[#535256] rounded-md px-3 py-1 bg-gray-600"
                name="35"
                value={35}
                onClick={() => payPrice()}
              >
                $35
              </button>
              <button
                className="border-1 border-[#535256] rounded-md px-3 py-1 bg-gray-600"
                name="50"
                value={50}
                onClick={() => payPrice()}
              >
                $50
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <button
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center mb-2 mt-2.5 flex items-center justify-center gap-1 mr-10"
          onClick={() => signOut()}
        >
          <Image
            className=""
            src="/signout.svg"
            alt=""
            width={20}
            height={20}
            priority
          />
          <span className="text-md">Log Out</span>
        </button>
      </div>
    </>
  );
};

export default Profile;
