import React from "react";
import MainHeader from "./mainHeader";
function Layout(props) {
  return (
    <div>
      <MainHeader />
      {props.children}
    </div>
  );
}

export default Layout;
