import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      404
      <Link to={"/"}>Please return to dashboard</Link>
    </div>
  );
};

export default NotFound;
