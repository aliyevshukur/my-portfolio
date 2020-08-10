import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Wrapper } from "./style.js";
import GlobalStye from "./GlobalStyle";
import { Home, Projects, Contact } from "./views";
import { LeftNavigation } from "./components";
import theme from "./theme";
import "./style.css";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme} component={Wrapper}>
        <GlobalStye />
        <LeftNavigation />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                timeout={{ enter: 1000, exit: 1000 }}
                key={location.key}
                classNames={location.state?.animation || "slide-down"}
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </ThemeProvider>
    );
  }
}
