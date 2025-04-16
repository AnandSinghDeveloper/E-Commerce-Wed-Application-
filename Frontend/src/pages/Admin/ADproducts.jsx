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
import { updatedProduct } from "@/store/Admin/ProductSlice/ProductSlice";
import ProductTile from "./ProductTile";
import { deletedProduct } from "@/store/Admin/ProductSlice/ProductSlice";

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
  const [CurrentEditedID, setCurrentEditedID] = useState(null);

  const dispatch = useDispatch();



   const HandleDelate = (DeleteproductID)=>{

     dispatch(deletedProduct(DeleteproductID)).then((data) => {
          if (data?.payload?.success) {
            setFromdata(initialFromdata);
            dispatch(fetchedProducts());
            toast.success(data?.payload?.message);
          }
     })
     
   }
  const onSubmit = (e) => {
    e.preventDefault();
    CurrentEditedID !== null
      ? dispatch(updatedProduct({ id: CurrentEditedID, Fromdata })).then(
          (data) => {
            if (data?.payload?.success) {
              setFromdata(initialFromdata);
              setOpenCreateProduct(false);
              dispatch(fetchedProducts());
              setCurrentEditedID(null);
              toast.success(data?.payload?.message);
            }
          }
        )
      : dispatch(
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
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-7   card ">
        {productsList &&
          productsList.length > 0 &&
          productsList.map((product, index) => {
            return (
              <ProductTile
                setCurrentEditedID={setCurrentEditedID}
                CurrentEditedID={CurrentEditedID}
                setOpenCreateProduct={setOpenCreateProduct}
                setFromdata={setFromdata}
                key={index}
                product={product}
                HandleDelate={HandleDelate}
              />
            );
          })}
      </div>
      <Sheet
        open={openCreateProduct}
        onOpenChange={() => {
          setOpenCreateProduct(!openCreateProduct);
          setFromdata(initialFromdata);
          setCurrentEditedID(null);
        }}
        className="border"
      >
        <SheetContent
          side="right"
          className="overflow-y-auto rounded-bl-2xl rounded-tl-xl"
        >
          <SheetHeader className="">
            <SheetTitle className={"mt-4 font-bold text-xl"}>
              {CurrentEditedID === null ? "Add New Product" : "Edit Product"}
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
              buttonText={CurrentEditedID === null ? "Add Product" : "Update"}
              color=""
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export default ADproducts;
