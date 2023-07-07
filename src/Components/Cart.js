import '../Styles/Cart.css';
import NavBar from "./NavBar";
import CartCard from "./CartCard";
import { getAuth } from 'firebase/auth';
import Login from './Login';

export default function Cart({signedUser}){
    const auth = getAuth();
    const user= auth.currentUser;

    let keys=[]
    for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i)!=="HOSTED_LOGIN_VERIFIER_KEY" && localStorage.getItem(localStorage.key(i))>0)
        keys=[...keys,localStorage.key(i)];
    }
    return {signedUser} ? (
        <>
    <div className="cartContainer">
        <div className="cartTitle">
            <h1>Cart total({keys.length})</h1>
        </div>
        <div className="cartCards">
        {keys.map((result,id)=>{
            return <CartCard key={id} name={result} />
        })} 
        </div>     
    </div>
    </>
    ): <Login />
}