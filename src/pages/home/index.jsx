import { HomeComponent } from "./Styled.Home";
import Card from "../../components/card";
import URL from "../../features/url";
import useApi from "../../features/fetch";
import { Spinner } from "../../components/spinner";

function Home() {
    const { base } = URL();

    const { data, isLoading, isError } = useApi(base);

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <div>an error occurred</div>;
    }
    return (
        <HomeComponent>
            {data.map((product) => {
                return (
                    <Card
                        key={product.id}
                        id={product.id}
                        imageUrl={product.imageUrl}
                        price={product.price}
                        discountedPrice={product.discountedPrice}
                        title={product.title}
                    />
                );
            })}
        </HomeComponent>
    );
}

export default Home;
