import { LayoutDashboard } from "lucide-react";
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
    id: "Dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "Products",
    label: "Products",
    path: "/admin/products",
    icon: <ShoppingBasket />,
  },
  {
    id: "Order",
    label: "Order",
    path: "/admin/order",
    icon: <BadgeCheck />,
  },
];

export const ProductsfromElements = [
  {
    label: "Title",
    placeholder: "Enter your title",
    type: "text",
    componentType: "input",
    name: "title",
  },
  {
    label: "Description",
    placeholder: "Enter product description",
    componentType: "textarea",
    name: "description",
  },
  {
    label: "Price",
    placeholder: "Enter product price",
    type: "number",
    componentType: "input",
    name: "price",
  },
  {
    label: "Selling Price",
    placeholder: "Enter product selling price",
    type: "number",
    componentType: "input",
    name: "sellingPrice",
  },
  {
    label: "Total Stock",
    placeholder: "Enter product total stock",
    type: "number",
    componentType: "input",
    name: "totalStock",
  },
  {
    label: "Category",
    componentType: "select",
    name: "category",
    options: [
      { label: "Electronics", id: "Electronics" },
      { label: "Toys", id: "Toys" },
      { label: "Clothes", id: "Clothes" },
      { label: "Books", id: "Books" },
      { label: "Men", id: "Men" },
      { label: "Women", id: "Women" },
      { label: "Baby", id: "Baby" },
    ],
  },
  {
    label: "Brand",
    componentType: "select",
    name: "brand",
    options: [
      { label: "Apple", id: "Apple" },
      { label: "Samsung", id: "Samsung" },
      { label: "Huawei", id: "Huawei" },
      { label: "Xiaomi", id: "Xiaomi" },
      { label: "LG", id: "LG" },
      { label: "Nike", id: "Nike" },
      { label: "Adidas", id: "Adidas" },
      { label: "Reebook", id: "Reebook" },
      { label: "Asics", id: "Asics" },
      { label: "Philosophy", id: "Philosophy" },
      { label: "History", id: "History" },
      { label: "Science", id: "Science" },
    ],
  },
];

export const userMenuItems = [
  {
    id: "Home",
    label: "Home",
    path: "/Shop/home",
  },
  {
    id: "Men",
    label: "Men",
    path: "/Shop/listing",
  },
  {
    id: "Women",
    label: "Women",
    path: "/Shop/listing",
  },
  {
    id: "Kids",
    label: "Kids",
    path: "/Shop/listing",
  },
  {
    id: "Accessories",
    label: "Accessories",
    path: "/Shop/listing",
  },
  {
    id: "Electronics",
    label: "Electronics",
    path: "/Shop/listing",
  },
  {
    id: "Books",
    label: "Books",
    path: "/Shop/listing",
  },
];

export const FiltersOptions = {
  category: [
    {
      label: "Electronics",
      id: "Electronics",
    },
    {
      label: "Toys",
      id: "Toys",
    },
    {
      label: "Men",
      id: "Men",
    },
    {
      label: "Women",
      id: "Women",
    },
    {
      label: "Footwear",
      id: "Footwear",
    },
    {
      label: "Baby",
      id: "Baby",
    },
    {
      label: "Books",
      id: "Books",
    }
  ],
  brand: [
    {
      label: "Apple",
      id: "Apple",
    },
    {
      label: "Samsung",
      id: "Samsung",
    },
    {
      label: "Huawei",
      id: "Huawei",
    },
    {
      label: "Xiaomi",
      id: "Xiaomi",
    },
    {
      label: "Nike",
      id: "Nike",
    },
    {
      label: "Reebook",
      id: "Reebook",
    },
    {
      label: "Adidas",
      id: "Adidas",
    },
    {
      label: "Philosophy",
      id: "Philosophy",
    },
  ],
};

export const ShrotOptions = [
 
  
  {
    label: "Price : Low to High",
    id: "Price : Low to High",
  },
  {
    label: " Price : High to Low",
    id: "Price : High to Low",
  },
  
  {
    label: "Title : A to Z",
    id: "Title : A to Z",
  },
  {
    label: "Title : Z to A",
    id: "Title : Z to A",
  },
];
