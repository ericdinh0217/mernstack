import Product from "../models/Product";

export const addProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await Product.create(product);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
