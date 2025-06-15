import React from "react";
import bainer1 from "../../assets/bainer9.webp";
import bainer4 from "../../assets/img8.webp";
import bainer2 from "../../assets/img9.webp";
import bainer8 from "../../assets/img1.webp";
import bainer9 from "../../assets/img7.webp";
import bainer5 from "../../assets/bainer8.webp";
import bainer3 from "../../assets/bainer-8.webp";
import bainer6 from "../../assets/img10.webp";
import bainer7 from "../../assets/bainer7.webp";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, icons } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { SiAdidas, SiWesternunion } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { SiZara } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { SiSamsung } from "react-icons/si";
import { SiXiaomi } from "react-icons/si";
import { SiOneplus } from "react-icons/si";
import { GiSonicShoes } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import { MdManageHistory } from "react-icons/md";
import { FaOm } from "react-icons/fa";
import {
  BookOpenCheck,
  Baby,
  Cable,
  ContactRound,
  Footprints,
  Shapes,
  Venus,
  Volleyball,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchedFilterProducts,
  getProductsDetails,
} from "@/store/Shop/shopProductSlice";
import ShopProductTile from "./ShopProductTile";
import { useNavigate } from "react-router-dom";
import { AddToCart, fetchCartitems } from "@/store/Shop/shopCartSlice";
import { toast } from "sonner";
import ProductDetails from "@/components/Shopping/ProductDetails";

const categoryswithImg = [
  {
    label: "Electronics",
    id: "Electronics",
    icon: <FcElectronics size={50} />,
  },
  {
    label: "Toys",
    id: "Toys",
    icon: <Shapes size={50} />,
  },
  {
    label: "Men",
    id: "Men",
    icon: <ContactRound size={50} />,
  },
  {
    label: "Women",
    id: "Women",
    icon: <Venus size={50} />,
  },
  {
    label: "Footwear",
    id: "Footwear",
    icon: <GiSonicShoes size={50} />,
  },

  {
    label: "Books",
    id: "Books",
    icon: <BookOpenCheck size={50} />,
  },
  {
    label: "Baby",
    id: "Baby",
    icon: <Baby size={50} />,
  },
  {
    label: "Accessories",
    id: "Accessories",
    icon: <Volleyball size={50} />,
  },
];

const brandwithimg = [
  {
    label: "Apple&Samsung",
    id: "Apple&Samsung",
    icon: <FaApple size={70} />,
    icon2: <SiSamsung size={70} />,
  },

  {
    label: "Xiaomi&OnePLus+",
    id: "Xiaomi&OnePLus+",
    icon: <SiXiaomi />,
    icon2: <SiOneplus />,
  },
  {
    label: "Nike&Adidas",
    id: "Nike&Adidas",
    icon: <SiAdidas />,
    icon2: <SiNike />,
  },

  {
    label: "Philosophy&History",
    id: "Philosophy&History",
    icon: <MdManageHistory />,
    icon2: <FaOm />,
  },
  {
    label: "HnM&Zara",
    id: "HnM&Zara",
    icon: <SiZara />,
  },
];

const ShopingHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productsList, productDetails } = useSelector(
    (state) => state.shopProduct
  );
  const [openDetails, setOpenDetails] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleNavigate = (getcurrentItem, selection) => {
    sessionStorage.removeItem("fliter");
    const currentfilter = {
      [selection]: [getcurrentItem.id],
    };

    sessionStorage.setItem("fliter", JSON.stringify(currentfilter));
    navigate("/shop/listing");
  };

  const handleGetProductDetails = (id) => {
    dispatch(getProductsDetails(id));
  };
  const handleAddtoCart = (getcurrentID) => {
    //  console.log(getcurrentID);

    dispatch(
      AddToCart({ userId: user.id, productId: getcurrentID, quantity: 1 })
    ).then((data) => {
      if (data.payload.success) {
        toast.success(data.payload.message);
        dispatch(fetchCartitems({ userId: user.id }));
      }
    });
  };

  const slides = [
    bainer1,
    bainer2,
    bainer4,
    bainer3,
    bainer5,
    bainer6,
    bainer7,
    bainer8,
    bainer9,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    dispatch(
      fetchedFilterProducts({
        filterParmas: {},
        sortParams: "Price : Low to High",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    if (productDetails !== null) {
      // console.log(productDetails);

      setOpenDetails(true);
    }
  }, [productDetails]);

  const newProductslist = productsList.slice(0, 4);

  // console.log(newProductslist);

  return (
    <div className="flex flex-col min-h-screen mt-12">
      <div className="relative w-full h-[600px] ">
        {slides.map((slide, index) => {
          return (
            <img
              src={slide}
              key={index}
              className={` ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              } absolute top-0 left-0 w-full h-full z-10 object-cover object-top  transition-opacity duration-1000`}
            />
          );
        })}
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute top-1/2 left-4 ml-6 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/65"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
          }
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute top-1/2 right-4 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/65"
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
            )
          }
        >
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>
      <selection className="py-12 bg-gray-50  text-zinc-800 font-[ubuntu]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Shop by Cetorery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {categoryswithImg.map((category, index) => {
              return (
                <Card
                  onClick={() => handleNavigate(category, "category")}
                  key={index}
                  className={
                    " cursor-pointer hover:shadow-lg transition-shadow "
                  }
                >
                  <CardContent
                    className={"flex p-6 items-center justify-center flex-col"}
                  >
                    <span className="mb-4   ">{category.icon}</span>
                    <span className="text-lg text-[#615061] font-[ubuntu] font-semibold">
                      {category.label}
                    </span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </selection>
      <selection className="py-12 bg-gray-50  text-zinc-800 font-[ubuntu]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
            {brandwithimg.map((brand, index) => {
              return (
                <Card
                  onClick={() => handleNavigate(brand, "brand")}
                  key={index}
                  className={
                    " cursor-pointer hover:shadow-lg transition-shadow "
                  }
                >
                  <CardContent
                    className={"flex p-6 items-center justify-center flex-col"}
                  >
                    <div className="mb-4 text-5xl flex gap-3">
                      {brand.icon} {brand.icon2}
                    </div>
                    <span className="text-lg text-[#615061] font-[ubuntu] font-semibold">
                      {brand.label}
                    </span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </selection>
      <selection className="py-12 bg-gray-50  text-zinc-800 font-[ubuntu]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Feture Product
          </h2>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          {newProductslist && newProductslist.length > 0
            ? newProductslist.map((product, index) => {
                return (
                  <ShopProductTile
                    handleAddtoCart={handleAddtoCart}
                    handleGetProductDetails={handleGetProductDetails}
                    product={product}
                    key={index}
                  />
                );
              })
            : null}
        </div>
      </selection>
      <ProductDetails
        open={openDetails}
        setOpen={setOpenDetails}
        productDetails={productDetails}
      />
    </div>
  );
};

export default ShopingHome;
