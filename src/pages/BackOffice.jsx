// BackOffice.js

import React from "react";
import { Link, Outlet } from "react-router-dom";

const BackOffice = () => {
  return (
    <div

      className="flex flex-col "
    >
      <div className="flex h-full bg-blue-950 py-4">
        <div className="flex gap-5 mx-auto w-4/5">
          <div className="w-1/4 ">
           <div className="rounded-xl p-4 bg-white/95">
           <div className="p-4 rounded-xl bg-white   shadow-2xl">
              <Link
                className="flex justify-between items-center px-4 py-3 rounded-xl text-xl font-semibold text-blue-600 transition duration-300 ease-in-out hover:bg-blue-200"
                to="chats"
              >
                Chats <span className="text-lg">5</span>
              </Link>
              <Link
                className="flex justify-between items-center px-4 py-3 rounded-xl text-xl font-semibold text-blue-600 transition duration-300 ease-in-out hover:bg-blue-200"
                to="Q_&_A"
              >
                Q & A <span className="text-lg">133</span>
              </Link>
            </div>
           </div>
          </div>
          <div className="w-3/4 ">
            <div className="p-4 rounded-xl bg-white bg-opacity-95 shadow-lg">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackOffice;
