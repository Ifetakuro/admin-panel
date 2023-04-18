import React from "react";
import { Link } from "react-router-dom";
import { NotFoundSvg } from "../assets/NotFoundSvg";
import "../scss/Pages/NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <NotFoundSvg />
      <Link to={"/"}>Please return to dashboard</Link>
    </div>
  );
};

export default NotFound;
