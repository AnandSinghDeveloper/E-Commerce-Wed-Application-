import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import CommonFrom from "../Common/CommonFrom";
import { AddressFromConfig } from "@/config/Config";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAddress, DeleteAddress , UpdateAddress} from "@/store/Shop/addressSlice";
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
  const [currentEditedID, setCurrentEditedID] = useState(null);

  // console.log(addressList);

  if(addressList.length >= 3 && currentEditedID === null){
    setFromdata(initialAddressFormData);
    toast.error({
      title: "You can't add more than 3 addresses",
      variant: "distractive",
    });
    return;
  }

  const handleManageAddress = (e) => {
    e.preventDefault();
    console.log(fromdata);  
    console.log(currentEditedID);
      
     currentEditedID !== null ? dispatch(UpdateAddress({ userId: user?.id, addressId: currentEditedID, formData: fromdata})).then((data) => {
      if (data?.payload?.success) {
        console.log(data);
        console.log(fromdata);
        
        setCurrentEditedID(null);
        setFromdata(initialAddressFormData);
         dispatch(FetchAddress(user?.id));
        toast.success(data?.payload?.message);
        
      }
     }) :

    dispatch(AddAddress({ ...fromdata, userId: user?.id })).then((data) => {
      if (data?.payload?.success) {
        dispatch(FetchAddress(user?.id));
        setFromdata(initialAddressFormData);
        toast.success(data?.payload?.message);
      } else {
        toast.error(data?.payload?.message);
      }
    });
  };
  const handleDelete = (getcurrentAddress) => {
    // console.log(getcurrentAddress);
    dispatch(
      DeleteAddress({ userId: user?.id, addressId: getcurrentAddress._id })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(FetchAddress(user?.id));
        setFromdata(initialAddressFormData);
        toast.success(data?.payload?.message);
      } else {
        toast.error(data?.payload?.message);
      }
    });
  };
  const handleEdit = (address) => {
    console.log(address);
    
    setCurrentEditedID(address._id);
    
    setFromdata(
      {
        ...fromdata,
        address : address?.address,
        city : address?.city,
        pincode : address?.pincode,
        phone : address?.phone,
        notes : address?.notes
      }
    );
    
  }

  useEffect(() => {
    dispatch(FetchAddress(user?.id));
  }, [dispatch]);

  return (
    <Card className="p-0 w-[100%] lg:w-[90%] shadow-none border-none">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 mb-5">
        {addressList && addressList.length > 0
          ? addressList.map((address, index) => (
              <AddressCard
                key={index}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                addressInfo={address}
              ></AddressCard>
            ))
          : null}
      </div>
      <MagicCard gradientColor={"#D9D9D955"} className="p-0">
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle className={"text-2xl font-semibold font-[ubuntu]"}>
            {currentEditedID === null ? "Add New Address" : "Edit Address"}
          </CardTitle>
        </CardHeader>
        <CardContent className=" p-4  space-y-4 font-[ubuntu]">
          <CommonFrom
            Fromdata={fromdata}
            setFromdata={setFromdata}
            Formcontorl={AddressFromConfig}
            onSubmit={handleManageAddress}
            buttonText={  currentEditedID === null ? "Add  Address" : "Edit Address"}
            color="#9E218F"
          />
        </CardContent>
      </MagicCard>
    </Card>
  );
};

export default Address;
