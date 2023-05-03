import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Provider store={store}>
          <App />
        </Provider>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>, rootElement);
} else {
  render(<React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Provider store={store}>
          <App />
        </Provider>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>, rootElement);
}