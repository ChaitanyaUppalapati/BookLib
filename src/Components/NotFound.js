import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
export default function NotFound(){
    return <>
        <div>
            <h3>PAGE NOT FOUND...</h3>
            <Button variant="outlined"><Link to='/BookLib' />HOME</Button>
        </div>
    </>
}