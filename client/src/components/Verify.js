import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/verify",
        {
          email,
          verificationCode,
        }
      );
      setMessage(response.data.message);
      navigate("/login");
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    setVerificationCode(e.target.value);
  };

  return (
    <div>
      <h2>Xác Thực Tài Khoản</h2>
      {email ? (
        <form onSubmit={handleVerify}>
          {" "}
          {/* Chuyển hàm xác thực vào onSubmit */}
          <input
            type="text"
            placeholder="Mã xác thực"
            value={verificationCode}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Xác Thực</button>
        </form>
      ) : (
        <p>
          Không tìm thấy email để xác thực. Vui lòng quay lại trang đăng ký.
        </p>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Verify;
