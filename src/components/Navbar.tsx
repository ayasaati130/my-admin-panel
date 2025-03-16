/*import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">E-Commerce Admin</h1>
      <ul className="flex space-x-4">
      <li><Link href="/">Dashboard</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/orders">Orders</Link></li>
        <li><Link href="/auth">Auth</Link></li>
      </ul>
    </nav>
  );
}*/

// filepath: c:\Users\pc\Desktop\Code\Projects\e-commerce_admin_panel\src\components\Navbar.tsx
/*import Link from "next/link";
import React from "react";

interface NavbarProps {
  onLogout?: () => void; // Logout is optional
}

export default function Navbar({ onLogout }: NavbarProps) {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">E-Commerce Admin</h1>
      <ul className="flex space-x-4">
        <li><Link href="/">Dashboard</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/orders">Orders</Link></li>
        <li><Link href="/auth">Auth</Link></li>
      </ul>
      {onLogout && (
        <button onClick={onLogout} className="bg-red-500 px-3 py-1 rounded">
          Logout
        </button>
      )}
    </nav>
  );
}*/

/*import Link from "next/link";

interface NavbarProps {
  onLogout?: () => void;
}

export default function Navbar({ onLogout }: NavbarProps) {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-lg font-bold">E-Commerce Admin</h1>
      <ul className="flex space-x-4">
        <li><Link href="/">Dashboard</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/orders">Orders</Link></li>
        <li>
          <button 
            onClick={onLogout} 
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}*/


"use client";
import Link from "next/link";

interface NavbarProps {
  onLogout?: () => void;
}

export default function Navbar({ onLogout }: NavbarProps) {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-lg font-bold">E-Commerce Admin</h1>
      <ul className="flex space-x-4">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/orders">Orders</Link></li>
        <li>
          <Link href="/auth" onClick={(e) => {
            if (onLogout) {
              e.preventDefault(); // Prevent default link behavior
              onLogout(); // Call the logout function
            }
          }}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-700 transition"
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}




