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
import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchedProducts } from "@/store/Admin/ProductSlice/ProductSlice";
import { useSelector } from "react-redux";
import { addproduct } from "@/store/Admin/ProductSlice/ProductSlice";
import { toast } from "sonner";
import ProductTile from "./ProductTile";

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
  const [loading, setLoading] = useState(false);
  const { productsList } = useSelector((state) => state.adminProduct);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addproduct({
        ...Fromdata,
        image: imageUrl,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        
        setFromdata(initialFromdata);
        setOpenCreateProduct(false);
        dispatch(fetchedProducts());

        toast.success(data?.payload?.message);
      }
    });
  };

  useEffect(() => {
    dispatch(fetchedProducts());
  }, [dispatch]);

  console.log(productsList);

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
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-7  card ">
      
        {productsList &&
          productsList.length > 0 &&
          productsList.map((product, index) => {
            return <ProductTile key={index} product={product} />;
          })}
      </div>
      <Sheet
        open={openCreateProduct}
        onOpenChange={() => {
          setOpenCreateProduct(!openCreateProduct);
        }}
        className="border"
      >
        <SheetContent
          side="right"
          className="overflow-y-auto rounded-bl-2xl rounded-tl-xl"
        >
          <SheetHeader className="">
            <SheetTitle className={"mt-4 font-bold text-xl"}>
              Add New Product
            </SheetTitle>
          </SheetHeader>
          <ImageUpload
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            image={image}
            setImage={setImage}
            setLoading={setLoading}
            loading={loading}
          />
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
    </Fragment>
  );
};

export default ADproducts;
