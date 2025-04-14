import React, { Fragment } from "react";
import { ChartNoAxesCombined } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { adminMenuItems } from "@/config/Config";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Sheet } from "../ui/sheet";

function MenuItem(item, setOpen) {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-col gap-2 mt-8 ">
      {adminMenuItems.map((item) => (
        <div
          className=" cursor-pointer flex items-center gap-2 rounded-md px-3 py-2  text-muted-foreground hover:bg-muted hover:text-foreground font-medium active:p-2  active:bg-accent active:text-accent-foreground active:border active:border-slate-200  "
          key={item.id}
          onClick={() => {
            navigate(item.path);
            setOpen ? setOpen((open) => !open) : null;
          }}
        >
          {item.icon}
          <span className="">{item.label}</span>
        </div>
      ))}
    </nav>
  );
}

const ADsidebar = ({ open, setOpen }) => {
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-60 rounded-tr-2xl rounded-br-xl">
          <div className="flex flex-col h-full p-3 rounded-xl">
            <SheetHeader className={"border-b"}>
              <SheetTitle className={"flex items-center gap-2 mt-5 mb-5"}>
                <ChartNoAxesCombined className={"size-10"} />
                <span className={"text-xl font-bold font-[ubuntu] "}>Admin Pabal</span>
              </SheetTitle>
            </SheetHeader>
            <MenuItem setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className=" flex-col hidden w-64 bg-background border-r rounded-tr-xl rounded-br-xl  p-6  lg:flex">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2  "
        >
          <ChartNoAxesCombined className={"size-10"} />
          <h1 className="text-2xl font-bold font-[ubuntu]">Admin Panal</h1>
        </div>
        <MenuItem />
      </aside>
    </Fragment>
  );
};

export default ADsidebar;
