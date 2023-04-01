import { useState, useEffect } from "react";
import { useSearch } from "./searchContext";
function useApi(url) {
    const { setProducts } = useSearch();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);
                const fetchedData = await fetch(url);
                const json = await fetchedData.json();
                setData(json);
                if (json.length > 1) {
                    setProducts(json);
                }
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [url, setProducts]);

    return { data, isLoading, isError };
}
export default useApi;
