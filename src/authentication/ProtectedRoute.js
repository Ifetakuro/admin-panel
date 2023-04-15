import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout";

const useAuth = () => {
  let user;

  const _user = localStorage.getItem("user");

  if (_user) {
    user = JSON.parse(_user);
    console.log("user", user);
  }
  if (user) {
    return {
      auth: true,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    };
  } else {
    return {
      auth: false,
      firstName: null,
      lastName: null,
      role: null,
    };
  }
};

//protected Route state

const ProtectedRoutes = ({ roleRequired }) => {
  const { auth, role } = useAuth();

  //if the role required is there or not
  if (roleRequired) {
    return auth ? (
      roleRequired === role ? (
        <Layout>
          <Outlet />
        </Layout>
      ) : (
        <Navigate to="/access-denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return auth ? (
      <Layout>
        <Outlet />
      </Layout>
    ) : (
      <Navigate to="/login" />
    );
  }
};

export default ProtectedRoutes;
