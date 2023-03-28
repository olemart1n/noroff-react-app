function OldPrice(props) {
    if (props.price !== props.discountedPrice) {
        const findPercent = props.discountedPrice / props.price;
        const discount = 1 - Math.round(findPercent * 10) / 10;
        const rounded = discount.toFixed(1);
        const discounted = rounded.substring(2, 3) + "0 % OFF";
        return (
            <>
                <span>{props.price}</span>
                <i>{discounted}</i>
            </>
        );
    }
}

export default OldPrice;
