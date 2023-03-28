import { useParams } from "react-router-dom";
// const URL = "https://api.noroff.dev/api/v1/online-shop";

const URL = () => {
    const base = "https://api.noroff.dev/api/v1/online-shop/";
    const { id } = useParams();
    const specific = base + id;

    return { base, id, specific };
};
export default URL;
