/*"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function OrderEditPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  const [customer, setCustomer] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (id) {
      const orders = JSON.parse(localStorage.getItem("orders") || "");
      const order = orders.find((o) => o.id === id); // No need to parseInt here as id is a string.
      if (order) {
        setCustomer(order.customer);
        setAmount(order.amount);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const orders = JSON.parse(localStorage.getItem("orders") || "");
    const newOrder = {
      id: id, // Keep the original ID
      customer,
      amount: Number(amount),
    };

    const updatedOrders = orders.map((o) => (o.id === id ? newOrder : o)); // Replace matching order

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    router.push("/orders");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>
        {id ? "Edit Order" : "Create Order"}
      </h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Customer:
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box", marginTop: "5px" }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
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
}*/


"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function OrderEditPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  const [customer, setCustomer] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (id) {
      const ordersString = localStorage.getItem("orders");
      const orders = ordersString ? JSON.parse(ordersString) : [];
      const order = orders.find((o) => o.id === id);
      if (order) {
        setCustomer(order.customer);
        setAmount(order.amount);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ordersString = localStorage.getItem("orders");
    const orders = ordersString ? JSON.parse(ordersString) : [];
    const newOrder = {
      id: id || String(Date.now()), // Generate ID if creating
      customer,
      amount: Number(amount),
    };

    let updatedOrders;
    if (id) {
      // Update existing order
      updatedOrders = orders.map((o) => (o.id === id ? newOrder : o));
    } else {
      // Create new order
      updatedOrders = [...orders, newOrder];
    }

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    router.push("/orders");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>
        {id ? "Edit Order" : "Create Order"}
      </h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Customer:
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box", marginTop: "5px" }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
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