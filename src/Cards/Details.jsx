import React from 'react'
import { useLocation } from 'react-router-dom'
function Details({ title }) {
  const location = useLocation()
  const movie = location.state;
  if (!movie) return <p>No data Available</p>
  return (
    <>
      <div className="container-fluid details-main">
        <div className="container">
          <div className="row pt-lg-5 pb-5">
            <div className="col lg-6 col-md-6 col-sm-6 col-12 details-part1">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" className='image-details' />
            </div>
            <div className="col lg-6 col-md-6 col-sm-6 col-12 details-part2">
            <h1 className='pb-4'>Movies Details</h1>
            <h4>Title : {movie.title?movie.title:movie.name}</h4>
            <p><span style={{fontSize:"18px",fontWeight:"600"}}>Overview : </span>  {movie.overview}</p>
            <p><span style={{fontSize:"18px",fontWeight:"600"}}>Popularity : </span>  {movie.popularity}</p>
            <p><span style={{fontSize:"18px",fontWeight:"600"}}>Release-date : </span>  {movie.release_date?movie.release_date:movie.first_air_date}</p>
            <p><span style={{fontSize:"18px",fontWeight:"600"}}>Vote-average : </span>  {movie.vote_average}</p>
            </div>
     
          </div>
        </div>
      </div>
    </>
  )
}
export default Details