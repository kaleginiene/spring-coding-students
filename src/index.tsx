import React, { StrictMode } from "react";

import { Provider } from "react-redux";
import { persistor, store } from "state/store";
import { PersistGate } from "redux-persist/es/integration/react";
import { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import { theme } from "styles/theme";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0
}
body {
    overflow: hidden auto;
}
html {
    font-family: ${theme.fonts.primary};
}
`;

export const wrapRootElement = ({ element }: any) => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {element}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
