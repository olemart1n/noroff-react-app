import { createContext } from "react";
import { useReducer, useContext } from "react";
import cartReducer, { initialState } from "./cartReducer";
import * as storage from "./storage/index";
const cartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        const updatedCart = state.products.concat(product);
        updateState(updatedCart);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCart,
            },
        });
    };
    const removeFromCart = (product) => {
        const updatedCart = state.products.filter(
            (currentProduct) => currentProduct.title !== product.title
        );
        updateState(updatedCart);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCart,
            },
        });
    };

    const updateState = (products) => {
        let total = 0;
        products.forEach((product) => (total += product.price));
        storage.remove("products");
        storage.save("products", products);
        dispatch({
            type: "UPDATE_STATE",
            payload: {
                total,
            },
        });
    };
    const value = {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart,
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
