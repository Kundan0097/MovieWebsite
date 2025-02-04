import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS
import { useNavigate} from 'react-router-dom';


function Genres(props) {

  const [selectedGenre, setSelectedGenre] = useState("");

  const navigate = useNavigate();

  const handleGenreSelect = (name,id)=>{
    setSelectedGenre(name);
    console.log(selectedGenre)
    navigate(`/movies/genre/${id}`)

  }

 

  const genreList = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

  return (
    <>
      <div className="dropdown">
        <button className="dropdown-toggle genre-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">

          {selectedGenre ? selectedGenre : "Genres"}
        </button>
        <ul className="dropdown-menu d-menu-section" >

          {
            genreList.map((genre) => {
              const { name, id } = genre
              return <li key={id}><a className="dropdown-item" href="#"
                  onClick={(e) => {e.preventDefault();
                  handleGenreSelect(name,id)
                  }}>
                  {name}</a></li>
      

            })

          }

        </ul>
      </div>
    </>
  )
}
export default Genres