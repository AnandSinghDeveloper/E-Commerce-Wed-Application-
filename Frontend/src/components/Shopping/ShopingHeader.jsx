import { CircleUserRound, HomeIcon, LogOut, ShoppingCart } from "lucide-react";
import React, { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { SheetTrigger, Sheet, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { userMenuItems } from "@/config/Config";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logout } from "@/store/auth-slice/auth-slice";
import CartWrapper from "./CartWrapper";
import { fetchCartitems } from "@/store/Shop/shopCartSlice";
import { Label } from "../ui/label";
import { useLocation } from "react-router-dom";

const MenuItems = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleNavigate = (getcurrentItem) => {
    sessionStorage.removeItem("fliter");
    const currentfilter =
      getcurrentItem.id !== "Home" && getcurrentItem.id !== "Products" &&getcurrentItem.id !== "Search"
        ? { category: [getcurrentItem.id] }
        : null;

    sessionStorage.setItem("fliter", JSON.stringify(currentfilter));

    location.pathname.includes("/listing") && currentfilter !== null
      ? setSearchParams(new URLSearchParams(`?category=${getcurrentItem.id}`))
      : navigate(getcurrentItem.path);
  };

  return (
    <nav className="flex flex-col mb-3  lg:mb-0 lg:flex-row lg:items-center gap-6  ">
      {userMenuItems.map((item) => {
        return (
          <Label
            onClick={() => {
              handleNavigate(item);
            }}
            key={item.id}
            className=" nav-item cursor-pointer font-medium text-sm  "
          >
            {item.label}
          </Label>
        );
      })}
    </nav>
  );
};
const HeaderRightContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);

  // console.log(cartItems.items);

  const handleLogOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(fetchCartitems({ userId: user.id }));
  }, [dispatch]);

  const { user } = useSelector((state) => state.auth);
  // console.log(user);

  return (
    <div className=" flex lg:items-center lg:flex-row   gap-4 ">
      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
        <Button
          onClick={() => setOpenCartSheet(true)}
          variant={"outline"}
          size={"icon"}
          className={"relative bg-transparent"}
        >
          <ShoppingCart className="w-6 h-6 " />
          <span className=" absolute top-[-8px] right-[-8px]  flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full ">{cartItems?.items?.length || 0}</span>
          <span className="sr-only"> User Cart</span>
        </Button>
        <CartWrapper cartItems={cartItems.items} />
      </Sheet>
      <DropdownMenu>
        <DropdownMenuTrigger aschild>
          <Avatar className=" text-white bg-black">
            <AvatarFallback className="font-bold text-white bg-black  flex items-center justify-center  ">
              {user.userName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56 ">
          <DropdownMenuLabel>Logged in as {user.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/shop/account")}>
            <CircleUserRound className="w-6 h-6 mr-2  text-xl " />
            Account
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogOut}>
            <LogOut className="w-5 h-5 mr-2" />
            LogOut
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const ShopingHeader = () => {
  const { user, isauthenticated } = useSelector((state) => state.auth);
  // console.log(user, isauthenticated);

  const [menuItemOpen, setMenuItemOpen] = useState(false);
  return (
    <header className="shoping-header w-full top-0 z-50 fixed bg-transparent backdrop-blur-lg shadow-sm ">
      <div className="flex items-center justify-between   px-4 md-px-6 h-16">
        <Link className="flex items-center gap-2  " to="/shop/home">
          <HomeIcon className="w-6 h-6" />
          <span className="font-bold">E-Commerce</span>
        </Link>
        <Sheet open={menuItemOpen} onOpenChange={setMenuItemOpen}>
          <SheetTrigger aschild>
            <Button variant={"outline"} size={"icon"} className="lg:hidden">
              <Menu className="w-6 h-6" />

              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className={
              "w-60 max-w-xs px-10 py-10  rounded-br-2xl rounded-tr-xl"
            }
          >
            <MenuItems />
            <HeaderRightContent />
          </SheetContent>
        </Sheet>
        <div className=" hidden lg:block">
          <MenuItems />
        </div>
        {isauthenticated ? (
          <div className="hidden lg:block">
            <HeaderRightContent />
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default ShopingHeader;
