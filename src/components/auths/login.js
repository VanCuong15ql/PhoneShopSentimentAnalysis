import React, { useState } from "react";
import "./login.css"; // Để áp dụng các kiểu CSS cho form
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
      const data = await response.json(); // Giả sử API trả về thông tin người dùng
      localStorage.setItem("username", data.username); // Lưu username vào localStorage
      navigate("/products");
    } else {
      alert("Invalid credentials");
    }
  };
  

  return (
    <div className="login-container">
    <div className="login-box">
      <h2>Đăng nhập</h2>
      <label htmlFor="username">Username:</label>
      <div className="input-group">
        <input
          type="text"
          placeholder="Email hoặc số điện thoại"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
      </div>
      <label htmlFor="password">Password:</label>
      <div className="input-group">
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
      </div>
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  </div>
  );
}

export default Login;
