import React from "react";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import CommonFrom from "../Common/CommonFrom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Badge } from "../ui/badge";

const initialFormData = {
  orderStatus: "",
};

const OderDetails = () => {
  const { orderDetails } = useSelector((state) => state.adminOrder);


  

  const [fromdata, setFromdata] = useState(initialFormData);

  const handleupdateOrderStatus = (e) => {
    e.preventDefault();
  };

  return (
    <DialogContent className={"sm:max-w-[600px]"}>
      <div className="grid gap-6">
        <div className="grid gap-2 ">
          <div className="flex mt-6 items-center justify-between">
            <p className="text-lg font-bold">Order ID</p>
            <Label>{orderDetails?._id}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className=" font-medium">Order Date</p>
            <Label>{orderDetails?.orderDate.split("T")[0]}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className=" font-medium">Order Status</p>
            <Label>
              <Badge
                className={`py-1 px-3 rounded-full ${
                  orderDetails?.orderStatus === "pending"
                    ? "bg-yellow-500"
                    : orderDetails?.orderStatus === "confirmed"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {orderDetails?.orderStatus}
              </Badge>
            </Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className=" font-medium">Order Amunot</p>
            <Label>${orderDetails?.totalAmount}</Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-2 ">
          <div className="grid gap-2">
            <div className="text-lg font-bold">Order Details</div>
            <ul className="grid gap-3">
               {orderDetails && orderDetails.cartitems.length > 0
                ? orderDetails.cartitems.map((items, idx) => (
                    <li className="flex items-center justify-between">
                      <span>  {items?.title}</span>
                       <span> Quantity : {items?.quantity}</span>
                      <span>Rs. {items?.price}</span>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-bold "> Shipping Details</div>
            <div className=" grid gap-0.5 text-muted-foreground">
              <span>Gautam</span>
              <span>{orderDetails?.AddressInfo?.address}</span>
              <span>{orderDetails?.AddressInfo?.city}</span>
              <span>{orderDetails?.AddressInfo?.phone}</span>
              <span>{orderDetails?.AddressInfo?.pincode}</span>
              <span>{orderDetails?.AddressInfo?.notes}</span>
            </div>
          </div>
          <div>
            <CommonFrom
              Formcontorl={[
                {
                  label: "Order Status",
                  componentType: "select",
                  name: "orderStatus",
                  options: [
                    { label: "Pending", id: "Pending" },
                    { label: "Delivered", id: "Delivered" },
                    { label: "Rejected", id: "Rejected" },
                    { label: "In Process", id: "In Process" },
                    { label: "In Shiping", id: "In Shiping" },
                  ],
                },
              ]}
              Fromdata={fromdata}
              setFromdata={setFromdata}
              onSubmit={handleupdateOrderStatus}
              buttonText={"Update order status"}
            />
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default OderDetails;
