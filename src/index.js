import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";

//STORE -> Globalized State
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//ACTION ->something done

//REDUCER -> decide outcome of state based on action

//DISPATCH -> update the store

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
