import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import { Ripple } from "react-preloaders";
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
    // Convert local storage value of isDarkMode to boolean
    const isDarkModeLocal = localStorage.getItem("isDarkMode") === "true";

    // Checks if store is created in local storage, if not creates it
    if (localStorage.getItem("isDarkMode") == null) {
      localStorage.setItem("isDarkMode", false);
      console.log("isDarkMode created in local storage");
    }

    // Checks if dark mode is enabled in local storage
    if (isDarkModeLocal) {
      this.setState(() => {
        toggleThemeColors(true);
        return { isDarkMode: true };
      });
      toggleThemeColors(true);
      console.log("Dark mode is enabled, switched to dark mode");
    }
  }

  setVisible = (value) => {
    this.setState({ isVisible: value });
  };

  setNavItems = (value) => {
    this.setState({ navItems: value });
  };

  toggleTheme = () => {
    this.setState(
      (prevState) => {
        toggleThemeColors(!this.state.isDarkMode);
        return {
          isDarkMode: !prevState.isDarkMode,
        };
      },
      () => {
        localStorage.setItem("isDarkMode", this.state.isDarkMode);
      },
    );
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
              <Ripple
                time={1000}
                animatio={"fade"}
                background={this.state.isDarkMode ? "#212121" : "#ffffff"}
                color={"#ed7966"}
              />
            </Wrapper>
          </ThemeToggleProvider>
        </ThemeProvider>
      </NavProvider>
    );
  }
}

export default App;
