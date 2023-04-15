import React from "react";
import PermissionedPage from "../authentication/PermissionedPage";
import "../scss/Pages/UserManagement.scss";

const UserManagement = () => {
  return (
    <PermissionedPage roleRequired="MANAGER">
      <div className="user-mgt">
        <h1>Welcome Admin!</h1>
        <button>User Magement</button>
      </div>
    </PermissionedPage>
  );
};

export default UserManagement;
