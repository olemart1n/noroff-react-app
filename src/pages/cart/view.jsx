import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
export function View(props) {
    const { cart } = props;
    return cart.map((item) => {
        return (
            <div key={item.id} className="card">
                <div className="card-part-one">
                    <img src={item.imageUrl} alt={item.description}></img>
                    <h5>
                        <Link className="link" to={`/product/${item.id}`}>
                            {item.title}
                        </Link>
                    </h5>
                </div>
                <div className="card-part-two">
                    <div className="quantity">
                        <AiOutlineMinus
                            className="icon"
                            productid={item.id}
                            onClick={props.minusClick}
                        />
                        <div className="current-count">{item.quantity}</div>
                        <AiOutlinePlus
                            productid={item.id}
                            onClick={props.addClick}
                            className="icon"
                        />
                    </div>
                    <div className="card-part-two-price">
                        <h4>{Math.ceil(item.quantity * item.discountedPrice)},- NOK</h4>
                    </div>
                </div>

                <div></div>
                <div></div>
            </div>
        );
    });
}
