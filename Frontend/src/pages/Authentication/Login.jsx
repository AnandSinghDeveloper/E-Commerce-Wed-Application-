import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CommonFrom from "@/components/Common/CommonFrom";
import { loginfromconfig } from "@/config/Config";

const initialFormData = {
  email: "",
  password: "",
};

const Login = () => {
  const [Fromdata, setFromdata] = React.useState(initialFormData);

  return (
    <div className="space-y-6 mx-w-md mx-auto w-full bg-transparent relative  ">
      <img
        src="https://img.freepik.com/free-vector/gradient-ssl-illustration_23-2149247155.jpg?t=st=1744354588~exp=1744358188~hmac=8cccba7ec2dde92b974b1597cc9ef05e904652352fa70302708bef741ff615c4&w=826"
        alt="Group-10-1"
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover opacity-60 p-10  "
      />

      <div className=" text-center  ">
        <h1 className="text-3xl font-bold tracking-tight  text-[#0A88E1]  mb">
          Welcome , Login here
        </h1>
        <p className="mt-2 text-[#83E7E9]  ">
          Don't have an account?{" "}
          <Link
            className="text-primary font-medium ml-2 hover: underline"
            to="/auth/register"
          >
            Sign up
          </Link>
        </p>
      </div>
      <CommonFrom
        Formcontorl={loginfromconfig}
        Fromdata={Fromdata}
        setFromdata={setFromdata}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(Fromdata);
        }}
        buttonText={"Login"}
        color="#014F8E"
      />
    </div>
  );
};

export default Login;
