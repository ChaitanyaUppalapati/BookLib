import SearchIcon from '@mui/icons-material/Search';
import '../Styles/SearchBar.css';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import ResultsList from './ResultsList';

export default function Searchbar({setQuery}){
    const [results,setResults]=useState([]);
    const [input,setInput]=useState("");

    const fetchData=(value)=>{
         fetch("https://www.googleapis.com/books/v1/volumes?q="+{value})
         .then((response)=>response.json())
         .then((json)=>{
            const result=json.items.filter((book)=>
                value && book && book.volumeInfo && book.volumeInfo.title && book.volumeInfo.title.toLowerCase().includes(value.toLowerCase())
            );
            setResults(result);
         });
    }

    const handleSearch=(value)=>{
        setInput(value);
        fetchData(value);
    }

    function matchAuthors(authors,value){
        let flag=false;
        authors.forEach((author)=>{
            if(author.toLowerCase().includes(value.toLowerCase())) {
                flag=true;
                console.log(author);
            }
        })
        return flag;
    }

    function handleQuery(){
        let value=document.getElementById("searchInput").value;
        fetch("https://www.googleapis.com/books/v1/volumes?q="+{value})
         .then((response)=>response.json())
         .then((json)=>{
            const result=json.items.filter((book)=>
                (value && book && book.volumeInfo && book.volumeInfo.title && book.volumeInfo.title.toLowerCase().includes(value.toLowerCase())  && console.log(book.volumeInfo.title))
                || (value && book && book.volumeInfo && book.volumeInfo.authors && matchAuthors(book.volumeInfo.authors,value))
                || (value && book && book.volumeInfo && book.volumeInfo.publishedDate.toLowerCase().includes(value.toLowerCase())  && console.log(book.volumeInfo.publishedDate))
            );
            setQuery(result);
         });
    }

    return(
        <div id="search-container">
            <div id="search-card">
            <div id="searchBar">
                <input type="text" id="searchInput" placeholder='Type to search...' value={input} onChange={(e)=>handleSearch(e.target.value)}></input>
                <IconButton aria-label="search" sx={{color:"#323AED"}} onClick={handleQuery} >
                    <SearchIcon />
                </IconButton>
            </div>
            <div id="resultBox">
                <ResultsList results={results}  />
            </div>
            </div>
        </div>
    )
}