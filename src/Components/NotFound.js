import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
export default function NotFound(){
    return <>
        <div className='container' style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
            <h3>PAGE NOT FOUND...</h3>
            <Link to='/BookLib/' ><Button variant="outlined">HOME</Button></Link>
        </div>
    </>
}