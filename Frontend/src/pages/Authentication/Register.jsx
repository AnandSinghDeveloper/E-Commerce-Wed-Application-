import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CommonFrom from "@/components/Common/CommonFrom";
import { registerfromconfig } from "@/config/Config";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/auth-slice/auth-slice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialFormData = {
  userName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [fromdata, setFromdata] = useState(initialFormData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(fromdata)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);

      }else{
        toast.error(data?.payload?.message);
      }
      navigate("/auth/login");
    });

    // console.log(fromdata);
  };

  // console.log(fromdata);
  

  return (
    <div className="space-y-6 mx-w-md mx-auto w-full bg-transparent relative  ">
      <img
        src="https://img.freepik.com/free-vector/gradient-ssl-illustration_23-2149247155.jpg?t=st=1744354588~exp=1744358188~hmac=8cccba7ec2dde92b974b1597cc9ef05e904652352fa70302708bef741ff615c4&w=826"
        alt="Group-10-1"
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover opacity-60 p-10  "
      />

      <div className=" text-center  ">
        <h1 className="text-3xl font-bold tracking-tight  font-[ubuntu] text-[#0A88E1] ">
          Create new account
        </h1>
        <p className="mt-2 font-[ubuntu] text-[#83E7E9]  ">
          Already have an account?{" "}
          <Link
            className="text-primary font-medium ml-2 hover: underline"
            to="/auth/login"
          >
            Log in
          </Link>
        </p>
      </div>
      <CommonFrom
        Formcontorl={registerfromconfig}
        Fromdata={fromdata}
        setFromdata={setFromdata}
        onSubmit={onsubmit}
        buttonText={"Create account"}
        color="#014F8E"
      />
    </div>
  );
};

export default Register;
