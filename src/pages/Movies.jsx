import { React, useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import MovieCard from '../Cards/MovieCard'
import { useParams, useLocation } from 'react-router-dom';


function Movies(props) {



  const [moviesList, setMoviesList] = useState([])
  const { id } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const searchQuery = queryParams.get("query"); // Get search query from URL
  // console.log("Search Query: ", searchQuery);


  const API_KEY = "57c00a158c3ba2fc22d60b440802d580"
  const token = import.meta.env.VITE_TMDB_TOKEN
  // console.log(token)

  useEffect(() => {
    let API_BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

    if (searchQuery) {
      API_BASE_URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchQuery}`
      // console.log("Search URL: ", API_BASE_URL);
    } else if (id) {
      API_BASE_URL += `&with_genres=${id}`; // If `id` exists, filter movies by genre
    }

    // console.log("Requesting API with URL: ", API_BASE_URL);

    axios.get(API_BASE_URL, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        const data = response.data.results;
        setMoviesList(data);
        // console.log(data);           
      })
      .catch(error => console.error(error));
  }, [searchQuery, id])


  return (
    <>
      <div className="container-fluid movies-main">
        <div className="container">
          <h1 className='pt-4 pb-4 text-center'>Movies</h1>
          <div className="row">

            {
              moviesList.map((movie, index) => {
                const { title, poster_path, id, name, overview, popularity, release_date, vote_average } = movie
                return <MovieCard
                  key={index}
                  title={title}
                  poster_path={poster_path}
                  id={id}
                  name={name}
                  overview={overview}
                  popularity={popularity}
                  release_date={release_date}
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
export default Movies