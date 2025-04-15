import React from "react";
import { Outlet } from "react-router-dom";
import ADheader from "./ADheader";
import ADsidebar from "./ADsidebar";
import { useState } from "react";

const ADlayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" flex min-h-screen w-full">
      <ADsidebar open={open} setOpen={setOpen} />
      <div className="flex flex-1 flex-col">
        <ADheader open={open} setOpen={setOpen} />
        <main className=" flex flex-1 flex-col bg-white p-4 md:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ADlayout;
