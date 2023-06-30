import {useState, useEffect} from 'react';
import './App.css';
import Library from './Components/Library';
import Cart from './Components/Cart';
import Book from './Components/Book';
import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";
import { Route, Routes } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
  
const queryClient = new QueryClient()

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if (!isAuthenticated) {
  loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);


  function logout() {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=http://localhost:3000`;
  };

  
  
  return <QueryClientProvider client={queryClient}>
    <Routes>
    <Route path="/" element={<Library profilePic={user?.profilePictureUrl} userName={user?.name} logout={logout} />
} />
    <Route path="/cart" element={<Cart profilePic={user?.profilePictureUrl} userName={user?.name} logout={logout} />} />
    <Route path="/book/:name" element={<Book profilePic={user?.profilePictureUrl} userName={user?.name} logout={logout} />} />
  </Routes>
  </QueryClientProvider>
}

export default App;

