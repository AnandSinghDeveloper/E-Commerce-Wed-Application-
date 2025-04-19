import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";

const ShopProductTile = ({ product }) => {
  return (
    <Card className={"w-full mx-auto max-w-sm  p-0"}>
      <div>
        <div className="relative ">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[300px] object-cover rounded-lg"
          />
          {product.sellingPrice > 0 ? (
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
              } font-semibold text-lg  text-primary`}
            >
              ${product.price}
            </span>
            {product.sellingPrice > 0 ? (
              <span className="font-semibold text-lg  text-primary">
                ${product.sellingPrice}
              </span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className={"w-full"}>
         <Button className={"w-full mb-5"}>Add to Cart</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ShopProductTile;
