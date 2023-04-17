import React from "react";
import PermissionedPage from "../authentication/PermissionedPage";
import "../scss/Pages/UserManagement.scss";

const UserManagement = () => {
  return (
    <PermissionedPage roleRequired="MANAGER">
      <div className="user-mgt">
        <h1>Welcome User Management</h1>
        Only Manager have access to this page
      </div>
    </PermissionedPage>
  );
};

export default UserManagement;
