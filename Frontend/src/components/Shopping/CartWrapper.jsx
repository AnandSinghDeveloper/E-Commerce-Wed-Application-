import React from "react";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Button } from "../ui/button";
import CartContent from "./CartContent";

const CartWrapper = ({cartItems}) => {
  return (
    <SheetContent className={"sm:max-w-sm rounded-tl-xl rounded-bl-xl p-7"}>
      
      <SheetHeader>
      <SheetTitle
        className={"text-2xl font-bold  px-2 text-zinc-700 font-[ubuntu] rounded-md w-80 bg-muted"}
      >
        Your Cart
      </SheetTitle>

      </SheetHeader>
      <div className="mt-8 space-y-4">
        {
         cartItems&& cartItems.length > 0 ? 
         cartItems.map((item) => <CartContent/>) : <h1>Cart is empty</h1>
        }
      </div>
      <div className="mt-5 space-y-4">
        <div className="flex justify-between">
          <span className=" font-bold text-base">Subtotal</span>
          <span className=" font-bold text-base">$10</span>
        </div>
      </div>
      <Button className="w-full mt-5">Checkout</Button>
    </SheetContent>
  );
};

export default CartWrapper;
