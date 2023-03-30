import styled from "styled-components";
export const StyledCart = styled.main`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    h1 {
        width: 100%

    }
    gap: 1rem;
     @media (min-width: 450px}) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    } 
    }
`;
