import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import bookingInfoReducer from "./reducers/bookingInfo";
import { Provider } from "react-redux"; //connects store to app

//STORE -> Globalized State
const store = createStore(
  bookingInfoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//ACTION ->something you want done

//REDUCER -> decide outcome of state based on action

//DISPATCH -> update the store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
