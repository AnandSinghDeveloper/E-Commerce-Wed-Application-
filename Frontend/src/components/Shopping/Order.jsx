import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useState } from "react";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "../ui/table";
import { Button } from "../ui/button";
import { Dialog } from "../ui/dialog";
import OderDetails from "./ShopingOrderDetails";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOderByUser,getoderDetails } from "@/store/Shop/OderSlice";
import { Badge } from "../ui/badge";

const Order = () => {
  const [openOderDetails, setOpenOderDetails] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { orderList,orderDetails } = useSelector((state) => state.order);
  const  handleOderDetails = (getOrderId)=>{
  //  console.log(getOrderId);

    dispatch(getoderDetails(getOrderId));
    // console.log(orderDetails);
    setOpenOderDetails(true)
    
  }

  useEffect(() => {
    dispatch(getAllOderByUser(user?.id));
  }, [dispatch]);

  // console.log(orderList);
  

  
  return (
    <Card>
      <CardHeader>Order History</CardHeader>
      <CardContent className={"w-full"}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead> Order Date</TableHead>
              <TableHead> Order Status</TableHead>
              <TableHead> Order Amunot </TableHead>
              <TableHead className={"sr-only"}>Details</TableHead>
            </TableRow>
          </TableHeader>
<TableBody>
          {
             orderList && orderList.length > 0 ? orderList.map((orderitem, index) =>( 
            <TableRow>
              <TableCell>{orderitem?._id}</TableCell>
              <TableCell>{orderitem?.orderDate.split("T")[0]}</TableCell>
              <TableCell> <Badge className={`py-1 px-3 rounded-full ${orderitem?.orderStatus === "pending" ? "bg-yellow-500" : orderitem?.orderStatus === "confirmed" ? "bg-green-500" : "bg-red-500"}`}>{orderitem?.orderStatus}</Badge></TableCell>
              <TableCell>$ {orderitem?.totalAmount} </TableCell>
              <TableCell>
                <Dialog
                  open={openOderDetails}
                  onOpenChange={() => {
                    setOpenOderDetails(!openOderDetails);
                   
                  }}
                >
                  <Button
                    onClick={() => {
                     handleOderDetails(orderitem?._id);
                    }}
                  >
                    View Details
                  </Button>
                  <OderDetails />
                </Dialog>
              </TableCell>
            </TableRow>
          ) )  :null
          }
         </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Order;
