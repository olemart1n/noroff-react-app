import useCart from "../../features/cartContext";
import { Spinner } from "../../components/spinner";
import StyledProduct from "./Styled.Product";
import { ProductReviews } from "../../components/reviews";
import useApi from "../../features/fetch";
import URL from "../../features/url";

function Product() {
    const { addToCart } = useCart();

    const { base, id } = URL();
    const { data, isLoading, isError } = useApi(base + id);
    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <div>an error occurred</div>;
    }

    const { reviews } = data;
    const handleClick = () => {
        addToCart(data);
    };
    return (
        <StyledProduct>
            <h1>{data.title}</h1>
            <div className="card">
                <img src={data.imageUrl} alt={data.description}></img>
                <div>
                    <div className="description">
                        <h2>DESCRIPTION</h2>
                        <p>{data.description}</p>
                    </div>
                    <div className="price">
                        <h2>Price</h2>
                        <p>{data.discountedPrice} NOK</p>
                    </div>
                </div>
                <button onClick={handleClick}>Add To Cart</button>
                <ProductReviews reviews={reviews}></ProductReviews>
            </div>
        </StyledProduct>
    );
}

export default Product;
