import React from "react";
import PermissionedPage from "../authentication/PermissionedPage";

const CustomerSupport = () => {
  let authRole;
  let role;

  const _user = localStorage.getItem("user");

  if (_user) {
    authRole = JSON.parse(_user).role;
  }

  if (authRole === "MANAGER") {
    role = "MANAGER";
  } else if (authRole === "ADMIN") {
    role = "ADMIN";
  }

  return (
    <PermissionedPage roleRequired={role}>
      <div className="user-mgt">
        <h1>Welcome Customer Support!</h1>
        Admin and Manager have access to this page
      </div>
    </PermissionedPage>
  );
};

export default CustomerSupport;
