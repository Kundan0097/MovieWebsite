import {React,useEffect} from 'react'
import axios from 'axios'
import { useState } from 'react'
import MovieCard from '../Cards/MovieCard'

function TvShows(props) {

  const [moviesList,setMoviesList] = useState([])
  const API_KEY = "57c00a158c3ba2fc22d60b440802d580"
  const API_BASE_URL = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`
  const token = import.meta.env.VITE_TMDB_TOKEN
    // console.log(token)
  
  
      useEffect(()=>{
        axios.get(API_BASE_URL, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        })
          .then((response)=>{
            const data = response.data.results;
            setMoviesList(data);
            // console.log(data);
            
          })
          .catch(error => console.error(error));
        
  
      },[])
  

  return(
    <>
    <div className="container-fluid movies-main">
      <h1 className='pt-4 pb-4 text-center'>Tv Shows</h1>
      <div className="container">
        <div className="row">
          {
            moviesList.map((movie,index)=>{
              
              const {name,poster_path, id,overview,popularity,first_air_date,vote_average} = movie
              
              return <MovieCard 
                        key={index}
                        name={name}
                        poster_path={poster_path}
                        id={id}
                        // original_name={original_name}
                        overview={overview}
                        popularity={popularity}
                        first_air_date={first_air_date}
                        vote_average={vote_average}
                     />
                  })
           }
        </div>
      </div>
    </div>
      
    </>
  )
}
export default TvShows