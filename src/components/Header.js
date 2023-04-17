import React from "react";
import "../scss/components/Header.scss";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../authentication/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ collapse, onClick }) => {
  let user;
  const navigate = useNavigate();

  const _user = localStorage.getItem("user");
  if (_user) {
    user = JSON.parse(_user);
  }

  const Logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-div">
        <h3>Admin Panel</h3>
        {collapse ? (
          <BsArrowRightCircleFill className="svg-btn" onClick={onClick} />
        ) : (
          <BsArrowLeftCircleFill className="svg-btn" onClick={onClick} />
        )}
      </div>
      <ul className="list">
        <li>{user.firstName[0]}</li>
        <li>
          <h4>
            {user.firstName} {user.lastName}
          </h4>
          <p className="role">{user.role}</p>
        </li>
        <li onClick={Logout}>Logout</li>
      </ul>
    </header>
  );
};

export default Header;
