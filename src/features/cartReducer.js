// import * as storage from "./storage/index";
export const initialState = {
    total: 0,
    cart: [],
};

const cartReducer = (state, action) => {
    const { type, payload } = action;
    let productIndex;
    let newTotal;
    let cart;
    switch (type) {
        case "ADD_TO_CART":
            cart = [...state.cart];
            productIndex = cart.findIndex((product) => product.id === payload.id);
            if (productIndex === -1) {
                cart.push({ ...payload, quantity: 1 });
            } else {
                cart = [
                    ...cart.slice(0, productIndex),
                    { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
                    ...cart.slice(productIndex + 1),
                ];
            }
            newTotal = cart.reduce((currentTotal, product) => {
                currentTotal += product.discountedPrice * product.quantity;
                return currentTotal;
            }, 0);
            console.log(cart, newTotal);
            return { ...state, cart: cart, total: newTotal };

        case "REMOVE_FROM_CART":
            cart = [...state.cart];
            productIndex = cart.findIndex((product) => product.id === payload.id);
            if (productIndex !== -1) {
                if (cart[productIndex].quantity > 1) {
                    cart = [
                        ...cart.slice(0, productIndex),
                        {
                            ...cart[productIndex],
                            quantity: cart[productIndex].quantity - 1,
                        },
                        ...cart.slice(productIndex + 1),
                    ];
                } else {
                    cart = [...cart.slice(0, productIndex), ...cart.slice(productIndex + 1)];
                }
            }
            newTotal = cart.reduce((currentTotal, product) => {
                currentTotal += product.discountedPrice * product.quantity;
                return currentTotal;
            }, 0);
            return { ...state, cart: cart, total: newTotal };
        case "CLEAR_CART":
            return { cart: [], total: 0 };

        default:
            throw new Error("No case for " + type + " found in cartReducer");
    }
};

export default cartReducer;
