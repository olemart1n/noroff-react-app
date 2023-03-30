import { createContext, useReducer, useContext, useState } from "react";
import cartReducer, { initialState } from "./cartReducer";
// import * as storage from "./storage/index";
const cartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [count, setCount] = useState(0);
    const addToCart = (product) => {
        setCount(count + 1);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ...product,
            },
        });
    };
    const removeFromCart = (product) => {
        setCount(count - 1);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                ...product,
            },
        });
    };
    const clearCart = () => {
        setCount(0);
        dispatch({
            type: "CLEAR_CART",
        });
    };
    // states that this context provides out through the app
    const value = {
        count,
        total: state.total,
        cart: state.cart,
        addToCart,
        removeFromCart,
        clearCart,
    };
    return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

const useCart = () => {
    const context = useContext(cartContext);

    if (context === undefined) {
        throw new Error("useCart must be used within cartContext");
    }
    return context;
};

export default useCart;
