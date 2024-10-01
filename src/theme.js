const theme = {
  borderColor: "#06AED5",
  leftNavWidth: "90px",
  spacing: (n) => n * 20,
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 6px 2px",

  primary: "#ffffff",
  primaryDarker: "#f0f0f0",
  secondary: "#ed7966",
  darkText: "#555555",
  lightText: "#555555",
  lightGrey: "#f7f7f7",
};

export const toggleThemeColors = (isDarkMode) => {
  if (isDarkMode) {
    theme.primary = "#212121";
    theme.primaryDarker = "#282828";
    theme.secondary = "#ed7966";
    theme.darkText = "#ffffff";
    theme.lightText = "#ffffff";
  } else {
    theme.primary = "#ffffff";
    theme.secondary = "#ed7966";
    theme.darkText = "#555555";
    theme.lightText = "#555555";
    theme.primaryDarker = "#f0f0f0";
  }
};

export default theme;
