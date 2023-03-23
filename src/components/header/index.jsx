import { Link } from "react-router-dom";
import { HeaderComponent } from "./Style.Header";
import { Nav } from "./Style.Nav";
import { Logo } from "./Style.Logo";
import logo from "../../assets/SHOP.png";
function Header() {
    return (
        <HeaderComponent>
            <Nav>
                <Link to="/">
                    <Logo src={logo} alt="Navigate to start"></Logo>
                </Link>
            </Nav>
        </HeaderComponent>
    );
}
export default Header;
