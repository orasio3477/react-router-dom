import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    // Routes는 Route를 묶어주는 역활을 함
    // Routes를 사용하지 않으면 조건에 맞는 Route를 전부 보여줌
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route
        path="*"
        element={
          <>
            <div>없는 페이지입니다.</div>
            <Link to="/">홈으로 이동</Link>
          </>
        }
      />
    </Routes>
  );
}

export default App;
