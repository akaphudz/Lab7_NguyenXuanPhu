import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import Verify from "../components/Verify";
import HomePage from "../components/HomePage";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/" element={<Navigate to="/login" replace />} />{" "}
      {/* Chuyển hướng đến trang login */}
    </Routes>
  );
};

export default UserRoutes;
