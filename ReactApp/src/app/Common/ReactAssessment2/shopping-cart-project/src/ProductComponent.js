import React, { useState, useRef } from "react";
import { addProduct } from "../actions/productActions";

const ProductComponent = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    rating: ""
  });
  const nameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const ratingRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      description: descRef.current.value,
      rating: ratingRef.current.value
    };
    addProduct(newProduct);
    // Clear form fields
    setProduct({
      name: "",
      price: "",
      description: "",
      rating: ""
    });
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
        <input type="text" placeholder="Price" ref={priceRef} value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
        <input type="text" placeholder="Description" ref={descRef} value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />
        <input type="text" placeholder="Rating" ref={ratingRef} value={product.rating} onChange={(e) => setProduct({ ...product, rating: e.target.value })} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductComponent;
