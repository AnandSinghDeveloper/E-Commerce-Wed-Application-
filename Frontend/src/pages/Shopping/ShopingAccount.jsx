import React from "react";
import account from "../../assets/account3.webp";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@/components/ui/tabs";
import Order from "@/components/Shopping/Order";
import Address from "@/components/Shopping/Address";

const ShopingAccount = () => {
  return (
    <div className=" mt-12 flex flex-col">
      <div className=" relative h-[400px] w-full overflow-hidden ">
        <img
          src={account}
          alt="bainer img"
          className=" w-full h-full object-cover  object"
        />
      </div>
      <div className=" container mx-auto grid grid-cols-1 gap-8 py-8">
        <div className="flex flex-col p-6 rounded-lg border bg-background shadow-sm">
          <Tabs defaultValue="orders">
            <TabsList>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="address">Address</TabsTrigger>
            </TabsList>
            <TabsContent value="orders" >
              <Order />
            </TabsContent>
            <TabsContent value="address" className={ ''}>
             <Address />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ShopingAccount;
