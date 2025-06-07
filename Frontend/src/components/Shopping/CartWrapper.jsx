import React from "react";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Button } from "../ui/button";
import CartContent from "./CartContent";
import { useNavigate } from "react-router-dom";

const CartWrapper = ({ cartItems }) => {
  const totalAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, current) =>
            sum +
            (current.sellingPrice > 0 ? current.sellingPrice : current.price) *
              current.quantity,
          0
        )
      : 0;

  const navigate = useNavigate();

  // console.log(cartItems);

  return (
    <SheetContent className={"sm:max-w-sm rounded-tl-xl rounded-bl-xl p-5"}>
      <SheetHeader>
        <SheetTitle
          className={
            "text-2xl font-bold  px-2 text-zinc-700 font-[ubuntu] rounded-md w-80 bg-muted"
          }
        >
          Your Cart
        </SheetTitle>
      </SheetHeader>
      <div className="mt-2 max-h-[70vh] overflow-y-auto space-y-4">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => <CartContent key={index} cartitem={item} />)
        ) : (
          <h1>Cart is empty</h1>
        )}
      </div>
      <div className="mt-5 space-y-4">
        <div className="flex justify-between">
          <span className=" font-bold text-base">Total Amount</span>
          <span className=" font-bold text-base">${totalAmount}</span>
        </div>
      </div>
      <Button
        onClick={() => {
          navigate('/shop/checkout');
        }}
        className="w-full mt-5"
      >
        Checkout 
      </Button>
    </SheetContent>
  );
};

export default CartWrapper;
