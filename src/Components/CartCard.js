import '../Styles/CartCard.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import { useState } from 'react';


export default function CartCard({name}){
    const [count,setCount]=useState(localStorage.getItem(name));
    
    function increase(){
        localStorage.setItem(name,Number(localStorage.getItem(name))+1);
        setCount(localStorage.getItem(name));
    }
    
    function decrease(){
        if(localStorage.getItem(name)>0) {
        localStorage.setItem(name,Number(localStorage.getItem(name))-1);
        setCount(localStorage.getItem(name));}
    }

    return <>
        <div className='cartItem'>
            <div className='cardTitle'>
            <h3>{name}</h3>
            </div>
            <div className='qty'>
                <h3>Qty:</h3>
                <div className='qty-control'>
                <IconButton aria-label="Add" color="primary" onClick={increase}>
                    <AddIcon />
                </IconButton>
                {count}
                <IconButton aria-label="Remove" color="primary" onClick={decrease}>
                    <RemoveIcon />
                </IconButton>
                </div>
            </div>
        </div>
    </>
}