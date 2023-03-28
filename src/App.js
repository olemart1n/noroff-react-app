import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Product, Cart, Checkout } from "./pages/index";
import Layout from "./components/layout";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="product/:id" element={<Product />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
