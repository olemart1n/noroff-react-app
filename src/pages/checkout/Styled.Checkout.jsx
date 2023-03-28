import styled from "styled-components";
export const CheckoutComponent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
     @media (min-width: ${(props) => props.theme.breakpoint.m}) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    } 
    }
`;
