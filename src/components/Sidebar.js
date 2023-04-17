import React from "react";
import "../scss/components/SideBar.scss";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaUsersCog } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BiTask } from "react-icons/bi";

const CustomNavLink = ({ to, ...props }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "bar-link active-bar" : "bar-link"
      }
      to={to}
      end
      {...props}
    />
  );
};

const Sidebar = ({ collaspe }) => {
  let ROLE;
  const _user = localStorage.getItem("user");
  if (_user) {
    ROLE = JSON.parse(_user).role;
  }

  return (
    <div className={`sidebar ${!collaspe ? "showbar" : ""}`}>
      <nav className="navbar">
        <CustomNavLink to={"./"}>
          <span>
            <IoAnalyticsOutline />
          </span>
          <span>Dashboard</span>
        </CustomNavLink>

        <CustomNavLink to={"./tickets"}>
          <span>
            <BiTask />
          </span>
          <span>Tickets</span>
        </CustomNavLink>
        {ROLE === "MANAGER" && (
          <CustomNavLink to={"./user-management"}>
            <span>
              <FaUsersCog />
            </span>
            <span>User Management</span>
          </CustomNavLink>
        )}
        {(ROLE === "MANAGER" || ROLE === "ADMIN") && (
          <CustomNavLink to={"./customer-support"}>
            <span>
              <MdSupportAgent />
            </span>
            <span>Customer Support</span>
          </CustomNavLink>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
