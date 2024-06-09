import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const isLoggedIn = false;
  return (
    <div className="py-2 flex items-center  justify-evenly text-blue-500  bg-white">
      {isLoggedIn && (
        <div className="flex items-center gap-5 justify-center">
          <Link
            className="flex justify-between items-center px-4 py-3 rounded-xl text-xl font-semibold text-blue-600 transition duration-300 ease-in-out hover:bg-blue-200"
            to="chats"
          >
            Chats
          </Link>
          <Link
            className="flex justify-between items-center px-4 py-3 rounded-xl text-xl font-semibold text-blue-600 transition duration-300 ease-in-out hover:bg-blue-200"
            to="Q_&_A"
          >
            Q & A
          </Link>
        </div>
      )}
      <h3 className="text-2xl font-semibold">&copy; All rights reserved!</h3>
    </div>
  );
};

export default Footer;
