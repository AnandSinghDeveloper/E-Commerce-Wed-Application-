// import {  Route } from 'lucide-react'
import Layout from "./components/Authentication/Layout";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ADlayout from "./components/Admin/ADlayout";
import ADfeature from "./pages/Admin/ADfeature";
import ADorder from "./pages/Admin/ADorder";
import ADdashbord from "./pages/Admin/ADdashbord";
import ADproducts from "./pages/Admin/ADproducts";
import Shoplayout from "./components/Shopping/Shoplayout";
import Index from "./pages/Not-found/Index";
import ShopingHome from "./pages/Shopping/ShopingHome";
import ShopingListing from "./pages/Shopping/ShopingListing";
import ShopingCheckout from "./pages/Shopping/ShopingCheckout";
import ShopingAccount from "./pages/Shopping/ShopingAccount";
import AuthCheck from "./components/Common/AuthCheck";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Authcheck } from "./store/auth-slice/auth-slice";
import { Skeleton } from "./components/ui/skeleton";
import PaypalReturn from "./pages/Shopping/PaypalReturn";
import Paymentsucess from "./pages/Shopping/Paymentsucess";

function App() {
  const { user, isauthenticated ,isloading } = useSelector((state) => state.auth);

  // console.log(user, isauthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Authcheck());
  }, [dispatch]);

  if (isloading){
    return <Skeleton className="w-[100px] h-[20px] rounded-full" />
  
  }

  return (
    <div className=" overflow-hidden flex flex-col">
      <Routes>
        <Route
          path="/auth"
          element={
            <AuthCheck isAuthenticated={isauthenticated} user={user}>
              <Layout />
            </AuthCheck>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/admin"
          element={
            <AuthCheck isAuthenticated={isauthenticated} user={user}>
              <ADlayout />
            </AuthCheck>
          }
        >
          <Route path="order" element={<ADorder />} />
          <Route path="dashboard" element={<ADdashbord />} />
          <Route path="products" element={<ADproducts />} />
          <Route path="feature" element={<ADfeature />} />
        </Route>
        <Route
          path="/Shop"
          element={
            <AuthCheck isAuthenticated={isauthenticated} user={user}>
              <Shoplayout />
            </AuthCheck>
          }
        >
          <Route path="home" element={<ShopingHome />} />
          <Route path="listing" element={<ShopingListing />} />
          <Route path="account" element={<ShopingAccount />} />
          <Route path="checkout" element={<ShopingCheckout />} />
          <Route path="Paypal-return" element={<PaypalReturn />} />
          <Route path="paymentsuccess" element={<Paymentsucess />} />
        </Route>
        <Route path="*" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
