import styled from "styled-components";

const Check = styled.div`
    background-color: ${(props) => props.theme.color.primary};
`;

function App() {
    return (
        <div>
            <Check>Hello</Check>
        </div>
    );
}

export default App;
