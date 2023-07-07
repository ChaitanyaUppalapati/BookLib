import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import '../Styles/Navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';


export default function NavBar(){

    const auth = getAuth();
    let [userSet,setUserSet]=useState(false);
    let [photoURL,setPhotoURL]=useState(null);

    onAuthStateChanged(auth, (user)=>{
        if(user){
            setUserSet(true);
            setPhotoURL(user.photoURL);
        }
        else{
            setUserSet(false);
            setPhotoURL(null);
        }
    })
    
    const navigate=useNavigate();
    const logout=async ()=>{
        try{
            await signOut(auth);
            setUserSet(false);
            navigate('/login')
        } catch(err){
            console.log(err);
        }
    }

    let element;
    if(userSet){
        element=<>
        <Tooltip title="Cart" arrow>
        <Link to="/cart"><Button><ShoppingCartOutlinedIcon style={{color:"#323AED"}} /></Button></Link>
    </Tooltip>

    <Tooltip title="Logout" arrow>
        <Button onClick={logout}><LogoutIcon style={{color:"#323AED"}} /></Button>
    </Tooltip>
    
    <Tooltip title={""} arrow>
        <Avatar className="avatar" src={photoURL} />
    </Tooltip>
    </>
    }
    else{
        element="";
    }
    
    return(
            <div id="navbar">
            <div id="left">
                <Link to="/" style={{listStyleType:"none",textDecoration:"none"}} ><h2><span id="book">Book</span><span id="lib">Lib</span></h2></Link>
            </div>
            <div id="right">
            {{userSet} && element}
            </div>
        </div>
    )
}