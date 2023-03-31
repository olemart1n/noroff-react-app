import useCart from "../../features/cartContext";
import { Spinner } from "../../components/spinner";
import StyledProduct from "./Styled.Product";
import { ProductReviews } from "../../components/reviews";
import useApi from "../../features/fetch";
import URL from "../../features/url";

function Product() {
    const { addToCart, cart } = useCart();

    const { base, id } = URL();
    const { data, isLoading, isError } = useApi(base + id);
    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <div>an error occurred</div>;
    }

    const { reviews } = data;
    const handleClick = (e) => {
        addToCart(data);
        e.currentTarget.innerHTML = "added";
        setTimeout((e) => {
            if (document.querySelector("#button-to-update")) {
                document.querySelector("#button-to-update").innerHTML = "Add To Cart";
            }
        }, 1000);
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
                <button id="button-to-update" onClick={handleClick}>
                    Add To Cart
                </button>
                <ProductReviews reviews={reviews}></ProductReviews>
            </div>
        </StyledProduct>
    );
}

export default Product;
