import * as storage from "./storage/index";
export const initialState = {
    total: 0,
    cart: [],
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TO_CART":
            console.log("ADD_TO_CART", payload.cart);
            return {
                ...state,
                cart: payload.cart,
            };
        case "REMOVE_FROM_CART":
            console.log("REMOVE_FROM_CART", payload);
            return {
                ...state,
                cart: payload.cart,
            };
        case "UPDATE_STATE":
            console.log("price updated");
            storage.save("cart", { total: payload.total, ...state });
            return {
                ...state,
                total: payload.total,
            };

        default:
            throw new Error("No case for " + type + " found in cartReducer");
    }
};

export default cartReducer;
