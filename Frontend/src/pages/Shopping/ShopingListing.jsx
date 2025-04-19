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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchedFilterProducts } from "../../store/Shop/shopProductSlice";
import ShopProductTile from "./ShopProductTile";
import { useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";

const ShopingListing = () => {
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => state.shopProduct);
  const [fliter, setFliter] = useState({});
  const [sort, setSort] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = (value) => {
    console.log(value);
    setSort(value);
  };

  const handleFliter = (getsectionID, getcurrentOption) => {
    let copyfliter = { ...fliter };
    const indexofcurrentSection = Object.keys(copyfliter).indexOf(getsectionID);
    if (indexofcurrentSection === -1) {
      copyfliter = {
        ...copyfliter,
        [getsectionID]: [getcurrentOption],
      };
    } else {
      const currentOptionIndex =
        copyfliter[getsectionID].indexOf(getcurrentOption);
      if (currentOptionIndex === -1) {
        copyfliter[getsectionID].push(getcurrentOption);
      } else {
        copyfliter[getsectionID].splice(currentOptionIndex, 1);
      }
    }

    setFliter(copyfliter);
    sessionStorage.setItem("fliter", JSON.stringify(copyfliter));
  };

  const createSearchParamsHelper = (filterparams) => {
    const queryParams = [];

    for (const [key, value] of Object.entries(filterparams)) {
      if (Array.isArray(value) && value.length > 0) {
        const paramValue = value.join(",");

        queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
      }
    }

    return queryParams.join("&");
  };

  useEffect(() => {
    if (fliter && Object.keys(fliter).length > 0) {
      const createQueryString = createSearchParamsHelper(fliter);
      setSearchParams(new URLSearchParams(createQueryString));
    }
  }, [fliter]);

  useEffect(() => {
    setSort("Price : Low to High");
    setFliter(JSON.parse(sessionStorage.getItem("fliter")));
  }, []);

  useEffect(() => {
    if( fliter !== null && sort !== null)

    

    dispatch(fetchedFilterProducts({filterParmas: fliter , sortParams : sort}));
  }, [dispatch , sort, fliter]);

  console.log(fliter, searchParams);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]  gap-6 p-4 md:p-6 w-full ">
      <Fliter fliter={fliter} handleFliter={handleFliter} />
      <div className=" bg-background w-full shadow-sm rounded-lg ">
        <div className=" p-4 border-b-2  flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">All Products</h2>
          <div className="flex gap-3 items-center ">
            <span className="text-muted-foreground">
              {productsList.length} Products
            </span>
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
              <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                  {ShrotOptions.map((item) => (
                    <DropdownMenuRadioItem value={item.id} key={item.id}>
                      {item.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6 ">
          {productsList && productsList.length > 0
            ? productsList.map((item) => (
                <ShopProductTile key={item.id} product={item} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ShopingListing;
