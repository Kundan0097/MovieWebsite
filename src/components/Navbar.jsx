import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import Genres from '../pages/Genres';
import { useState } from 'react';


function Navbar(props) {

  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // setSearchQuery(searchQuery)
      navigate(`/search?query=${searchQuery}`); // Navigating to movies page with search query
    }
  }


  return (
    <>
      <div className="container-fluid nav-section">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-2 col-md-2 col-sm-12 col-12 logo-section">
              <div className="logo">
                <h2> <Link to="/">MoviesMax</Link></h2>
              </div>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-12 col-12 nav-link-section">
              <ul className="movies-link">

                <li>
                  <Link to="/">Movies</Link>
                </li>
                <li>
                  <Link to="/tv-shows">TV Shows</Link>
                </li>
                <li>
                  <Genres />
                </li>
              
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-12 search-menu">
              <div className="search">
                <input type="text"
                  placeholder='Search Movies'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className='search-icon' onClick={handleSearch} />
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar