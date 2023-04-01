import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Product, Cart, Checkout, Contact } from "./pages/index";
import { CartProvider } from "./features/cartContext";
import { SearchProvider } from "./features/searchContext";
import Layout from "./components/layout";

function App() {
    return (
        <CartProvider>
            <SearchProvider>
                <div>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="product/:id" element={<Product />} />
                            <Route path="cart" element={<Cart />} />
                            <Route path="checkout" element={<Checkout />} />
                            <Route path="contact" element={<Contact />} />
                        </Route>
                    </Routes>
                </div>
            </SearchProvider>
        </CartProvider>
    );
}

export default App;
