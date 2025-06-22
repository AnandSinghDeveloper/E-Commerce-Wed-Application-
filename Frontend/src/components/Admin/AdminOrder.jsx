import React, { useEffect } from "react";
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
import OderDetails from "./OderDetails";
import { useDispatch, useSelector } from "react-redux";
import { getAllOder, getoderDetails } from "@/store/Admin/ADorderSlice";
import { Badge } from "../ui/badge";

const AdminOrder = () => {
  const [openOderDetails, setOpenOderDetails] = useState(false);
  const { orderList } = useSelector((state) => state.adminOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOder());
  }, [dispatch]);

  const handleOderDetails = (getOrderId) => {
    dispatch(getoderDetails(getOrderId));
    setOpenOderDetails(true);
  };

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
            {orderList && orderList.length > 0
              ? orderList.map((orderitem, index) => (
                  <TableRow key={index}>
                    <TableCell>{orderitem?._id}</TableCell>
                    <TableCell>{orderitem?.orderDate.split("T")[0]}</TableCell>
                    <TableCell>
                      {" "}
                      <Badge
                        className={`py-1 px-3 rounded-full ${
                          orderitem?.orderStatus === "pending"
                            ? "bg-yellow-500"
                            : orderitem?.orderStatus === "confirmed"
                            ? "bg-green-500"
                            : orderitem?.orderStatus === "Rejected"
                            ? "bg-red-500"
                            : orderitem?.orderStatus === "Delivered"
                            ? "bg-[#5752e2]"
                            : "bg-violet-500"
                        }`}
                      >
                        {orderitem?.orderStatus}
                      </Badge>
                    </TableCell>
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
                ))
              : null}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AdminOrder;
