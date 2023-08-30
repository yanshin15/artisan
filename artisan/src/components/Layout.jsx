import React from "react";

function Layout(props) {
  const { children } = props;
  return (
    <div
      className=" w-full bg-cream-background h-[80%] p-3 
    "
    >
      {children}
    </div>
  );
}

export default Layout;
