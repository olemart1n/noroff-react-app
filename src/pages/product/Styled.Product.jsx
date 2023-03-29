import styled from "styled-components";
export const StyledProduct = styled.main`
    h1 {

        color: ${(props) => props.theme.color.icon};
        background-color: ${(props) => props.theme.color.background};
        padding: .5rem;
        
    }

    .card {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        width: 100%; 
        margin:auto;
        color: ${(props) => props.theme.color.icon};
        img {
            aspect-ratio: auto;
            width: 100%;
            margin: auto;
            box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px, rgba(0, 0, 0, 0.08) 0 0 0 1px;
        }
        h2 {
            color: ${(props) => props.theme.color.icon};
            font-size : ${(props) => props.theme.fontSize.medium};
            margin: 5px
        }
        .description {
            font-size: ${(props) => props.theme.fontSize.large};
            text-align:center
        }
        .reviews {
            display:flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 50%;
            h3 {
                fontSize: ${(props) => props.theme.fontSize.small};
                margin-top: 5px;
            }
            p {
                box-shadow: rgba(0, 0, 0, 0.05) 0 6px 6px;
            }
        }
    }   

    button {
        width: 30%;
        display: block;
        margin: auto;
        text-decoration: none;
        background-color: ${(props) => props.theme.color.zilla};
        border: 1px solid ${(props) => props.theme.color.grey}; 
        padding: 5px 0;
        border-radius: 4px;
        text-align: center;
        font-size: ${(props) => props.theme.fontSize.small};
    }
     @media (min-width: 650px) {
        h1 {
            margin-bottom: 1rem;
        }
        .card {
            width: 90%;
            display: grid;
        grid-template-columns: 
            1fr 1fr;
        padding: 2rem;
        box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px, rgba(0, 0, 0, 0.08) 0 0 0 1px;
        img {
            aspect-ratio: auto;
            width: 50%;
            margin: auto;
        }
        }
    } 
    }
`;

export default StyledProduct;
