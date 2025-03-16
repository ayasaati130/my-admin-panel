"use client";
import React from "react";

interface StatsCardProps { // Changed interface name to StatsCardProps
  ordersCount: number;
  productsCount: number;
  usersCount: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ ordersCount, productsCount, usersCount }) => { // Changed component name to StatsCard
  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px", width: "200px", textAlign: "center" }}>
        <h3>Orders</h3>
        <p>{ordersCount}</p>
      </div>
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px", width: "200px", textAlign: "center" }}>
        <h3>Products</h3>
        <p>{productsCount}</p>
      </div>
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px", width: "200px", textAlign: "center" }}>
        <h3>Users</h3>
        <p>{usersCount}</p>
      </div>
    </div>
  );
};

export default StatsCard; // Export the StatsCard component