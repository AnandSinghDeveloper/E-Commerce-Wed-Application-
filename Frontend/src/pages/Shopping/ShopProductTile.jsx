import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";


const ShopProductTile = ({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) => {
  return (
    <Card className={"w-full mx-auto max-w-sm gap-0 p-0"}>
      <div className="" onClick={() => handleGetProductDetails(product._id)}>
        <div className="relative ">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[300px] object-cover rounded-lg"
          />
          {product?.totalStock <= 0 ? (
            <Badge
              className={"absolute left-2 top-2 bg-red-400 hover:bg-red-600"}
            >
              Out of Stock
            </Badge>
          ) : product.totalStock <= 5 ? (
            <Badge
              className={"absolute left-2 top-2 bg-red-400 hover:bg-red-600"}
            >
              {` only  ${product.totalStock} item left`}
            </Badge>
          ) : product.sellingPrice > 0 ? (
            <Badge
              className={"absolute left-2 top-2 bg-red-400 hover:bg-red-600"}
            >
              Selling
            </Badge>
          ) : null}
        </div>
        <CardContent className={"p-5"}>
          <h2 className=" font-bold mb-2 text-lg  ">{product.title}</h2>
          <div className="flex items-center justify-between mb-2 ">
            <span className="font-medium text-base font-[ubuntu] text-muted-foreground">
              {product.category}
            </span>
            <span className="font-medium text-base font-[ubuntu] text-muted-foreground">
              {product.brand}
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span
              className={`${
                product.sellingPrice > 0 ? "line-through" : ""
              } font-semibold text-lg flex items-center  text-primary`}
            >
              ${product.price}
            </span>
            {product.sellingPrice > 0 ? (
              <span className="font-semibold text-lg flex items-center text-primary">
                ${product.sellingPrice}
              </span>
            ) : null}
          </div>
        </CardContent>
      </div>

      {product?.totalStock <= 0 ? (
        <CardFooter className={"w-full opacity-60 cursor-not-allowed"}>
          <Button
            onClick={() => handleAddtoCart(product?._id)}
            className={"w-full  mb-5 cursor-not-allowed"}
          >
            Out of Stock
          </Button>
        </CardFooter>
      ) : (
        <CardFooter className={"w-full"}>
          <Button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className={"w-full  mb-5"}
          >
            Add to Cart
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ShopProductTile;
