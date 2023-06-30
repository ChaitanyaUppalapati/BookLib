import BooksCard from "./BooksCard"
import '../Styles/BooksGrid.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient=new QueryClient();

export default function BooksGrid({query}) {
    return (
        <QueryClientProvider client={queryClient}>
            <div id="booksView">
            <h2>Results</h2>
            <div id="grid">
            {query.map((result,id)=>{
                let name=null,thumbnail=null;
                if(result && result.volumeInfo && result.volumeInfo.title)
                    name=result.volumeInfo.title;
                if(result && result.volumeInfo && result.volumeInfo.imageLinks && result.volumeInfo.imageLinks.smallThumbnail)
                    thumbnail=result.volumeInfo.imageLinks.smallThumbnail;
                return <BooksCard key={id} name={name} thumbnail={thumbnail} />
            })}
            </div>
        </div>
        </QueryClientProvider>
    )
}