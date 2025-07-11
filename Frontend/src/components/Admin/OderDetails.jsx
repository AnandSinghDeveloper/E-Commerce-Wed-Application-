import React from "react";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import CommonFrom from "../Common/CommonFrom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "../ui/badge";
import { updateOderStatus } from "@/store/Admin/ADorderSlice";
import { toast } from "sonner";
import { getAllOder, getoderDetails } from "@/store/Admin/ADorderSlice";

const initialFormData = {
  orderStatus: "",
};

const OderDetails = () => {
  const { orderDetails } = useSelector((state) => state.adminOrder);
  const [fromdata, setFromdata] = useState(initialFormData);
  const dispatch = useDispatch();
  

  const handleupdateOrderStatus = (e) => {
    e.preventDefault();
    const {orderStatus}= fromdata;
     console.log(orderStatus , orderDetails?._id);

    dispatch(updateOderStatus({ id: orderDetails?._id, orderStatus: orderStatus })).then((data) => {
      if (data?.payload?.success) {
        dispatch(getAllOder());
        dispatch(getoderDetails(orderDetails?._id));
        setFromdata(initialFormData);
        
        toast.success(data?.payload?.message);
      } else {
        toast.error(data?.payload?.message);
        console.log(data);
        
      }
    });
    
  };

  return (
    <DialogContent className={"sm:max-w-[600px]"}>
      <div className="grid gap-3">
        <div className="grid gap-1 ">
          <div className="flex mt-3 items-center justify-between">
            <p className="text-lg font-bold">Order ID</p>
            <Label>{orderDetails?._id}</Label>
          </div>
          <div className="flex mt-1 items-center justify-between">
            <p className=" font-medium">Order Date</p>
            <Label>{orderDetails?.orderDate.split("T")[0]}</Label>
          </div>
           <div className="flex mt-1 items-center justify-between">
                      <p className=" font-medium">Payment Status</p>
                      <Label>{orderDetails?.paymentStatus}</Label>
                    </div>
                    <div className="flex mt-1 items-center justify-between">
                      <p className=" font-medium">Payment method</p>
                      <Label>{orderDetails?.paymentMethod}</Label>
                    </div>
          <div className="flex mt-1 items-center justify-between">
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
                    ? "bg-[#4640de]"
                    : "bg-violet-500"
                }`}
              >
                {orderDetails?.orderStatus}
              </Badge>
            </Label>
          </div>
          <div className="flex mt-1 items-center justify-between">
            <p className=" font-medium">Order Amunot</p>
            <Label>${orderDetails?.totalAmount}</Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-1 ">
          <div className="grid gap-1">
            <div className="text-lg font-bold">Order Details</div>
            <ul className="grid gap-1">
               {orderDetails && orderDetails.cartitems.length > 0
                ? orderDetails.cartitems.map((items, idx) => (
                    <li key={idx} className="flex items-center justify-between">
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
        <div className="grid gap-1">
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
