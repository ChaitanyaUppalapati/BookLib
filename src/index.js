import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';


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
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
      </BrowserRouter>
  </React.StrictMode>
);
