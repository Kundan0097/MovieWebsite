import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function MovieCard({ title, index, poster_path, name, id, overview, popularity, release_date, vote_average,first_air_date}) {

  // console.log(id);
  const navigate = useNavigate();
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 col-12 main-m-card " key={index}>
        <div className="movie-card-section" >
          <div className="movie-image">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" className='img-fluid rounded' />
          </div>
        </div>
        <div className="watch-btn">
          <div className="title-movie">
            <h5 className='text-white'> {title ? title : name} </h5>
          </div>
          {/* <button className='play-btn' onClick={() => navigate(`/player/${id}`)}>Play</button> */}
     
          <Link
            to={`/details/${id}`}
            state={{ title, index, poster_path, name, id, overview, popularity, release_date, vote_average,first_air_date }}
            className='detail-btn-new'
          >
            Details
          </Link>
        </div>
      </div>
    </>
  )
}
export default MovieCard
