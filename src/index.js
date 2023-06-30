import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { FronteggProvider } from '@frontegg/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const contextOptions = {
  baseUrl: 'https://app-hhbz1ni2czfl.frontegg.com',
  clientId: '03a92a04-3f6b-44d6-95fd-64b03c09de54'
};

const authOptions = {
  // keepSessionAlive: true // Uncomment this in order to maintain the session alive
 };

function loader(){
  let loader=document.getElementsByClassName('loader');
    loader[0].addEventListener('DOMContentLoaded',() => {
        loader.style.display="none";
    });
}

const queryClient=new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FronteggProvider contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
      <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </FronteggProvider>
  </React.StrictMode>
);
