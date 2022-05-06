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

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/https://74b1d70e-e23b-4a68-98f9-4eca94bef9e0-europe-west1.apps.astra.datastax.com/api/graphql/netflix",
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
