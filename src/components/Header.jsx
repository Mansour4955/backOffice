import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import uir from "../images/uir.jpg";
function Header() {
  const [language, setLanguage] = useState("En");
  const [formType, setFormType] = useState("Professional");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  const handleFormTypeChange = (selectedType) => {
    setFormType(selectedType);
  };
  return (
    <div className="py-2 px-10 flex items-center justify-between gap-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="flex gap-3 px-2 items-center justify-center">
        <Link to="/" className="text-3xl font-semibold text-blue-600">
          <img alt="uir" src={uir} className="h-10 w-10" />
        </Link>
      </div>
      <div className="flex gap-3 px-2 items-center justify-center">
        <NavLink
          className={`flex items-center justify-center px-2 py-1 rounded-lg text-white font-semibold bg-blue-600 hover:text-blue-600 hover:bg-white duration-150`}
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className={`flex items-center justify-center px-2 py-1 rounded-lg text-white font-semibold bg-blue-600 hover:text-blue-600 hover:bg-white duration-150`}
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
