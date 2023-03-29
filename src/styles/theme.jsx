import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        link: "var(--color-link)",
        zilla: "var(--color-zilla)",
        icon: "var(--color-icon)",
        grey: "var(--color-grey)",
        logo: "var(--color-logo)",
    },
    fontSize: {
        small: "var(--font-small)",
        medium: "var(--font-medium)",
        large: "var(--font-large)",
    },
    font: {
        primary: "var(--font-primary)",
    },
    icon: {
        big: "var(--icon-big)",
        small: "var(--icon-small)",
    },
    search_icon: {
        big: "var(--search-big)",
        small: "var(--search-small)",
    },
    logo: {
        big: "var(--logo-big)",
        small: "var(---logo-small)",
    },
};

export const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
export default Theme;
