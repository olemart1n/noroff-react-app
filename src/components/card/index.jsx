import { Link } from "react-router-dom";
import { StyledCard } from "./Style.Card";
import OldPrice from "../oldPrice";

function Card(props) {
    return (
        <StyledCard>
            <img src={props.imageUrl} alt="img"></img>
            <h2>{props.title}</h2>
            <OldPrice price={props.price} discountedPrice={props.discountedPrice} />
            <p>{props.discountedPrice} kr</p>
            <Link to={`product/${props.id}`} className="link">
                view product
            </Link>
        </StyledCard>
    );
}

export default Card;
