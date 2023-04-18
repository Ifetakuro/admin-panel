import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../scss/components/Layout.scss";
import { useState } from "react";

const Layout = ({ children }) => {
  const [toggleBtn, setToggleBtn] = useState(false);

  return (
    <div className={"layout"}>
      <Header collapse={toggleBtn} onClick={() => setToggleBtn(!toggleBtn)} />
      <Sidebar collaspe={toggleBtn} />
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
