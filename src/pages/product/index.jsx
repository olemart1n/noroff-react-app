// import useApi from "../../features/fetch";
import { Spinner } from "../../components/spinner";
import StyledProduct from "./Styled.Product";
import useApi from "../../features/fetch";
import URL from "../../features/url";
function Product() {
    const { base, id } = URL();
    const { data, isLoading, isError } = useApi(base + id);
    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <div>an error occurred</div>;
    }
    return (
        <StyledProduct>
            <h1>{data.title}</h1>
            <div className="card">
                <img src={data.imageUrl} alt={data.description}></img>
                <div className="product_details">
                    <div>{data.description}</div>
                </div>
            </div>
            <button>Add To Cart</button>
        </StyledProduct>
    );
}

export default Product;
