
import React, { useEffect } from "react";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOderByUser } from "@/store/Shop/OderSlice";

const ShopingOrderDetails = () => {
const dispatch = useDispatch();
const {user} = useSelector((state) => state.auth);
const {orderList} = useSelector((state) => state.order);
useEffect(() => {
  dispatch(getAllOderByUser(user?.id))
}, [dispatch]);

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
          
          
        </div>
      </div>
    </DialogContent>
  )
}

export default ShopingOrderDetails
