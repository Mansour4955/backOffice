import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import uir from "../images/artificial-intelligence.png";
import { IoPersonCircleOutline } from "react-icons/io5";

function Header() {
  const isLoggedIn = false;
  return (
    <div className="py-2 px-10 flex items-center justify-between gap-5 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="flex gap-3 px-2 items-center justify-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 flex items-center gap-1"
        >
          <img alt="uir" src={uir} className="h-10 w-10" />
          <span>BackOffice</span>
        </Link>
      </div>
      {/* <div className="flex gap-3 px-2 items-center justify-center">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-blue-500 flex items-center justify-center text-2xl px-2 py-1 font-semibold text-blue-500 hover:text-blue-700 duration-150 border-b-[2px]"
              : "flex items-center justify-center text-2xl px-2 py-1 font-medium text-blue-500 hover:text-blue-700 duration-150"
          }
          to="/"
        >
          Chats
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-blue-500 flex items-center justify-center text-2xl px-2 py-1 font-semibold text-blue-500 hover:text-blue-700 duration-150 border-b-[2px]"
              : "flex items-center justify-center text-2xl px-2 py-1 font-medium text-blue-500 hover:text-blue-700 duration-150"
          }
          to="/Q_&_A"
        >
          Q & A
        </NavLink>
      </div> */}
      {!isLoggedIn ? (
        <div className="flex gap-3 px-2 items-center justify-center">
          <NavLink
            className={`flex items-center justify-center px-2 py-1 rounded-lg text-white font-semibold bg-blue-500 hover:text-blue-600 hover:bg-white duration-150`}
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            className={`flex items-center justify-center px-2 py-1 rounded-lg text-white font-semibold bg-blue-500 hover:text-blue-600 hover:bg-white duration-150`}
            to="/login"
          >
            Login
          </NavLink>
        </div>
      ) : (
        <div className="flex gap-1 px-2 items-center justify-center text-blue-600">
          <span>
            <IoPersonCircleOutline size={24} />
          </span>
          <span className="font-semibold text-xl">Mansour</span>
        </div>
      )}
    </div>
  );
}

export default Header;
