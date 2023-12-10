"use client";
import React, { useEffect } from "react";

const Modal = ({ children }) => {
  // Back Scroll Remove
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="bg-[rgb(0,0,0,0.75)] top-0 right-0 bottom-0 left-0 fixed z-50 w-full h-full flex justify-center items-center overflow-x-hidden overflow-y-auto  ">
      {children}
    </div>
  );
};

export default Modal;
