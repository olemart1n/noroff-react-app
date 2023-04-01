import { useContext } from "react";
import { createContext, useState } from "react";
const searchContext = createContext();

function SearchProvider({ children }) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState([]);

    const searchProducts = (value) => {
        if (value.length > 0) {
            const filteredProducts = products.filter((prod) => {
                return prod.title.toLowerCase().includes(value.toLowerCase());
            });
            setFilteredProducts(filteredProducts);
        } else {
            setFilteredProducts([]);
        }
    };

    const value = {
        products,
        setProducts,
        searchProducts,
        filteredProducts,
        setFilteredProducts,
    };

    return <searchContext.Provider value={value}>{children}</searchContext.Provider>;
}

const useSearch = () => {
    const context = useContext(searchContext);
    return context;
};

export { useSearch, SearchProvider };
