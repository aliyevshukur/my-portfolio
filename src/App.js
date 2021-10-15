import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import GlobalStye from "./GlobalStyle";
import { Wrapper } from "./style.js";
import { RootNavigation } from "./RootNavigation";
import { NavProvider } from "./components/LeftNavigation/NavContext";

class App extends Component {
  state = {
    isVisible: true,
    navItems: [],
    routes: ["/", "/projects", "/contact"],
  };

  setVisible = (value) => {
    this.setState({ isVisible: value });
  };

  setNavItems = (value) => {
    this.setState({ navItems: value });
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
          <GlobalStye />
          <Wrapper>
            <RootNavigation />
          </Wrapper>
        </ThemeProvider>
      </NavProvider>
    );
  }
}

export default App;
