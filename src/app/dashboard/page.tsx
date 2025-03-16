/*export default function Dashboard() {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">E-Commerce Dashboard</h1>
        <div className="grid grid-cols-3 gap-4 my-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p>120</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Products</h2>
            <p>500</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p>200</p>
          </div>
        </div>
      </div>
    );
  }*/



/*"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import StatsCards from "../components/StatsCard";
import LatestProductsTable from "./components/Dashboard/LatestProductsTable";
import LatestOrdersTable from "./components/Dashboard/LatestOrdersTable";

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulated Data (replace with API calls later)
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", total: 100 },
    { id: 2, customer: "Jane Smith", total: 150 },
    { id: 3, customer: "Alice Johnson", total: 200 },
    { id: 4, customer: "Bob Williams", total: 120 },
    { id: 5, customer: "Eva Brown", total: 180 },
    { id: 6, customer: "Test Customer", total: 250 },
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Headphones", price: 150 },
    { id: 5, name: "Keyboard", price: 80 },
    { id: 6, name: "Mouse", price: 30 },
  ]);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    } else {
      window.location.href = "/auth/login"; // Manual redirect
    }
  }, []); // Removed router dependency

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/auth/login"; // Manual redirect
  };

  if (!isAuthenticated) return null;

  return (
    <div>
      <NavBar onLogout={handleLogout} />
      <h1>Dashboard</h1>
      <StatsCards
        ordersCount={orders.length}
        productsCount={products.length}
        usersCount={10}
      />
      <LatestProductsTable products={products.slice(0, 5)} />
      <LatestOrdersTable orders={orders.slice(0, 5)} />
    </div>
  );
}*/



/*"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar";
export default function Dashboard() {
  const [orderCount, setOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [latestProducts, setLatestProducts] = useState([]);
  const [latestOrders, setLatestOrders] = useState([]);

  useEffect(() => {
    // Replace with your actual data fetching logic
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const users = JSON.parse(localStorage.getItem("users") || "[]"); // Assuming you have users stored

    setOrderCount(orders.length);
    setProductCount(products.length);
    setUserCount(users.length);

    // Get latest 5 products and orders
    setLatestProducts(products.slice(-5).reverse());
    setLatestOrders(orders.slice(-5).reverse());
  }, []);

  return (
    <><NavBar/>
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Dashboard</h1>

      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
          <h2>Orders</h2>
          <p style={{ fontSize: "2em", fontWeight: "bold" }}>{orderCount}</p>
        </div>
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
          <h2>Products</h2>
          <p style={{ fontSize: "2em", fontWeight: "bold" }}>{productCount}</p>
        </div>
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
          <h2>Users</h2>
          <p style={{ fontSize: "2em", fontWeight: "bold" }}>{userCount}</p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "48%" }}>
          <h2>Latest Products</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)" }}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>ID</th>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Name</th>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {latestProducts.map((product) => (
                <tr key={product.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px" }}>{product.id}</td>
                  <td style={{ padding: "10px" }}>{product.name}</td>
                  <td style={{ padding: "10px" }}>${product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ width: "48%" }}>
          <h2>Latest Orders</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)" }}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>ID</th>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Customer</th>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {latestOrders.map((order) => (
                <tr key={order.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px" }}>{order.id}</td>
                  <td style={{ padding: "10px" }}>{order.customer}</td>
                  <td style={{ padding: "10px" }}>${order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div></>
  );
}*/



"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar";

export default function Dashboard() {
  const [orderCount, setOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [latestProducts, setLatestProducts] = useState([]);
  const [latestOrders, setLatestOrders] = useState([]);

  useEffect(() => {
    // Replace with your actual data fetching logic
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const users = JSON.parse(localStorage.getItem("users") || "[]"); // Assuming you have users stored

    setOrderCount(orders.length);
    setProductCount(products.length);
    setUserCount(users.length);

    // Get latest 5 products and orders
    setLatestProducts(products.slice(-5).reverse());
    setLatestOrders(orders.slice(-5).reverse());
  }, []);

  return (
    <>
     
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h1 style={{ marginBottom: "20px", color: "#333" }}>Dashboard</h1>

        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
          <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
            <h2>Orders</h2>
            <p style={{ fontSize: "2em", fontWeight: "bold" }}>{orderCount}</p>
          </div>
          <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
            <h2>Products</h2>
            <p style={{ fontSize: "2em", fontWeight: "bold" }}>{productCount}</p>
          </div>
          <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
            <h2>Users</h2>
            <p style={{ fontSize: "2em", fontWeight: "bold" }}>{userCount}</p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "48%" }}>
            <h2>Latest Products</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)" }}>
              <thead>
                <tr style={{ backgroundColor: "#f0f0f0" }}>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>ID</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Name</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {latestProducts.map((product) => (
                  <tr key={product.id} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "10px" }}>{product.id}</td>
                    <td style={{ padding: "10px" }}>{product.name}</td>
                    <td style={{ padding: "10px" }}>${product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ width: "48%" }}>
            <h2>Latest Orders</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)" }}>
              <thead>
                <tr style={{ backgroundColor: "#f0f0f0" }}>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>ID</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Customer</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {latestOrders.map((order) => (
                  <tr key={order.id} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "10px" }}>{order.id}</td>
                    <td style={{ padding: "10px" }}>{order.customer}</td>
                    <td style={{ padding: "10px" }}>${order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}