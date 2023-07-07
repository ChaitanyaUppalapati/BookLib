import NavBar from "./NavBar";
import Searchbar from "./Searchbar";
import BooksGrid from "./BooksGrid";
import '../Styles/Library.css'
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const queryClient=new QueryClient()

export default function Library({signedUser}){

    const navigate=useNavigate();
    const auth = getAuth();
    const user= auth.currentUser;
    console.log(signedUser);
    
    const [query,setQuery]=useState(null);
    onAuthStateChanged(auth, (user)=>{
        if(!user){
            navigate('/register')
        }
    })
    return (
        <QueryClientProvider client={queryClient}>
            <div id="library">
            <Searchbar setQuery={setQuery} />
            {query && <BooksGrid query={query} />}
        </div>
        </QueryClientProvider>)

    
}