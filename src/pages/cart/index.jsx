import { Card } from "./card";
import { StyledCart } from "./Styled.Cart";
import useCart from "../../features/cartContext";
function Cart() {
    const { cart } = useCart();
    const title = cart[0].title;
    return (
        <StyledCart>
            <h1>Products in your cart</h1>
            <div className="summary">
                <h4>summary</h4>
                <Card title={title} />
            </div>
        </StyledCart>
    );
}

export default Cart;
