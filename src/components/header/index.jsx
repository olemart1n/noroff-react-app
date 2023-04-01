import { Link } from "react-router-dom";
import useCart from "../../features/cartContext";
import { HeaderComponent } from "./Style.Header";
import { FaBars } from "react-icons/fa";
import { BsMinecart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { useSearch } from "../../features/searchContext";
import { useState } from "react";
import logo from "../../assets/SHOP.png";

function Header(props) {
    const [isActive, setIsActive] = useState(false);
    const { searchProducts, filteredProducts, setFilteredProducts } = useSearch();
    const { count } = useCart();

    const handleSearch = (e) => {
        searchProducts(e.target.value);
        setIsActive(true);
        console.log(filteredProducts);
    };

    return (
        <HeaderComponent>
            <nav>
                <Link to="/">
                    <img className="logo" src={logo} alt="Navigate to start"></img>
                </Link>
                <div className="icon-div">
                    <Link className="nav-icons" to="cart">
                        <BsMinecart />
                        <div className="count">{count > 0 ? count : ""}</div>
                    </Link>
                    <button className="nav-icons">
                        <FaBars>
                            <span className="sr-only">menu</span>
                        </FaBars>
                    </button>
                </div>
            </nav>
            <div className="search">
                <BsSearch className="search-icon"></BsSearch>
                <input
                    type="textbox"
                    onChange={(e) => handleSearch(e)}
                    placeholder="search"
                    name="search"
                ></input>
                {isActive ? (
                    <div className="search-results">
                        {filteredProducts.map((prod) => {
                            return (
                                <Link
                                    className="search-link"
                                    onClick={() => setFilteredProducts([])}
                                    to={`product/${prod.id}`}
                                    key={prod.id}
                                >
                                    {prod.title}
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </HeaderComponent>
    );
}
export default Header;
