import React from "react";

const Container = ({ children, bgColor }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full flex items-center justify-center"
    >
      <div className="w-full max-w-screen-xl">{children}</div>
    </div>
  );
};

export default Container;
