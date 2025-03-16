/*"use client";
import React, { useState } from "react";
import Dashboard from "../../components/Dashboard";
import NavBar from "../../components/Navbar";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrorMessage("");
  };

  const handleAuthSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (isLogin) {
      // Simulate successful login
      setIsAuthenticated(true);
    } else {
      // Simulate successful registration (redirect to login)
      setIsLogin(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return (
      <div>
        <NavBar onLogout={handleLogout} />
        <Dashboard />
      </div>
    );
  }

  return (
    <div className="auth-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f4f4f4" }}>
      <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", width: "300px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#333" }}>{isLogin ? "Login" : "Register"}</h1>
        {errorMessage && <p style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}>{errorMessage}</p>}
        <form onSubmit={handleAuthSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>
          {!isLogin && (
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{ width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </div>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <button
          onClick={toggleAuthMode}
          style={{
            marginTop: "1rem",
            backgroundColor: "transparent",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {isLogin ? "Switch to Register" : "Switch to Login"}
        </button>
      </div>
    </div>
  );
}*/

"use client";
import React, { useState } from "react";
import Dashboard from "../dashboard/page";
import Navbar from "../../components/Navbar";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handleAuthSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isLogin) {
      // Handle Login
      const storedUser = localStorage.getItem(email);
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
          setIsAuthenticated(true);
        } else {
          setError("Incorrect password!");
        }
      } else {
        setError("User not found! Please sign up.");
      }
    } else {
      // Handle Registration
      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        return;
      }

      // Simulate saving user to "database"
      localStorage.setItem(email, JSON.stringify({ email, password }));
      setIsLogin(true);
      setError(""); // Reset error on successful signup
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // If user is authenticated, show Dashboard
  if (isAuthenticated) {
    return (
      <div>
        <Navbar onLogout={handleLogout} />
        <Dashboard />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Register"}</h1>
        
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form onSubmit={handleAuthSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="w-full p-2 border rounded"
            />
          </div>
          {!isLogin && (
            <div>
              <label className="block font-medium">Confirm Password:</label>
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
                className="w-full p-2 border rounded"
              />
            </div>
          )}
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        
        <button 
          onClick={toggleAuthMode} 
          className="mt-4 w-full text-blue-600 hover:underline"
        >
          {isLogin ? "Switch to Register" : "Switch to Login"}
        </button>
      </div>
    </div>
  );
}

