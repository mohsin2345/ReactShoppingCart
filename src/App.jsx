import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Deatail from "./Pages/Deatail";

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category/:category" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:id" element={<Deatail/>} />

      </Routes>
      </>
  )
}

export default App
