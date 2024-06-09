// BackOffice.js

import React from "react";
import { Link, Outlet } from "react-router-dom";

const BackOffice = () => {
  const isLoggedIn = false;
  return (
    <div className="flex flex-col ">
      {!isLoggedIn ? (
        <div className="w-full flex bg-blue-950 justify-center items-center">
           <div className="p-4 bg-white shadow-2xl rounded-xl my-10 w-[80%] h-[76vh] max-h-[76vh] flex-col gap-5 flex items-center justify-center">
          <h4 className="text-4xl  font-semibold text-blue-600">BackOffice Ai</h4>
          <p className="text-xl text-gray-500">
            If you want to use the app{" "}
            <Link to="login" className="font-semibold underline-offset-4 underline text-blue-600">
              log in
            </Link>{" "}
            first
          </p>
        </div>
       </div>
      ) : (
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
      )}
    </div>
  );
};

export default BackOffice;
