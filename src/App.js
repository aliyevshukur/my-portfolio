import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStye from "./GlobalStyle";
import { RootNavigation } from "./RootNavigation";
import { NavProvider } from "./components/LeftNavigation/NavContext";
import { Wrapper } from "./style.js";
import theme from "./theme";
import { toggleThemeColors } from "./theme.js";
import { ThemeToggleProvider } from "./views/Home/themeContext";

class App extends Component {
  state = {
    isVisible: true,
    navItems: [],
    routes: ["/", "/projects", "/contact"],
    isDarkMode: false,
  };

  componentDidMount() {
    // Checks if store is created in local storage, if not creates it
    if (localStorage.getItem("isDarkMode") == null) {
      localStorage.setItem("isDarkMode", false);
    }

    // Checks if dark mode is set in local storage
    if (localStorage.getItem("isDarkMode") === true) {
      this.setState({ isDarkMode: true });
      toggleThemeColors(true);
    }
  }

  setVisible = (value) => {
    this.setState({ isVisible: value });
  };

  setNavItems = (value) => {
    this.setState({ navItems: value });
  };

  toggleTheme = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
    localStorage.setItem("isDarkMode", !this.state.isDarkMode);
    toggleThemeColors(!this.state.isDarkMode);
    console.log("object", !this.state.isDarkMode);
  };

  render() {
    return (
      <NavProvider
        value={{
          isVisible: this.state.isVisible,
          setVisible: this.setVisible,
          navItems: this.state.navItems,
          setNavItems: this.setNavItems,
          routes: this.state.routes,
        }}
      >
        <ThemeProvider theme={theme} component={Wrapper}>
          <ThemeToggleProvider
            value={{
              isDarkMode: this.state.isDarkMode,
              toggleTheme: this.toggleTheme,
            }}
          >
            <GlobalStye />
            <Wrapper>
              <RootNavigation />
            </Wrapper>
          </ThemeToggleProvider>
        </ThemeProvider>
      </NavProvider>
    );
  }
}

export default App;
