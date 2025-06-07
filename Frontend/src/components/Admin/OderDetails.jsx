import React from "react";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import CommonFrom from "../Common/CommonFrom";
import { useState } from "react";

const initialFormData = {
  orderStatus: "",
}
const OderDetails = () => {
 
 const [fromdata, setFromdata] = useState(initialFormData);

  const handleupdateOrderStatus = (e) => {
    e.preventDefault();

  }

  return (
    <DialogContent className={"sm:max-w-[600px]"}>
      <div className="grid gap-6">
        <div className="grid gap-2 ">
          <div className="flex mt-6 items-center justify-between">
            <p className="text-lg font-bold">Order ID</p>
            <Label>1516465116</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className=" font-medium">Order Date</p>
            <Label>2022-07-01</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className=" font-medium">Order Status</p>
            <Label>Pending</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className=" font-medium">Order Amunot</p>
            <Label>$500</Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-2 ">
          <div className="grid gap-2">
            <div className="text-lg font-bold">Order Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span>Football</span>
                <span>Rs. 1000</span>
              </li>
            </ul>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-bold "> Shipping Details</div>
            <div className=" grid gap-0.5 text-muted-foreground">
              <span>Gautam</span>
              <span>Address</span>
              <span>City</span>
              <span>PinCode</span>
              <span>Phone</span>
              <span>Notes</span>
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
