import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);

      navigate("/homepage");
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <div>
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleLogin}>
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
        {/* Nút Đăng Nhập */}
        <button type="submit">Đăng Nhập</button>
      </form>
      {message && <p>{message}</p>}
      {/* Nút Đăng Ký */}
      <button onClick={handleRegisterRedirect}>Đăng Ký</button>
    </div>
  );
};

export default Login;
