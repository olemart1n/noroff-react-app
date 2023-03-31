import styled from "styled-components";
export const StyledCheckout = styled.main`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.color.icon};
    h1 {
        margin: 0 auto;
        text-align: center;
    }
    .link {
        display: block;
        width: 50%;
        margin: 0 auto;
        text-decoration: none;
        background-color: ${(props) => props.theme.color.zilla};
        color: ${(props) => props.theme.color.icon};
        border: 1px solid ${(props) => props.theme.color.grey};
        padding: 5px 0;
        border-radius: 4px;
        text-align: center;
        font-size: ${(props) => props.theme.fontSize.small};
        transition: all 0.25s ease-in-out;
    }
`;
