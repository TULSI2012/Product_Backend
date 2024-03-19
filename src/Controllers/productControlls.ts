import Product from "../models/productModel";

export const getAllProduct = async (req: any, res: any) => {
  try {
    const data = await Product.find();

    res.status(200).json({
      status: "success",
      results: data.length,
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getProductById = async (req: any, res: any) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const addProcuct = async (req: any, res: any) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        Product: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};