import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${(props) => props.theme.color.grey};
    padding: 1rem;
    h2 {
        font-size: ${(props) => props.theme.fontSize.small};
    }
    .link {
        width: 100%;
        text-decoration: none;
        background-color: ${(props) => props.theme.color.zilla};
        color: ${(props) => props.theme.color.icon};
        padding: 5px 0;
        border-radius: 4px;
        text-align: center;
        font-size: ${(props) => props.theme.fontSize.small};
    }

    img {
        height: 100%;
        object-fit: cover;
        object-fit: scale-down;
    }

    span {
        position: absolute;
        text-decoration: line-through;
        background-color: ${(props) => props.theme.color.grey};
        font-size: ${(props) => props.theme.fontSize.small};
    }
    i {
        color: green;
        font-size: ${(props) => props.theme.fontSize.small};
    }

    @media (min-width: 450px) {
        .link {
            border: 1px solid grey;
            padding: 7px 0;
            border-radius: 4px;
            font-size: ${(props) => props.theme.fontSize.medium};
        }
    }
`;
