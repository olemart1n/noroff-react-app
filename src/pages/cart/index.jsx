import { View } from "./view";
import { StyledCart } from "./Styled.Cart";
import useCart from "../../features/cartContext";
import { Link } from "react-router-dom";
function Cart() {
    const { cart, count, total, addToCart, removeFromCart } = useCart();
    const addClick = (e) => {
        const product = cart.find((item) => item.id === e.currentTarget.attributes.productid.value);
        addToCart(product);
    };

    const minusClick = (e) => {
        const product = cart.find((item) => item.id === e.currentTarget.attributes.productid.value);
        removeFromCart(product);
    };
    return (
        <StyledCart>
            <h1>
                Products in your cart <span>({count})</span>
            </h1>
            {count > 0 ? (
                <div className="summary">
                    <h4>summary</h4>
                    <View cart={cart} addClick={addClick} minusClick={minusClick}></View>
                    <div className="total">
                        <h4>Total {Math.ceil(total)},- NOK</h4>
                        <Link className="link" to="/checkout">
                            Checkout
                        </Link>
                    </div>
                </div>
            ) : (
                "your cart is empty"
            )}
        </StyledCart>
    );
}

export default Cart;
