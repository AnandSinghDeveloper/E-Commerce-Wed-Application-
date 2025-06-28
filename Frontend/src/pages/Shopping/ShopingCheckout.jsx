import React from "react";
import Checkout from "../../assets/Checkout.jpg";
import Address from "@/components/Shopping/Address";
import { useSelector } from "react-redux";
import CartContent from "@/components/Shopping/CartContent";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewOrder } from "@/store/Shop/OderSlice";
import Loader from "../loading/Loader";
import { toast } from "sonner";


const ShopingCheckout = () => {
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const {approvalUrl , isloading} = useSelector((state)=>state.order);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [ispaymentstarted, setIsPaymentStarted] = useState(false);

  const dispatch = useDispatch();

  // console.log(approvalUrl);

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

  const inisatePaypalPayment = () => {

    if(cartItems?.items?.length === 0){
  toast.warning(" Your Cart is empty please add some items to checkout");
  return;
}

if(!currentAddress){
  toast.warning("Please select one address to checkout");
  return;
}

    const orderdata = {
      userId: user?.id,
       cartId:cartItems?._id,
      cartitems: cartItems.items.map((item) => ({
        productId: item?.productId,
        title: item?.title,
        image: item?.image,
        price: item?.sellingPrice > 0 ? item?.sellingPrice : item?.price,
        quantity: item?.quantity,
      })),
      paymentMethod: "paypal",
      paymentStatus: "pending",
      paymentId: "",
      payerID: "",
      orderStatus: "pending",
      orderDate: new Date().toISOString(),
      oderUpdatedDate: new Date().toISOString(),
      AddressInfo: {
        addressId: currentAddress?._id,
        address: currentAddress?.address,
        city: currentAddress?.city,
        pincode: currentAddress?.pincode,
        phone: currentAddress?.phone,
        notes: currentAddress?.notes,
      },
      totalAmount: totalAmount,
    };

    console.log(orderdata);
    if(isloading){
       
    }else{
      dispatch(createNewOrder(orderdata)).then((data) => {
      console.log(data);
      if (data?.payload?.success) {
        setIsPaymentStarted(true);
      }else{
        setIsPaymentStarted(false)
      }
    });
    }
  };

  if(approvalUrl){
    window.location.href = approvalUrl;
  }

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
        <Address selectedId={currentAddress?._id} setCurrentAddress={setCurrentAddress} />

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

          <Button
            onClick={() => inisatePaypalPayment()}
            className={"mt-5 bg-blue-900  hover:bg-blue-900"}
          >
           {
            ispaymentstarted ? <Loader /> : "Checkout"
           }
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopingCheckout;
