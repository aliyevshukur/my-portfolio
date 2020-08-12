import { createContext } from "react";

export const NavContext = createContext({ isVisible: true });
export const NavProvider = NavContext.Provider;
export const NavConsumer = NavContext.Consumer;
