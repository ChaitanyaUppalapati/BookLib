import { Link } from 'react-router-dom';
import '../Styles/ResultsList.css';

export default function ResultsList({results}){
    return(
        <div className="resultsList">
            {results.map((result,id)=>{
                const title=result.volumeInfo.title;
                const to="/book/"+title;
                return <Link to={to} style={{listStyleType:"none", textDecoration:"none", color:"#000", overflow:"hidden"}} ><div className="resultsField" key={id} >{result.volumeInfo.title}</div></Link>
            })}
        </div>
    )
}