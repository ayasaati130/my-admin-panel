// app/products/create/page.tsx
/*"use client";
import React, { useState } from "react";

export default function ProductCreatePage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to create product
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label><br />
        <label>Price: <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} /></label><br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

// app/products/[id]/page.tsx
*/


"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ProductEditPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (id) {
      const products = JSON.parse(localStorage.getItem("products") || "[]");
      const product = products.find((p: { id: string }) => p.id === id);
      if (product) {
        setName(product.name);
        setPrice(product.price);
      }
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const newProduct = {
      id: id || String(Date.now()),
      name,
      price: Number(price),
    };

    if (id) {
      const updatedProducts = products.map((p: { id: string }) =>
        p.id === id ? newProduct : p
      );
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    } else {
      products.push(newProduct);
      localStorage.setItem("products", JSON.stringify(products));
    }

    router.push("/products");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>
        {id ? "Edit Product" : "Create Product"}
      </h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box", marginTop: "5px" }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box", marginTop: "5px" }}
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}