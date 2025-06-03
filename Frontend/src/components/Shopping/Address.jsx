import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import CommonFrom from "../Common/CommonFrom";
import { AddressFromConfig } from "@/config/Config";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAddress } from "@/store/Shop/addressSlice";
import { useEffect } from "react";
import { FetchAddress } from "@/store/Shop/addressSlice";
import { toast } from "sonner";
import AddressCard from "./AddressCard";

const initialAddressFormData = {
  address: "",
  city: "",
  pincode: "",
  phone: "",
  notes: "",
};

const Address = () => {
  const [fromdata, setFromdata] = useState(initialAddressFormData);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { addressList } = useSelector((state) => state.address);

  console.log(addressList);

  const handleManageAddress = (e) => {
    e.preventDefault();

    dispatch(AddAddress({ ...fromdata, userId: user?.id })).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
      } else {
        toast.error(data?.payload?.message);
      }
    });
  };

  useEffect(() => {
    dispatch(FetchAddress(user?.id));
  }, [dispatch]);

  return (
    <Card className="p-0 w-[100%] lg:w-[90%] shadow-none border-none">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 mb-5">
        {addressList && addressList.length > 0
          ? addressList.map((address, index) => (
              <AddressCard key={index} addressInfo={address}></AddressCard>
            ))
          : null}
      </div>
      <MagicCard gradientColor={"#D9D9D955"} className="p-0">
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle className={"text-2xl font-semibold font-[ubuntu]"}>
            Add Address
          </CardTitle>
        </CardHeader>
        <CardContent className=" p-4  space-y-4 font-[ubuntu]">
          <CommonFrom
            Fromdata={fromdata}
            setFromdata={setFromdata}
            Formcontorl={AddressFromConfig}
            onSubmit={handleManageAddress}
            buttonText={"Add Address"}
            color="#9E218F"
          />
        </CardContent>
      </MagicCard>
    </Card>
  );
};

export default Address;
