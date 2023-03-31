import styled from "styled-components";
export const StyledContact = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
        background-color: ${(props) => props.theme.color.grey};
        display: flex;
        flex-direction: column;     

    }
     @media (min-width: 450px) {
        display: flex;

    } 
    }
`;
