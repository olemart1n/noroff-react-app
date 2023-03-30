export const calculateCount = (param) => {
    let count = 0;
    param.cart.forEach((element) => {
        count += element.quantity;
    });
    return count;
};
