import React from "react";
import useCart from "../../features/cartContext";
import { Link } from "react-router-dom";
import { StyledCheckout } from "./Styled.Checkout";
import { useEffect } from "react";

function Checkout() {
    const { clearCart } = useCart();
    useEffect(() => {
        clearCart();
    }, [clearCart]);
    return (
        <StyledCheckout>
            <h1>The order was successful</h1>
            <Link className="link" to="/">
                Go back to store
            </Link>
        </StyledCheckout>
    );
}

export default Checkout;
