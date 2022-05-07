/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./store/reducers";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const customFetch = (uri, options) => {
  return fetch(uri, {
    ...options,
    headers: {
      ...options.headers,
      "x-custom-header": process.env.ASTRA_DB_APPLICATION_TOKEN,
    },
  });
};

const fetchLink = createHttpLink({
  uri: process.env.ASTRA_GRAPHQL_ENDPOINT,
  fetch: customFetch,
});

const client = new ApolloClient({
  link: ApolloLink.from([fetchLink]),
  cache: new InMemoryCache(),
});

const Main = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>
);

ReactDOM.render(<Main />, document.querySelector("#root"));
