import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";

const ProductTile = ({
  product,
  setCurrentEditedID,
  setOpenCreateProduct,
  setFromdata,
  CurrentEditedID,
  HandleDelate,
}) => {
  return (
    <Card className={" shadow-sm  p-0  cart"}>
      <div>
        <div className=" w-full relative top-0 ">
          <img
            src={product?.image}
            alt={product?.title}
            className={
              " w-7xl h-70 object-cover object-center  rounded-b-lg  rounded-t-lg"
            }
          />
        </div>

        <CardContent>
          <h2
            className={
              "text-2xl text-zinc-900 font-[ubuntu] font-bold mb-2 mt-2"
            }
          >
            {product?.title}
          </h2>
          <div className="flex items-center justify-between mb-2">
            <span
              className={`${
                product?.sellingPrice > 0 ? "line-through " : ""
              }font-semibold font-[ubuntu] text-lg  `}
            >
              ${product?.price}
            </span>
            <span className="font-semibold text-lg font-[ubuntu] text-primary">
              ${product.sellingPrice}
            </span>
          </div>
        </CardContent>
        <CardFooter
          className={"flex w-full  mt-3 mb-3 justify-center flex-col  "}
        >
          <Button
            onClick={() => {
              setCurrentEditedID(product?._id);
              setOpenCreateProduct(true);
              setFromdata(product);
            }}
            className={
              "mb-2 w-full bg-white text-black border hover:bg-primary hover:text-white"
            }
          >
            {" "}
            Edit{" "}
          </Button>
          <Button
            onClick={() => {
              HandleDelate(product?._id);
            }}
            className={" w-full bg-muted-foreground text-white"}
          >
            {" "}
            Delete{" "}
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductTile;
