import React, { useEffect , useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSearchResult, reSetSearchList } from "@/store/Shop/searchSlice";
import ShopProductTile from "./ShopProductTile";
import { motion } from "framer-motion";
import { AddToCart, fetchCartitems } from "@/store/Shop/shopCartSlice";
import { toast } from "sonner";
import { getProductsDetails } from "@/store/Shop/shopProductSlice";
import ProductDetails from "@/components/Shopping/ProductDetails";
const Search = () => {
  const [keyword, setKeyword] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDetails, setOpenDetails] = useState(false);
  const { searchList } = useSelector((state) => state.search);
  const { productDetails } = useSelector((state) => state.shopProduct);
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (keyword && keyword.trim() !== "" && keyword.trim().length >= 3) {
      setTimeout(() => {
        setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
        dispatch(getSearchResult(keyword));
      }, 1000);
    } else {
      dispatch(reSetSearchList());
    }
  }, [keyword]);
  useEffect(() => {
    if (productDetails !== null) {
      setOpenDetails(true);
    }
  }, [productDetails]);

  const handleGetProductDetails = (id) => {
    dispatch(getProductsDetails(id));
  };

  const handleAddtoCart = (getcurrentID, getcurrentStock) => {
    let getCartItem = cartItems.items || [];
    const findCurrentProduct = getCartItem.find(
      (item) => item.productId === getcurrentID
    );
    if (findCurrentProduct) {
      const currentQuantity = findCurrentProduct.quantity;
      if (currentQuantity + 1 > getcurrentStock) {
        toast.info(`You can't add more than ${getcurrentStock} items`);
        return;
      }
    }

    dispatch(
      AddToCart({ userId: user.id, productId: getcurrentID, quantity: 1 })
    ).then((data) => {
      if (data.payload.success) {
        toast.success(data.payload.message);
        dispatch(fetchCartitems({ userId: user.id }));
      }
    });
  };

  return (
    <div className=" container mx-auto mt-20 py-8 md:py-6 px-4">
      <div className="flex justify-center  mb-8">
        <div
          className={`transition-all duration-300 ease-in-out flex items-center rounded-md px-2 shadow-md bg-gradient-to-b from-purple-200 to-pink-100 ${
            isFocused ? "w-full" : "w-full"
          } h-[50px]`}
        >
          <input
            id="input"
            name="keyword"
            type={"text"}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder="Search for products..."
            className={
              "w-full h-[40px] rounded-md px-4 text-sm text-gray-800 placeholder-gray-500 outline-none bg-white caret-orange-500 transition-all duration-300"
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[100px]">
        {searchList && searchList.length > 0 ? (
          searchList.map((item, index) => (
            <ShopProductTile
              key={index}
              handleGetProductDetails={handleGetProductDetails}
              handleAddtoCart={handleAddtoCart}
              product={item}
            />
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center py-16">
            <motion.div
              className="flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-7xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                🔍
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-800">
                No Results Found
              </h2>
              <p className="text-gray-500 mt-2 text-base max-w-md">
                Sorry, we couldn't find anything that matches your search.{" "}
                <br />
                Please try using different or more general keywords.
              </p>
            </motion.div>
          </div>
        )}
      </div>

      <ProductDetails
        open={openDetails}
        setOpen={setOpenDetails}
        productDetails={productDetails}
      />
    </div>
  );
};

export default Search;
