import styled from "styled-components";
export const StyledCart = styled.main`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 1rem;
    h1 {
        width: 100%;
        font-size: ${(props) => props.theme.fontSize.medium};
        color: ${(props) => props.theme.color.icon};
        text-align: center;

    }

    h5 {
        font-size: ${(props) => props.theme.fontSize.large};
        text-decoration: underline ${(props) => props.theme.color.icon} 2px;
        .link {
            text-decoration: none;
            color: ${(props) => props.theme.color.icon};
        }
    }
    .summary {
        display: flex;
        flex-direction: column;
        width: 95%;
        margin: 0 auto;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px, rgba(0, 0, 0, 0.08) 0 0 0 1px;
        color: ${(props) => props.theme.color.icon};
    
    }
    .card {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        border-bottom: 1px solid ${(props) => props.theme.color.icon};
    }
    .card-part-one {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        
        
        align-items: center;
        img {
            margin:auto;
            height: 150px;
        }
    }
    .card-part-two {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        margin: 1rem;
        .quantity {
            width: 100px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin:auto;
            .current-count {
            box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px, rgba(0, 0, 0, 0.08) 0 0 0 1px;
            font-size: 1.3rem;
            font-family: thomas, "sans-serif";
            .icon {
            border: 1px solid ${(props) => props.theme.color.icon};
            border-radius: 50%;
            font-size: 1.3rem;
            cursor: pointer;
        }
        }
        .card-part-two-price {
        }
        }
    }
    .total {
        display: flex;
        algin-items: center;
        margin: 1rem;
        width: 100%;
        h4 {
            margin: auto
        }
        .link {
        display: block;
        margin: auto;
        text-decoration: none;
        background-color: ${(props) => props.theme.color.zilla};
        color: ${(props) => props.theme.color.icon};
        border: 1px solid ${(props) => props.theme.color.grey}; 
        padding: 5px 5px;
        border-radius: 4px;
        text-align: center;
        font-size: ${(props) => props.theme.fontSize.medium};
        }
    }
    
     @media (min-width:450px) {
        h1 {
            font-size: 2rem;
        }
        .card-part-two {
        .icon {
            border: 1px solid ${(props) => props.theme.color.icon};
            border-radius: 50%;
            font-size: 2rem;
        }
        .summary {
        width: 80%;
    
    }
    }
    } 
    }
`;
