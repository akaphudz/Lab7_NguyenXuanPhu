require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRouters");
const productRoutes = require("./routes/productRoutes"); // Đảm bảo đường dẫn đúng
const categoryRoutes = require("./routes/categoryRoutes");
const Constants = require("./utils/constants"); // Kết nối với constants.js

const JWT_SECRET = process.env.JWT_SECRET || generateRandomSecret();

const app = express();

// Kết nối tới MongoDB
const mongoURI = `mongodb+srv://${Constants.DB_USER}:${Constants.DB_PASSWORD}@${Constants.DB_SERVER}/${Constants.DB_DATABASE}`;
mongoose
  .connect(mongoURI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Server 🚀🚀🚀"))
  .catch((error) => console.log("MongoDB connection error:", error, "🚨🚨🚨"));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api", productRoutes); // Đảm bảo route sản phẩm được sử dụng đúng
app.use("/api", categoryRoutes); // Đảm bảo route sản phẩm được sử dụng đúng

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚨 Server running on port ${PORT} 🚨`));

// Xuất JWT_SECRET để sử dụng trong các file khác
module.exports = { JWT_SECRET };
