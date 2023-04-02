import styled from "styled-components";
export const StyledContact = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid grey;
    background-color: ${(props) => props.theme.color.background};
    h1 {
        color: ${(props) => props.theme.color.icon};
        margin: 1rem;
    }
    form {
    
        color: ${(props) => props.theme.color.icon};
        display: flex;
        flex-direction: column; 
        label {
            
            margin: .7rem auto;   
        }    
        input {
            padding: .5rem;
            text-align: center;
            border: none;
            box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px, rgba(0, 0, 0, 0.08) 0 0 0 1px;
            writing-mode: horizontal-tb !important;
        }
        textarea {
            resize: both;
        }
        button {
            background-color: ${(props) => props.theme.color.zilla};
            border: none;
            margin-top: auto;
            padding: 10px;
        }
        p {
            color: red;
        }

    }
     @media (min-width: 450px) {
        form {
            width: 50%;
            min-height: 50%;
            input {
                font-size: 1.2rem;
            }
            textarea {
                font-size: 1.2rem;
            }
        }

    } 
    }
`;
