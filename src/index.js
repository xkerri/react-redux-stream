import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    composeWithDevTools()
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
