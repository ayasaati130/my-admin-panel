"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ProductDeletePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const [productName, setProductName] = useState("");

  useEffect(() => {
    if (id) {
      const products = JSON.parse(localStorage.getItem("products") || "");
      const product = products.find((p: { id: string }) => p.id === id);
      if (product) {
        setProductName(product.name);
      } else {
        router.push("/products");
      }
    } else {
      router.push("/products");
    }
  }, [id, router]);

  const handleDelete = () => {
    const products = JSON.parse(localStorage.getItem("products") || "");
    const updatedProducts = products.filter((p: { id: string }) => p.id !== id);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    router.push("/products");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px", color: "#d9534f" }}>Delete Product</h1>
      {productName && (
        <p style={{ marginBottom: "20px", fontSize: "1.1em" }}>
          Are you sure you want to delete "<span style={{ fontWeight: "bold" }}>{productName}</span>"?
        </p>
      )}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={handleDelete}
          style={{
            backgroundColor: "#d9534f",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Yes, Delete
        </button>
        <button
          onClick={() => router.push("/products")}
          style={{
            backgroundColor: "#f0f0f0",
            color: "#333",
            padding: "10px 15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}