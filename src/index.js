import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {Globalstyle} from './styles/reset'
import {ThemeProvider} from 'styled-components'
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css';
import {ApolloProvider} from "react-apollo";
import {InMemoryCache, HttpLink, ApolloClient} from "apollo-boost";
import {resolvers, typeDefs} from './resolvers/resolvers';
import {BrowserRouter,Switch,Link} from 'react-router-dom'
const cache = new InMemoryCache();
const link = new HttpLink( {
  uri: 'http://localhost:4000/'
} );

const client = new ApolloClient( {
  cache,
  link,
  resolvers,
  typeDefs
} );
const theme = {
  bgColor: '#f1f1f1'
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App/>
        <Globalstyle/>
      </ApolloProvider>
    </BrowserRouter>
  </ThemeProvider>
  , document.getElementById( 'root' ) );

serviceWorker.unregister();
