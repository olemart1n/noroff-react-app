import styled from "styled-components";
export const StyledProduct = styled.main`
    
    h1 {

        color: ${(props) => props.theme.color.icon};
        background-color: ${(props) => props.theme.color.background};
        padding: .5rem;

    }

    .card {
        display: grid;
        grid-template-columns: 
            1fr 1fr;
        padding: 2rem;

        img {
            aspect-ratio: auto;
            width: 50%;
            margin: auto;
        }
    }

    button {
        width: 50%;
        margin: auto;
        text-decoration: none;
        background-color: ${(props) => props.theme.color.zilla};
        border: 1px solid ${(props) => props.theme.color.grey}; 
        padding: 5px 0;
        border-radius: 4px;
        text-align: center;
        font-size: ${(props) => props.theme.fontSize.small};
    }
     @media (min-width: 450px) {

    } 
    }
`;

export default StyledProduct;
