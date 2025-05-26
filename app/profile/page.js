import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-13">
        <h1 className="text-3xl font-bold">Welcome to Your Profile Page</h1>
        <ul className="mt-10 flex flex-col gap-4">
          <li>
            <div>Name</div>
            <input className="bg-transparent border-1 border-[#535256] rounded-md h-8 w-[500px]" type="text" />
          </li>
          <li>
            <div>Email</div>
            <input className="bg-transparent border-1 border-[#535256] rounded-md h-8" type="text" />
          </li>
          <li>
            <div>Username</div>
            <input className="bg-transparent border-1 border-[#535256] rounded-md h-8" type="text" />
          </li>
          <li>
            <div>Profile Picture</div>
            <input className="bg-transparent border-1 border-[#535256] rounded-md h-8" type="text" />
          </li>
          <li>
            <div>Banner Picture</div>
            <input className="bg-transparent border-1 border-[#535256] rounded-md h-8" type="text" />
          </li>
          <li>
            <div>RazorPay Credentials</div>
            <input className="bg-transparent border-1 border-[#535256] rounded-md h-8" type="text" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
