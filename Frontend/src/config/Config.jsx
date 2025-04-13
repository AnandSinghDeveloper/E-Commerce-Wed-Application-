import { LayoutDashboard  } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import { BadgeCheck } from "lucide-react";

export const registerfromconfig = [
  {
    label: "User Name",
    placeholder: "Enter your name",
    type: "text",
    componentType: "input",
    name: "userName",
  },
  {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    componentType: "input",
    name: "email",
  },
  {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
    name: "password",
  },
];

export const loginfromconfig = [
  {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    componentType: "input",
    name: "email",
  },
  {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
    name: "password",
  },
];

export const adminMenuItems = [
  {
    id:"Dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,

  },
  {
    id:"Products",
    label: "Products",
    path: "/admin/products",
    icon:<ShoppingBasket />

  },
  {
    id:"Order",
    label: "Order",
    path: "/admin/order",
    icon: <BadgeCheck />

  }
]
