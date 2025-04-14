import ImageUpload from "@/components/Admin/ImageUpload";
import CommonFrom from "@/components/Common/CommonFrom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ProductsfromElements } from "@/config/Config";
import React, { Fragment } from "react";
import { useState } from "react";

const initialFromdata = {
  title: "",
  description: "",
  price: "",
  sellingPrice: "",
  totalStock: "",
  category: "",
  brand: "",
  image: null,
};

const ADproducts = () => {
  const [openCreateProduct, setOpenCreateProduct] = useState(false);

  const [Fromdata, setFromdata] = useState(initialFromdata);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <div className="flex w-full mb-5 justify-end ">
        <Button
          onClick={() => {
            setOpenCreateProduct(!openCreateProduct);
          }}
        >
          Add New Product
        </Button>
      </div>
      <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <Sheet
          open={openCreateProduct}
          onOpenChange={() => {
            setOpenCreateProduct(!openCreateProduct);
          }}
          className="border"
        >
          <SheetContent side="right" className="overflow-y-auto rounded-2xl">
            <SheetHeader className="">
              <SheetTitle className={"mt-4 font-bold text-xl"}>
                Add New Product
              </SheetTitle>
            </SheetHeader>
            <ImageUpload imageUrl={imageUrl} setImageUrl={setImageUrl} image={image} setImage={setImage} />
            <div className="py-6  ">
              <CommonFrom
                Formcontorl={ProductsfromElements}
                Fromdata={Fromdata}
                setFromdata={setFromdata}
                onSubmit={onSubmit}
                buttonText="Add Product"
                color=""
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
};

export default ADproducts;
