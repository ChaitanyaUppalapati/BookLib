import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import '../Styles/Login.css'
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./Firebase";

export default function Register({signedUser,setUser}){

    const navigate=useNavigate();
    const authenticate=getAuth();
    const user=authenticate.currentUser;
    let [email,setEmail] =useState();
    let [password,setPassword] =useState();
    let [errorMessage,setErrorMessage] = useState();

    const login = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            setUser(user);
            navigate('/BookLib/login')            
        }catch(e){
            if(e.message==="Firebase: Error (auth/email-already-in-use).") setErrorMessage("User already exists!!");
        }
    }

    const googleSignin = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
            setUser(user);
            navigate('/BookLib/');
        }catch(e){
            if(e.message==="Firebase: Error (auth/email-already-in-use).") setErrorMessage("User already exists!!");
        }
    }

    function toLogin(){
        navigate('/BookLib/login' );
    }

    console.log(user);
    return (
        <div className="container">
            <div className="card">
                <h3>Register</h3>
                <Input type="email" placeholder="Email..." onChange={(e)=>setEmail(e.target.value)}/>
                <Input type="password" placeholder="Password..." onChange={(e)=>setPassword(e.target.value)}/>
                <div className="error">{errorMessage}</div>
                <div className="buttons">
                <Button variant="contained" onClick={login}>Register</Button>
                <Button variant="contained" onClick={toLogin}>Login instead</Button>
                </div>
                <span className="card-span"></span>
                <Button variant="outlined" onClick={googleSignin}><GoogleIcon/> <p>Sign In with Google</p></Button>
            </div>
        </div>
    )
}