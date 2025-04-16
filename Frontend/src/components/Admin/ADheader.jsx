import React from "react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { AlignJustify } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth-slice/auth-slice";
import { toast } from "sonner";

const ADheader = ({ open, setOpen }) => {
  const dispatch = useDispatch()

  const HandleDelete = () => {
    
    dispatch(logout()).then((data) => {
      if (data?.payload?.success) {
        console.log(data);
        window.location.reload();
        toast.success(data?.payload?.message);
      }
    })

    
  }

  return (
    <header className="flex justify-center items-center  px-4 py-3 border-b  ">
      <Button onClick={() => setOpen(!open)} className=" lg:hidden sm:block  ">
        <AlignJustify />
        <span className="sr-only">Toggle navigation</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button onClick={HandleDelete} className="  inline-flex items-center gap-2 cursor-pointer  text-sm font-medium px-4 py-2 rounded-md shadow  ">
          <LogOut  className="" />
          LogOut
        </Button>
      </div>
    </header>
  );
};

export default ADheader;
