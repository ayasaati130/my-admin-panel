"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function OrderDeletePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const [orderInfo, setOrderInfo] = useState(null);

  useEffect(() => {
    if (id) {
      const orders = JSON.parse(localStorage.getItem("orders") || "");
      const order = orders.find((o) => o.id === id);
      if (order) {
        setOrderInfo(order);
      } else {
        router.push("/orders");
      }
    } else {
      router.push("/orders");
    }
  }, [id, router]);

  const handleDelete = () => {
    const orders = JSON.parse(localStorage.getItem("orders") || "");
    const updatedOrders = orders.filter((o) => o.id !== id);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    router.push("/orders");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px", color: "#d9534f" }}>Delete Order</h1>
      {orderInfo && (
        <p style={{ marginBottom: "20px", fontSize: "1.1em" }}>
          Are you sure you want to delete order #<span style={{ fontWeight: "bold" }}>{orderInfo.id}</span> (Customer: <span style={{ fontWeight: "bold" }}>{orderInfo.customer}</span>, Amount: $<span style={{ fontWeight: "bold" }}>{orderInfo.amount}</span>)?
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
          onClick={() => router.push("/orders")}
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