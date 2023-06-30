import NavBar from "./NavBar";
import Searchbar from "./Searchbar";
import BooksGrid from "./BooksGrid";
import '../Styles/Library.css'
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient=new QueryClient()

export default function Library({profilePic, userName, logout}){
    const [query,setQuery]=useState(null);
    return (
        <QueryClientProvider client={queryClient}>
            <div id="library">
            <NavBar logout={logout} userName={userName} profilePic={profilePic}/>
            <Searchbar setQuery={setQuery} logout={logout} userName={userName} profilePic={profilePic}/>
            {query && <BooksGrid query={query} logout={logout} userName={userName} profilePic={profilePic} />}
        </div>
        </QueryClientProvider>
    )
}