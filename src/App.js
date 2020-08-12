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
  };

  setVisible = (value) => {
    console.log("inside set visible", value);
    this.setState({ isVisible: value });
  };

  render() {
    return (
      <NavProvider
        value={{ isVisible: this.state.isVisible, setVisible: this.setVisible }}
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
