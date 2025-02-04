
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'
// import Player from './components/Player'
import Details from './Cards/Details'


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path='/' element={<Movies/>}/>
      <Route path='/tv-shows' element={<TvShows/>}/>
      <Route path="/movies/genre/:id" element={<Movies />} />
      <Route path="/search" element={<Movies/>} />
      {/* <Route path='/player/:playerId' element={<Player/>}/> */}
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
