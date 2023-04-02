import FooterComponent from "./Style.Footer";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
    return (
        <FooterComponent>
            <AiFillGithub className="icon"></AiFillGithub>
            <a href="https://github.com/olemart1n/noroff-react-app">Github repo for this app</a>
        </FooterComponent>
    );
}
export default Footer;
