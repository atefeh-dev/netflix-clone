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
import { HttpLink } from "@apollo/client";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

console.log(process.env.REACT_APP_ASTRA_GRAPHQL_ENDPOINT);
const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_ASTRA_GRAPHQL_ENDPOINT,
    headers: {
      "x-cassandra-token": process.env.REACT_APP_ASTRA_DB_APPLICATION_TOKEN,
    },
  }),
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
