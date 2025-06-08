import React from "react";
import Checkout from "../../assets/Checkout.jpg";
import Address from "@/components/Shopping/Address";
import { useSelector } from "react-redux";
import CartContent from "@/components/Shopping/CartContent";
import { Button } from "@/components/ui/button";

const ShopingCheckout = () => {
  const { cartItems } = useSelector((state) => state.shopCart);

  console.log(cartItems.i);

  const totalAmount =
    cartItems.items && cartItems.items.length > 0
      ? cartItems.items.reduce(
          (sum, current) =>
            sum +
            (current.sellingPrice > 0 ? current.sellingPrice : current.price) *
              current.quantity,
          0
        )
      : 0;

  return (
    <div className="mt-10 ">
      <div className="w-full h-[500px] ">
        <img
          src={Checkout}
          alt="checkout"
          className="w-full h-full object-cover object-left object"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 shadow-sm   gap-4 p-3 mb-5 ">
        <Address />

        <div className=" flex flex-col gap-4 mt-5 shadow-sm rounded-lg p-5">
          {cartItems && cartItems.items && cartItems.items.length > 0
            ? cartItems.items.map((item, idx) => {
                return <CartContent key={idx} cartitem={item} />;
              })
            : null}

          <div className="flex justify-between mt-5">
            <span className=" font-bold text-base">Total Amount</span>
            <span className=" font-bold text-base">${totalAmount}</span>
          </div>

          <Button className={"mt-5 bg-blue-900  hover:bg-blue-900"}>Checkout with PayPal</Button>
        </div>
      </div>
    </div>
  );
};

export default ShopingCheckout;
