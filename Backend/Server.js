const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
const DB_conection = require("./DB_conection");
const authRouter = require("./routes/auth/authRoutes");
const adminRouter = require("./routes/Admin/productRoute");
const shopRouter = require("./routes/Shop/shop-routes");
const cartRouter = require("./routes/Shop/cart-routes");
const addressRouter = require("./routes/Shop/Address-routes");
const OderRouter = require("./routes/Shop/Oder-routes");

const App = express();
const PORT = process.env.PORT || 5000;

App.use(express.json());
App.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
App.use(cookieParser());
App.use(express.static("public"));
App.use("/api/auth", authRouter);
App.use("/api/admin", adminRouter);
App.use("/api/shop", shopRouter);
App.use("/api/cart", cartRouter);
App.use("/api/address", addressRouter);
App.use("/api/Oder",OderRouter);

App.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
