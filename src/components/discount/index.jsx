function Discount(props) {
    if (props.price !== props.discountedPrice) {
        const findPercent = props.discountedPrice / props.price;
        const discount = 1 - Math.round(findPercent * 10) / 10;
        const rounded = discount.toFixed(1);
        const discounted = rounded.substring(2, 3) + "0 % OFF";
        return <p className="discount">{discounted}</p>;
    } else {
        return "";
    }
}

export default Discount;
