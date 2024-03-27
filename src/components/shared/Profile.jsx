import React, { useState } from "react";
import Notifications from "./Notifications";

const Profile = () => {
  const [name, setName] = useState("David");

  return (
    <div className=" items-center">
      <div className="flex justify-center items-center text-center">
      
          <svg
            style={{ width: "80px", height: "100px" }}
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            ></path>
          </svg>
        
       
      </div>
      <p className="text-lg text  items-center text-center text-blue-800 font-semibold">Hi {name}, welcome</p>
        
      <div className="border-t border-gray-200 mt-2 pt-2  items-center"></div>
      <Notifications/>
    </div>
  );
};

export default Profile;
