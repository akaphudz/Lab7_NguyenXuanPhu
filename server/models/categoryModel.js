const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // Mỗi danh mục cần có tên duy nhất
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    isActive: {
      type: Boolean,
      default: true, // Danh mục có thể được kích hoạt hoặc không
    },
  },
  {
    timestamps: true, // Thêm thời gian tạo và cập nhật
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
