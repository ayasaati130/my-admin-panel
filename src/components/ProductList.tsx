/*import React from "react";

export default function ProductList() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Product Management</h1>
      <table className="min-w-full border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-2">1</td>
            <td className="p-2">Product A</td>
            <td className="p-2">$50</td>
            <td className="p-2">200</td>
            <td className="p-2">
              <button className="bg-blue-500 text-white p-1 rounded">Edit</button>
              <button className="bg-red-500 text-white p-1 ml-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}*/

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductDisplayPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(storedProducts);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px', color: '#333' }}>Products</h1>
      <Link
        href="/products/create"
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
        Create Product
      </Link>
      <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Price</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: { id: string; name: string; price: number }) => (
            <tr key={product.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}>{product.id}</td>
              <td style={{ padding: '10px' }}>{product.name}</td>
              <td style={{ padding: '10px' }}>${product.price}</td>
              <td style={{ padding: '10px' }}>
                <Link
                  href={`/products/create?id=${product.id}`}
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
                  href={`/products/delete?id=${product.id}`}
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