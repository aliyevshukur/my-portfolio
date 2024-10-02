import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { LeftNavigation } from "./components";
import { Contact, Home, Projects } from "./views";
import { NotFound } from "./views/NotFound.js";
import { PageContainer } from "./views/defaultPageStyle";

export const RootNavigation = withRouter(() => {
  return (
    <>
      <LeftNavigation />
      <Route
        render={({ location }) => (
          <TransitionGroup
            childFactory={(child) =>
              React.cloneElement(child, {
                classNames:
                  location.state?.routes.indexOf(location.pathname) >
                  location.state?.prevScreen
                    ? "slide-down"
                    : "slide-up",
              })
            }
            component={PageContainer}
          >
            <CSSTransition timeout={1000} key={location.key}>
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
                <Route path='*' component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </>
  );
});
