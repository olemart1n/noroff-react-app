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

    .bar:not(:focus):not(:active) {
        @media (min-width: 450px) {
            clip: rect(0 0 0 0);
            clip-path: inset(50%);
            height: 1px;
            overflow: hidden;
            position: absolute;
            white-space: nowrap;
            width: 1px;
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
        color: ${(props) => props.theme.color.icon};
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px, rgba(0, 0, 0, 0.08) 0 0 0 1px;
        font-size: ${(props) => props.theme.fontSize.small};
        top: 15%;
        @media (min-width: 450px) {
            height: 20px;
            width: 20px;
            top: 21%;
            font-size: ${(props) => props.theme.fontSize.medium};
        }
    }

    .nav-icons:hover {
        box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px, rgba(0, 0, 0, 0.08) 0 0 0 1px;
    }

    .navigation-row {
        width: 100%;
        display: flex;
        flex-wrap: wrap-reverse;
        algin-items: center;
        @media (min-width: 450px) {
            flex-wrap: unset;
        }
    }
    .mobile-nav {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .mobile-nav-link {
            text-decoration: none;
            padding: 5px;
            color: grey;
        }
    }
    .nav-links {
        display: none;
        @media (min-width: 450px) {
            align-items: center;
            display: flex;
            flex-direction: row;
            position: relative;
            justify-content: space-around;
            border: none;
            width: 100%;
            .nav-link {
                text-decoration: none;
                color: grey;
            }
        }
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

    .search-results {
        position: absolute;
        background-color: ${(props) => props.theme.color.background};
        top: 100%;
        border: 1px solid ${(props) => props.theme.color.grey};
        max-height: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        .search-link {
            text-decoration: none;
            color: ${(props) => props.theme.color.icon};
            width: 100%;
        }
        .search-link:hover {
            background-color: ${(props) => props.theme.color.zilla};
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
