import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product Name is  required!"],
    maxlength: 200,
  },
  image:{
    type: String,
    required: [true, "Product Image is required!"],
  },
  price:{
    type: String,
    min: 2,
    max: 50,
    required: [true," Product Price is required"]
  },
  description:{
    type: String,
    required: [true, "Product Description is required!"],
    maxlength: 500,
  },
  keywords:{
    type: String,
    required: [true, "Product Keyword is required!"],
    maxlength: 100,
  },
  category:{
    type: String,
    required: [true, "Product Category is required!"],
    maxlength: 100,
  },
  subcategory:{
    type: String,
    required: [true, "Product Subcategory is required!"],
    maxlength: 100,
  },
});

export default model("Product", productSchema);