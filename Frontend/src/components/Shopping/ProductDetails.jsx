import React from "react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { StarIcon } from "lucide-react";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, fetchCartitems } from "@/store/Shop/shopCartSlice";
import { Label } from "@radix-ui/react-label";
import StarRating from "../Common/StarRating";

const ProductDetails = ({ open, setOpen, productDetails }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.shopCart);
  const [reviewMessage, setReviewMessage] = useState("");
  const [rating, setRating] = useState(0);
  const { user } = useSelector((state) => state.auth);

  const handleRatingchange = (getrating) => {
    setRating(getrating);
  };

  const handleReviewSubmit = () => {
    
  }
  const handleAddtoCart = (getcurrentID, getcurrentStock) => {
    console.log(getcurrentID);
    let getCartItem = cartItems.items || [];
    const findCurrentProduct = getCartItem.find(
      (item) => item.productId === getcurrentID
    );
    if (findCurrentProduct) {
      const currentQuantity = findCurrentProduct.quantity;
      if (currentQuantity + 1 > getcurrentStock) {
        toast.error(`You can't add more than ${getcurrentStock} items`);
        return;
      }
    }

    dispatch(
      AddToCart({ userId: user?.id, productId: getcurrentID, quantity: 1 })
    ).then((data) => {
      console.log(data);

      if (data.payload.success) {
        toast.success(data.payload.message);
        dispatch(fetchCartitems({ userId: user.id }));
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className={
          "grid grid-cols-2 mx-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]  gap-8 sm:p-12 "
        }
      >
        <div className="relative overflow-hidden  ">
          <img
            src={productDetails?.image}
            alt={productDetails?.title}
            width={600}
            height={600}
            className=" object-cover aspect-square rounded-2xl w-full "
          />
        </div>

        <div className=" ">
          <div>
            <DialogTitle className={"text-3xl font-bold tracking-tight"}>
              {productDetails?.title}
            </DialogTitle>
            <p className="text-base text-muted-foreground mt-4">
              {productDetails?.description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-5 mb-2">
            <h1
              className={`${
                productDetails?.sellingPrice
                  ? "line-through text-gray-500"
                  : " "
              } text-2xl font-bold `}
            >
              {productDetails?.price}
            </h1>

            {productDetails?.sellingPrice > 0 ? (
              <h2 className="text-2xl font-bold  text-primary">
                {productDetails?.sellingPrice}
              </h2>
            ) : null}
          </div>
          <div className="flex items-center gap-1 mb-4">
            <StarIcon className="w-4 fill-amber-400 h-4 text-yellow-400" />
            <StarIcon className="w-4 fill-amber-400 h-4 text-yellow-400" />
            <StarIcon className="w-4 fill-amber-400 h-4 text-yellow-400" />
            <StarIcon className="w-4 fill-amber-400 h-4 text-yellow-400" />
            <StarIcon className="w-4 fill-amber-400 h-4 text-yellow-400" />
            <span className="text-sm text-muted-foreground">
              (4.5 out of 5 stars)
            </span>
          </div>
          <div>
            {productDetails?.totalStock <= 0 ? (
              <Button
                className={"w-full mb-3 cursor-not-allowed opacity-60"}
                disabled
              >
                Out of Stock
              </Button>
            ) : (
              <Button
                onClick={() =>
                  handleAddtoCart(
                    productDetails?._id,
                    productDetails?.totalStock
                  )
                }
                className={"w-full mb-3"}
              >
                Add to Cart
              </Button>
            )}

            <Separator />
            <h2 className="text-xl font-bold mb-3 mt-3 bg-transparent backdrop-blur-md">
              Reviews
            </h2>
            <div className="h-30 mt-5 overflow-y-auto">
              <div className="grid gap-6 ">
                <div className=" flex gap-4">
                  <Avatar className={"w-10 h-10 border"}>
                    <AvatarFallback className=" font-bold  ">GT</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-2 ">
                    <div className="flex items-center gap-2">
                      <h3 className="text-md font-semibold"> Gautam Thakur</h3>
                    </div>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 fill-amber-400 h-4 text-yellow-400" />
                      <StarIcon className="w-4 fill-amber-400 h-4 text-yellow-400" />
                      <StarIcon className="w-4 fill-amber-400 h-4 text-yellow-400" />
                      <StarIcon className="w-4 fill-amber-400 h-4 text-yellow-400" />
                      <StarIcon className="w-4 fill-amber-400 h-4 text-yellow-400" />
                    </div>
                    <p className=" text-sm text-muted-foreground ">
                      This is a good product , i like it
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10  gap-2">
              <Label>Leave a review</Label>
              <div className="flex">
                <StarRating
                  rating={rating}
                  handleRatingchange={handleRatingchange}
                />
              </div>
              <Input
                name={"review"}
                value={reviewMessage}
                onOpenChange={(e) => setReviewMessage(e.target.value)}
                placeholder="Enter your review"
              />
              <Button onClick={handleReviewSubmit} disabled={reviewMessage.trim() === ""} className={""}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
