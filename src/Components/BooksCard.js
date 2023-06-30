import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const queryClient=new QueryClient();

export default function BooksCard({name,thumbnail}){
    const to="/book/"+name;
    return(
        <QueryClientProvider client={queryClient}>
            <Link to={to} ><div id="card" style={{height: "350px",
        maxWidth: "250px",
        backgroundImage: `url(${thumbnail}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        boxShadow: "0px 0px 5px #000"}}>

        </div> </Link>
        </QueryClientProvider>
    )
}