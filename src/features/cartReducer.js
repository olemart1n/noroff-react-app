import * as storage from "./storage/index";
export const initialState = {
    total: 0,
    products: [],
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TO_CART":
            console.log("ADD_TO_CART", payload.products);
            return {
                ...state,
                products: payload.products,
            };
        case "REMOVE_FROM_CART":
            console.log("REMOVE_FROM_CART", payload);
            return {
                ...state,
                products: payload.products,
            };
        case "UPDATE_STATE":
            console.log("UPDATE_PRICE", payload);
            return {
                ...state,
                total: payload.total,
            };

        default:
            throw new Error("No case for " + type + " found in cartReducer");
    }
};

export default cartReducer;
