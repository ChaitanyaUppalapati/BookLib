import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import '../Styles/Login.css'
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./Firebase";

export default function Login({signedUser,setUser}){

    const navigate=useNavigate();
    const authenticate=getAuth();
    const user=authenticate.currentUser;
    let [email,setEmail] =useState();
    let [password,setPassword] =useState();
    let [errorMessage,setErrorMessage] = useState();

    const login = async () => {
        try{
            await signInWithEmailAndPassword(auth,email,password)
            setUser(user);
            navigate('/BookLib/')
        }catch(e){
            setErrorMessage("Please check your credentials");
        }
    }

    const googleSignin = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
            setUser(user);
            navigate('/BookLib/');
        }catch(e){
            setErrorMessage("Please check your credentials");
        }
    }

    
    console.log(user);
    return (
        <div className="container">
            <div className="card">
                <h3>Login</h3>
                <Input type="email" placeholder="Email..." onChange={(e)=>setEmail(e.target.value)}/>
                <Input type="password" placeholder="Password..." onChange={(e)=>setPassword(e.target.value)}/>
                <div className="error">{errorMessage}</div>
                <div className="buttons">
                <Button variant="contained" onClick={login}>Login</Button>
                <Button variant="contained" onClick={()=>navigate('/BookLib/register')}>Register</Button>
                </div>
                <span className="card-span"></span>
                <Button variant="outlined" onClick={googleSignin}><GoogleIcon/> <p>Sign In with Google</p></Button>
            </div>
        </div>
    )
}