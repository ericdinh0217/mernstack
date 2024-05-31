import express from "express";
const router = express.Router();

router.post("/products", async (req, res) => {
  try {
    // Add logic to save product to the database
    const product = req.body;
    // Example: Save product to MongoDB
    // await ProductModel.create(product);
    res.status(201).json({ success: true, product });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

export default router;
