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
  console.log(product);

  return (
    <Card className={"  border-[1px]   backdrop-blur-md  cart"}>
      <div>
        <div className=" w-full relative top-0 pl-5 pr-5">
          <img
            src={product.image}
            alt={product.title}
            className={" w-7xl h-70 object-cover object-center  rounded-b-lg  rounded-t-lg"}
          />
        </div>

        <CardContent>
          <h2
            className={
              "text-2xl text-zinc-900 font-[ubuntu] font-bold mb-2 mt-2"
            }
          >
            {product.title}
          </h2>
          <div className="flex items-center justify-between mb-2">
            <span
              className={`${
                product.sellingPrice > 0 ? "line-through " : ""
              }font-semibold font-[ubuntu] text-lg  `}
            >
              ${product.price}
            </span>
            <span className="font-semibold text-lg font-[ubuntu] text-primary">
              ${product.sellingPrice}
            </span>
          </div>
        </CardContent>
        <CardFooter className={"flex w-full  mt-3 justify-between  "}>
          <Button
            onClick={() => {
              setCurrentEditedID(product._id);
              setOpenCreateProduct(true);
              setFromdata(product);
            }}
            className={"mb-2  bg-gray-400 hover:bg-gray-500"}
          >
            {" "}
            Edit{" "}
          </Button>
          <Button
            onClick={() => {
              HandleDelate(product._id);
            }}
            className={" bg-slate-400 hover:bg-slate-500"}
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
