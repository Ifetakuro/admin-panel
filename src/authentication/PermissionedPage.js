import React from "react";
import PermissionDenied from "../components/PermissionDenied";

const useRole = () => {
  let user;

  const _user = localStorage.getItem("user");

  if (_user) {
    user = JSON.parse(_user);
  }
  if (user) {
    return user.role;
  } else {
    return "No Role";
  }
};

const PermissionedPage = ({ roleRequired, children }) => {
  const role = useRole();
  return <>{roleRequired === role ? children : <PermissionDenied />}</>;
};

export default PermissionedPage;
