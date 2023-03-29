import styled from "styled-components";

export const HeaderComponent = styled.header`
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    nav {
        width: 100%;
        display: flex;
        justify-content: space-between;

        div {
            display: flex;
            padding: 0 5px;
            width: 30%;

            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }

    .logo {
        width: 100px;
        @media (min-width: 450px) {
            width: 180px;
        }
    }

    .icon-div {
        display: flex;
        padding: 4px 4px;
    }

    .nav-icons {
        all: unset;
        cursor: pointer;
        position: relative;
        margin: 0;
        display: flex;
        place-content: center;
        font-size: ${(props) => props.theme.icon.small};
        color: ${(props) => props.theme.color.icon};
        @media (min-width: 450px) {
            font-size: ${(props) => props.theme.icon.big};
        }
    }

    .count {
        height: 15px;
        width: 15px;
        position: absolute;
        color: ${(props) => props.theme.color.zilla};
        background-color: transparent;
        font-size: ${(props) => props.theme.fontSize.small};
        top: 15%;
        @media (min-width: 450px) {
            height: 20px;
            width: 20px;
            top: 25%;
            font-size: ${(props) => props.theme.fontSize.medium};
        }
    }

    .cartOnHover {
        font-size: ${(props) => props.theme.fontSize.medium};
        position: absolute;
        border: 2px solid ${(props) => props.theme.color.grey};
        top: 100px;
    }

    .search {
        position: relative;
        border: 1px solid grey;
        display: flex;
        align-items: center;
        border-radius: 2px;
        margin: 5px;
        width: 100%;
        @media (min-width: 450px) {
            max-width: 40%;
            margin-left: auto;
        }
    }

    .search-icon {
        font-size: ${(props) => props.theme.search_icon.small};
        padding: 2px;
        color: grey;
        @media (min-width: 768px) {
            font-size: ${(props) => props.theme.search_icon.big};
        }
    }

    input {
        width: 100%;
        border: none;
        writing-mode: horizontal-tb !important;

        color: ${(props) => props.theme.color.icon};
        font-size: ${(props) => props.theme.fontSize.large};
        font-size: ${(props) => props.theme.fontSize.medium};
        @media (min-width: 450px) {
            font-size: ${(props) => props.theme.fontSize.large};
        }
    }

    input:focus {
        outline: none !important;
    }
`;
