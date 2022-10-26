import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { getMonth } from "../../functions/currentMonth";
import "./Header.style.css";

const Header = () => {
  // Get Today Date
  let current = new Date();
  const date = `${getMonth(
    current.getMonth() + 1
  )} ${current.getDate()}, ${current.getFullYear()}`;

  // Get name of the current Page
  const location = useLocation();
  function currentPageName() {
    if (location.pathname === "/") return "Dashboard";
    else {
      return location.pathname.slice(1);
    }
  }

  return (
    <div className="header">
      <div className="header-container">
        <div>
          <p className="header-page">{currentPageName()}</p>
          <p className="header-date">{date}</p>
        </div>
        <ul className="header-options">
          <li>
            {/* Rather than new Page open New Modal here */}
            <div className="header-options-type">
              {/* add number of notification bubble */}
              <IoNotificationsOutline size={25} color="#f0f0f0" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
