import styled from "styled-components";
export const HomeComponent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    padding: .5rem;
     @media (min-width: ${(props) => props.theme.break.mobile}) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        padding: 1rem;
    } 
    }
`;
