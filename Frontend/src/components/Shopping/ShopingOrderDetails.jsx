import React, { useEffect } from "react";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "../ui/badge";

const ShopingOrderDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const { orderDetails } = useSelector((state) => state.order);
  console.log(orderDetails);

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
                    : orderDetails?.orderStatus === "Rejected"
                    ? "bg-red-500"
                    : orderDetails?.orderStatus === "Delivered"
                    ? "bg-[#5752e2]"
                    : "bg-violet-500"
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
          <div className="flex mt-2 items-center justify-between">
            <p className=" font-medium">Payment Status</p>
            <Label>{orderDetails?.paymentStatus}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className=" font-medium">Payment method</p>
            <Label>{orderDetails?.paymentMethod}</Label>
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
                      <span> {items?.title}</span>
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
              <span>{user.userName}</span>
              <span>{orderDetails?.AddressInfo?.address}</span>
              <span>{orderDetails?.AddressInfo?.city}</span>
              <span>{orderDetails?.AddressInfo?.pincode}</span>
              <span>{orderDetails?.AddressInfo?.phone}</span>
              <span>{orderDetails?.AddressInfo?.notes}</span>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default ShopingOrderDetails;
