import Fliter from "@/components/Shopping/Fliter";
import { Button } from "@/components/ui/button";
import { ShrotOptions } from "../../config/Config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown } from "lucide-react";
import React from "react";

const ShopingListing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]  gap-6 p-4 md:p-6 w-full ">
      <Fliter />
      <div className=" bg-background w-full shadow-sm rounded-lg ">
        <div className=" p-4 border-b-2  flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">All Products</h2>
          <div className="flex gap-3 items-center ">
            <span className="text-muted-foreground">10 Products</span>
            <DropdownMenu>
              <DropdownMenuTrigger aschild>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className={"flex items-center gap-1"}
                >
                  <ArrowUpDown className="w-5 h-5" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup value="">
                  {ShrotOptions.map((item) => (
                    <DropdownMenuRadioItem key={item.id}>
                      {item.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6 "></div>
      </div>
    </div>
  );
};

export default ShopingListing;
