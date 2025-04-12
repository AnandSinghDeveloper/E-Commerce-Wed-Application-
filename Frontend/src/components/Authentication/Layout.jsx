import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" flex min-h-screen w-full">
      <div className="hidden lg:flex justify-center items-center w-1/2 bg-[#835CB5] rounded-tr-3xl rounded-br-3xl px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight font-[ubuntu] ">
            Welcome E-commerce Shopping
          </h1>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center font-[ubuntu]  py-12 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
