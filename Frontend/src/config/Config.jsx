import { ShoppingBasket, LayoutDashboard } from "lucide-react";
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
      { label: "Footwear", id: "Footwear" },
      { label: "Clothing", id: "Clothing" },
      { label: "Books", id: "Books" },
      { label: "Men", id: "Men" },
      { label: "Women", id: "Women" },
      { label: "Baby", id: "Baby" },
      { label: "Accessories", id: "Accessories" },
    ],
  },
  {
    label: "Brand",
    componentType: "select",
    name: "brand",
    options: [
      { label: "Apple & Samsung", id: "Apple&Samsung" },
      { label: "Xiaomi & OnePLus+", id: "Xiaomi&OnePLus+" },
      { label: "Nike & Adidas", id: "Nike&Adidas" },
      { label: "Xiaomi", id: "Xiaomi" },
      { label: "HnM&Zara", id: "HnM&Zara" },
      { label: "Philosophy & History", id: "Philosophy&History" },
      { label: "Others", id: "Others" },
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
    id: "Products",
    label: "Products",
    path: "/Shop/listing",
   
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
    id: "Baby",
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
    id: "Footwear",
    label: "Footwear",
    path: "/Shop/listing",
  },
  {
    id: "Toys",
    label: "Toys",
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
      label: "Accessories",
      id: "Accessories",
    },
    {
      label: "Clothing",
      id: "Clothing",
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
    },
  ],
  brand: [
    {
      label: "Apple&Samsung",
      id: "Apple&Samsung",
    },
    { label: "HnM&Zara", id: "HnM&Zara" },

    {
      label: "Xiaomi&OnePLus+",
      id: "Xiaomi&OnePLus+",
    },
    {
      label: "Nike&Adidas",
      id: "Nike&Adidas",
    },

    {
      label: "Philosophy&History",
      id: "Philosophy&History",
    },
    {
      label: "Others",
      id: "Others",
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

export const AddressFromConfig = [
  {
    label: "Address",
    placeholder: "Enter your address",
    type: "text",
    componentType: "input",
    name: "address",
  },
  {
    label: "City",
    placeholder: "Enter your city",
    type: "text",
    componentType: "input",
    name: "city"
  },
  {
    label: "Pincode",
    placeholder: "Enter your pincode",
    type: "text",
    componentType: "input",
    name: "pincode"
  },
  {
    label: "Phone",
    placeholder: "Enter your phone",
    type: "text",
    componentType: "input",
    name: "phone"
  },
  {
    label: "Notes",
    placeholder: "Enter your notes",
    type: "text",
    componentType: "textarea",
    name: "notes"
  }
] 