import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import GenrePage from "./pages/GenrePage/GenrePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/genre" element={<GenrePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
