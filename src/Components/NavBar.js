import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import '../Styles/Navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';



export default function NavBar({logout, userName, profilePic}){
    return(
        <div id="navbar">
            <div id="left">
                <Link to="/" style={{listStyleType:"none",textDecoration:"none"}} ><h2><span id="book">Book</span><span id="lib">Lib</span></h2></Link>
            </div>
            <div id="right">
            <Tooltip title="Cart" arrow>
                <Link to="/cart"><ShoppingCartOutlinedIcon style={{color:"#323AED"}} /></Link>
            </Tooltip>

            <Tooltip title="Logout" arrow>
                <Button><LogoutIcon onClick={logout} style={{color:"#323AED"}} /></Button>
            </Tooltip>
            
            <Tooltip title={userName} arrow>
                <Avatar className="avatar" src={profilePic} />
            </Tooltip>
            </div>
        </div>
    )
}