export const searchState = {
    allProducts: [],
    filteredProducts: [],
};
export function searchReducer(state, action) {
    // These are actions that can be dispatched
    let allProducts;
    switch (action.type) {
        case "ADD_TO_SEARCH":
            allProducts = [action.payload.array];

            return { ...state, allProducts: allProducts };
        case "CONSOLE_LOG":
            console.log(action.payload.data);
            return;
        default:
            throw new Error("No case for " + action.type + " found in searchReducer");
    }
}

export default searchReducer;
