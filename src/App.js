import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import Login from "./components/auths/login";
import ProductList from "./components/product/ProductList/ProductList";
import "./App.css";
import ProductDetail from "./components/product/Productdetail/ProductDetail";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // Dùng useLocation trong component con của Router
  const navigate = useNavigate();
  // Kiểm tra nếu đang ở trang login thì không render sidebar
  const isLoginPage = location.pathname === "/";
  const handleLogout = () => {
    // Xóa username khỏi localStorage
    localStorage.removeItem("username");
    // Chuyển hướng về trang đăng nhập
    navigate("/");
  };
  return (
    <div className="app">
      {!isLoginPage && (
        <div className="sidebar">
          <div className="left-links">
            <Link to="/products" className="sidebar-link">
              Home
            </Link>
            <Link to="/products" className="sidebar-link">
              Products
            </Link>
          </div>
          <div className="right-links">
            <button
              onClick={handleLogout}
              className="sidebar-link logout-button"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      <div >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
