import '../Styles/Cart.css';
import NavBar from "./NavBar";
import CartCard from "./CartCard";

export default function Cart({profilePic, userName, logout}){
    let keys=[]
    for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i)!=="HOSTED_LOGIN_VERIFIER_KEY" && localStorage.getItem(localStorage.key(i))>0)
        keys=[...keys,localStorage.key(i)];
    }
    return <>
    <NavBar logout={logout} userName={userName} profilePic={profilePic} />
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
}