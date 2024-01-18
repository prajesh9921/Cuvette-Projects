import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import GenrePage from "./pages/GenrePage/GenrePage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/genre" element={<GenrePage />}/>
        <Route path="/home" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
