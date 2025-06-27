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
import { addReview, getReviews } from "@/store/Shop/reviewSlice";
import { useEffect } from "react";

const ProductDetails = ({ open, setOpen, productDetails }) => {

  
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.shopCart);  
  const { reviewList } = useSelector((state) => state.reviews); 
  const [reviewMessage, setReviewMessage] = useState("");
  const [rating, setRating] = useState(0);
  const { user } = useSelector((state) => state.auth);


  const handleRatingchange = (getrating) => {
    setRating(getrating);
  };

  const handleReviewSubmit = () => {
    dispatch(
      addReview({
        productId: productDetails._id,
        userId: user?.id,
        UserName: user?.userName,
        reviewMessage: reviewMessage,
        reviewRating: rating,
      })
    ).then((data) => {
        if (data.payload.success) {
          setReviewMessage("");
          setRating(0);
          toast.success(data.payload.message);
          dispatch(getReviews(productDetails._id));
        }else if(data.payload.error){
          toast.error(data.payload.message);
        }
        
      })
  };

  useEffect(() => {
    if (productDetails !== null) {
       dispatch(getReviews(productDetails._id));
    }
  }, [productDetails]);

 
  const handleAddtoCart = (getcurrentID, getcurrentStock) => {
    console.log(getcurrentID);
    let getCartItem = cartItems.items || [];
    const findCurrentProduct = getCartItem.find(
      (item) => item.productId === getcurrentID
    );
    if (findCurrentProduct) {
      const currentQuantity = findCurrentProduct.quantity;
      if (currentQuantity + 1 > getcurrentStock) {
        toast.info(`You can't add more than ${getcurrentStock} items`);
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

  const handledialogClose = () => {
    setOpen();
    dispatch(fetchCartitems({ userId: user.id }));
    setReviewMessage("");
    setRating(0);
  };

    const averageRating = 
     reviewList&& reviewList.length > 0 ?
      reviewList.reduce((sum, reviewItem) => sum + reviewItem.reviewRating, 0) /
      reviewList.length : 0;


  return (
    <Dialog open={open} onOpenChange={handledialogClose}>
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
         <StarRating rating={averageRating} />
            <span className="text-sm text-muted-foreground">
              ({averageRating.toFixed(1)} out of 5 stars)
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
            <div className="h-35 mt-5 overflow-y-auto">
              <div className="grid gap-2 ">
                {
                  reviewList && reviewList.length > 0 ? reviewList.map((item) => (
                    <div className=" flex gap-4">
                  <Avatar className={"w-10 h-10 border"}>
                    <AvatarFallback className=" font-bold  ">{item.UserName[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-2 ">
                    <div className="flex items-center gap-2">
                      <h3 className="text-md font-semibold">{item.UserName}</h3>
                    </div>
                    <div className="flex items-center ">
                      <StarRating rating={item.reviewRating} />
                    </div>
                    <p className=" text-sm text-muted-foreground ">
                      {item.reviewMessage}
                    </p>
                  </div>
                </div>
                  ))
                    
                   : ( <p className="text-sm text-muted-foreground">
                      No Reviews Found
                    </p>)
                   
                  
                }
                
              </div>
            </div>
            {/* <form> */}
            <div className="flex flex-col mt-10   gap-.5">
              <Label className="text-md font-semibold mb-1">Leave a review </Label>
              <div className="flex">
                <StarRating
                  rating={rating}
                  handleRatingchange={handleRatingchange}
                />
              </div>
              <Input 
              className={"mt-1 mb-2"}
                name={"review"}
                value={reviewMessage}
                onChange={(e) => setReviewMessage(e.target.value)}
                placeholder="Enter your review"
              />
              <Button
                onClick={handleReviewSubmit}
                disabled={reviewMessage.trim() === ""}
                className={""}
              >
                Submit
              </Button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
