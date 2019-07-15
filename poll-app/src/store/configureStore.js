import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import penderMiddleware from "redux-pender";

const configureStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, penderMiddleware()),
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default configureStore;
