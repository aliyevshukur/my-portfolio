import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import GlobalStye from "./GlobalStyle";
import { Wrapper } from "./style.js";
import { RootNavigation } from "./RootNavigation";
import { NavProvider } from "./components/LeftNavigation/NavContext";
import { ThemeToggleProvider } from "./views/Home/themeContext";
import { toggleThemeColors } from "./theme.js";

class App extends Component {
  state = {
    isVisible: true,
    navItems: [],
    routes: ["/", "/projects", "/contact"],
    isDarkMode: false,
  };

  setVisible = (value) => {
    this.setState({ isVisible: value });
  };

  setNavItems = (value) => {
    this.setState({ navItems: value });
  };

  toggleTheme = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
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
