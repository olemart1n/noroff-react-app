import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Product, Cart, Checkout } from "./pages/index";
import { CartProvider } from "./features/cartContext";
import Layout from "./components/layout";

function App() {
    return (
        <CartProvider>
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
        </CartProvider>
    );
}

export default App;
