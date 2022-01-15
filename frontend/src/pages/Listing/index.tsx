import Pagination from 'components/Pagination';
import MovieCard from 'components/MovieCard';
import './styles.css';
import axios from 'axios';
import {BASE_URL} from 'utils/requests';
import {useState, useEffect} from 'react';
import {MoviePage} from 'types/movies';

function Listing() {

    const[pageNumber,setPageNumber] = useState(0);

    useEffect(() =>{
        axios.get(`${BASE_URL}/movies`).then(response => {
            const data = response.data as MoviePage;
            setPageNumber(data.number)
        });
    },[]);


    

    return (
        <>
        <p>{pageNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>


                </div>
            </div>
        </>
    );
}

export default Listing;