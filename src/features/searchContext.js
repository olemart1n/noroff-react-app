import { useContext, createContext, useReducer, useEffect } from "react";
import { searchReducer, searchState } from "./searchReducer";

const searchContext = createContext(searchState);

export const SearchProvider = ({ children }) => {
    const [state, dispatch] = useReducer(searchReducer, searchState);
    const addProducts = (data) => {
        dispatch({
            type: "ADD_TO_SEARCH",
            payload: {
                array: data,
            },
        });
    };
    const consoleLog = (data) => {
        dispatch({
            type: "CONSOLE_LOG",
            payload: {
                ...data,
            },
        });
    };

    const value = {
        addProducts,
        allProducts: state.allProducts,
        state,
        consoleLog,
    };
    return <searchContext.Provider value={value}>{children}</searchContext.Provider>;
};

const useSearch = () => {
    const context = useContext(searchContext);
    if (context === undefined) {
        throw new Error("search context error");
    }
    return context;
};

export default useSearch;
