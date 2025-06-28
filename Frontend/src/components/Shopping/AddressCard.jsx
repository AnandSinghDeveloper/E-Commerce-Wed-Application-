import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const AddressCard = ({
  addressInfo,
  handleDelete,
  handleEdit,
  setCurrentAddress,
  selectedId,
}) => {

 
  
  return (
    <Card
      onClick={() => {
        setCurrentAddress ? setCurrentAddress(addressInfo) : null;
      }}
      className={`relative overflow-hidden w-full cursor-pointer ${
        selectedId === addressInfo._id ? "border-[4px] border-[#340e76] " : "border-black"}`}
    >
      {/* <ShineBorder shineColor={["#991F87", "#", "#FFAA43"]} /> */}

      <CardContent className={` grid gap-4 `}>
        <div className=" flex gap-5 ">
          {" "}
          <Label className={"text-md font-semibold"}>Address : </Label>{" "}
          <span>{addressInfo?.address}</span>
        </div>
        <div className=" flex gap-5 ">
          {" "}
          <Label className={"text- font-semibold"}>City : </Label>{" "}
          <span>{addressInfo?.city}</span>
        </div>
        <div className=" flex gap-5 ">
          {" "}
          <Label className={"text-md font-semibold"}>PinCode : </Label>{" "}
          <span>{addressInfo?.pincode}</span>
        </div>
        <div className=" flex gap-5 ">
          {" "}
          <Label className={"text-md font-semibold"}>Phone : </Label>{" "}
          <span>{addressInfo?.phone}</span>
        </div>
        <div className=" flex gap-5 ">
          {" "}
          <Label className={"text-md font-semibold"}>Notes : </Label>{" "}
          <span>{addressInfo?.notes}</span>
        </div>
      </CardContent>
      <CardFooter className={"flex justify-between"}>
        <Button
          className="px-10"
          onClick={() => {
            handleEdit(addressInfo);
          }}
        >
          Edit
        </Button>
        <Button
          className="px-10"
          onClick={() => {
            handleDelete(addressInfo);
          }}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AddressCard;
