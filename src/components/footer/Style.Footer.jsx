import styled from "styled-components";
const FooterComponent = styled.footer`
    background-color: ${(props) => props.theme.color.background};
    display: flex;
    align-items: center;
    place-content: center;
    .icon {
        font-size: 2rem;
        margin: 0.5rem;
    }
    a {
        color: grey;
    }
    @media (min-width: 450px) {
    }
`;
export default FooterComponent;
