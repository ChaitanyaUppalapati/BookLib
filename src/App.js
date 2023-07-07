import './App.css';
import Library from './Components/Library';
import Cart from './Components/Cart';
import Book from './Components/Book';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import Register from './Components/Register';
import auth from './Components/Firebase';
import {getAuth} from 'firebase/auth';

import { Route, Routes } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import NavBar from './Components/NavBar';
import { useState } from 'react';
  
const queryClient = new QueryClient()

function App() {
  
  const authenticate=getAuth();
  const user=authenticate.currentUser;
  let [signedUser,setUser]=useState(null);

  return (
  <QueryClientProvider client={queryClient}>
      <NavBar signedUser={signedUser} setUser={setUser} />
    <Routes>
      <Route path="/" element={<Library signedUser={signedUser} />} />
      <Route path="/cart" element={<Cart signedUser={signedUser} />} />
      <Route path="/login" element={<Login signedUser={signedUser} setUser={setUser}/>} />
      <Route path="/register" element={<Register signedUser={signedUser} setUser={setUser} />} />
      <Route path="/book/:name" element={<Book signedUser={signedUser} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </QueryClientProvider>
  )
}

export default App;

