export const addProduct = async (product) => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      });
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
      return await response.json();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  