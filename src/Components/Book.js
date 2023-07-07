import '../Styles/Book.css'
import { useParams } from "react-router-dom"
import NavBar from "./NavBar";
import Loader from "./Loader"
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
    useQuery,
    useQueryClient,
  } from '@tanstack/react-query'
import { useState } from 'react';

export default function Book({}){
    const {name}=useParams();
    const [copies,setCopies]=useState(localStorage.getItem(name))

    const queryClient=useQueryClient();

    function addToCart(){
        if(localStorage.getItem(name)==null){
            localStorage.setItem(name,0);
        }
        else localStorage.setItem(name,Number(localStorage.getItem(name))+1)
        setCopies(localStorage.getItem(name));
    }

    const fetchBooks=()=>{
        return fetch("https://www.googleapis.com/books/v1/volumes?q="+{name})
         .then((response)=>response.json())
         .then((json)=>{
            const result=json.items.filter((book)=>
                name && book && book.volumeInfo && book.volumeInfo.title && book.volumeInfo.title.toLowerCase().includes(name.toLowerCase())
            );
            return result;
         });
    }

    const { isLoading, isError, isSuccess, data, error }=useQuery({queryKey:['data'],queryFn:fetchBooks})

    if(isLoading) return <Loader />

    if(isError) return <span>Error: {error.message}</span>

    console.log(data)
    
    if(isSuccess){
        const image=data[0]?.volumeInfo?.imageLinks?.thumbnail;
    const authors=data[0]?.volumeInfo?.authors;
    const publishedDate=data[0]?.volumeInfo?.publishedDate;
    const description=data[0]?.volumeInfo?.description;
    let authorElement="";
    authors.forEach(author => {
        if(authorElement===""){
            authorElement+=author;
        }
        else{
            authorElement+=", "+author;
        }
    });

    return <>
        <div className="bookContainer">
            <div className="imageContainer">
                <img src={image} alt={name} />
            </div>
            <div className="contentContainer">
                <div className="info">
                    <div className="title">
                        <h2>{name}</h2>
                        <div className="spans"><span className="authors">{authorElement}</span>
                        <br />
                        <span className="date">{publishedDate}</span></div>
                    </div>
                </div>
                <div className="description">{description}</div>
                <div className="addToCart">
                <Button variant="contained" onClick={addToCart}>Add to cart<ShoppingCartOutlinedIcon /></Button>
                {copies<100?<p>Available copies : {100-copies}</p>:<p>Out of stock</p>}
                </div>
            </div>
        </div>
    </>
    }
}