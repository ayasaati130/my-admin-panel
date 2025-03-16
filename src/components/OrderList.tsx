/*export default function OrderList() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Order Management</h1>
        <table className="min-w-full border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Order ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Total</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">101</td>
              <td className="p-2">John Doe</td>
              <td className="p-2">$150</td>
              <td className="p-2">Pending</td>
              <td className="p-2">
                <button className="bg-blue-500 text-white p-1 rounded">Update</button>
                <button className="bg-red-500 text-white p-1 ml-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  */

  "use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function OrderDisplayPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(storedOrders);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px', color: '#333' }}>Orders</h1>
      <Link
        href="/orders/create"
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 15px',
          borderRadius: '5px',
          textDecoration: 'none',
          marginBottom: '20px',
          display: 'inline-block',
        }}
      >
        Create Order
      </Link>
      <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Customer</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Amount</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: { id: string; customer: string; amount: number }) => (
            <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}>{order.id}</td>
              <td style={{ padding: '10px' }}>{order.customer}</td>
              <td style={{ padding: '10px' }}>${order.amount}</td>
              <td style={{ padding: '10px' }}>
                <Link
                  href={`/orders/create?id=${order.id}`}
                  style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '3px',
                    textDecoration: 'none',
                    marginRight: '5px',
                    fontSize: '0.9em',
                  }}
                >
                  Edit
                </Link>
                <Link
                  href={`/orders/delete?id=${order.id}`}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '3px',
                    textDecoration: 'none',
                    fontSize: '0.9em',
                  }}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}