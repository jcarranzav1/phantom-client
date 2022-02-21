import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apollo/apolloClient';
import { StoreProvider } from './store/authStore';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './store/cart/cartStore';

// const client = useClient();

ReactDOM.render(
  <StoreProvider>
    <CartProvider>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </ApolloProvider>
    </CartProvider>
  </StoreProvider>,

  document.getElementById('root'),
);
