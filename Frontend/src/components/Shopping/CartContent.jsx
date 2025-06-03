import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteCartitem,
  UpdateCartitemQuantity,
} from "@/store/Shop/shopCartSlice";
import { toast } from "sonner";
import { useState } from "react";

const CartContent = ({ cartitem }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

 


 


  const handleDeleteCartItem = (getCartitem) => {
    dispatch(
      DeleteCartitem({ userId: user?.id, productId: getCartitem?.productId })
    ).then((data) => {
      if (data.payload.success) {
        toast.success(data.payload.message);
      }
    });
  };

  const handleUpdateCartItem = (getCartitem, type) => {
    dispatch(
      UpdateCartitemQuantity({
        userId: user?.id,
        productId: getCartitem?.productId,
        quantity:
          type === "increase"
            ? getCartitem?.quantity + 1
            : getCartitem?.quantity - 1,
      })
    ).then((data) => {
      if (data.payload.success) {
        toast.success(data.payload.message);
      }
    });
  };

  return (
    <div className="flex items-center space-x-4">
      <img
        src={cartitem.image}
        alt={cartitem.title}
        className="w-18 h-18 rounded-xl object-cover"
      />

      <div className="flex-1">
        <h2 className="font-bold">{cartitem.title}</h2>
        <div className="flex items-center mt-1 gap-2">
          <Button
            disabled={cartitem.quantity === 1}
            onClick={() => {
              handleUpdateCartItem(cartitem, "decrease");
            }}
            variant={"outline"}
            size={"icon"}
            className={"h-8 w-8 rounded-full"}
          >
            <Minus className="h-5 w-5" />
            <span className="sr-only"> Dicrese </span>
          </Button>
          <span className=" font-bold  ">{cartitem.quantity}</span>
          <Button
            onClick={() => {
              handleUpdateCartItem(cartitem, "increase");
            }}
            variant={"outline"}
            size={"icon"}
            className={"h-8 w-8 rounded-full"}
          >
            <Plus className="h-5 w-5" />
            <span className="sr-only"> increse </span>
          </Button>
        </div>
      </div>
      <div className="flex justify-end flex-col items-end ">
        <h2 className="font-semibold mr-2 ">
          $
          {(
            (cartitem?.sellingPrice > 0
              ? cartitem?.sellingPrice
              : cartitem?.price) * cartitem?.quantity
          ).toFixed(2)}
        </h2>

        <Trash
          onClick={() => {
            handleDeleteCartItem(cartitem)
          }}
          className="h-5 w-5 mr-4 cursor-pointer text-red-900  "
        />
      </div>
    </div>
  );
};


export default CartContent
