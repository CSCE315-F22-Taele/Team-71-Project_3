import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "./global.css";
/**
 * This code renders the <App> component inside a <BrowserRouter> component.
 * It also sets up the Material-UI and Chakra UI libraries and provides them with custom themes.
 * It also sets up a global CSS stylesheet and an Emotion cache.
 */
const muiTheme = createTheme();
const chakraTheme = extendTheme();
const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CacheProvider value={emotionCache}>
          <ChakraProvider theme={chakraTheme}>
            <CssBaseline />
            <App />
          </ChakraProvider>
        </CacheProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
