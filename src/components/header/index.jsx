import { Link } from "react-router-dom";
import useCart from "../../features/cartContext";
import { HeaderComponent } from "./Style.Header";
import { FaBars } from "react-icons/fa";
import { BsMinecart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import logo from "../../assets/SHOP.png";
function Header(props) {
    const { count } = useCart();
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
                <input type="textbox" placeholder="search" name="search"></input>
            </div>
        </HeaderComponent>
    );
}
export default Header;
