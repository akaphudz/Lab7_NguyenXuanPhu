import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const role = "customer";
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        {
          name,
          email,
          password,
          role,
        }
      );
      localStorage.setItem("email", email);
      setMessage(response.data.message);
      navigate("/verify");
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div>
      <h2>Đăng Ký</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Dropdown đã bị loại bỏ */}
        <button type="submit">Đăng Ký</button>
      </form>
      {message && <p>{message}</p>}
      {/* Nút Đăng Nhập */}
      <button onClick={handleLoginRedirect}>Đăng Nhập</button>
    </div>
  );
};

export default Register;
