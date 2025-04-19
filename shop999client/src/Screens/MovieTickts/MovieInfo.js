import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "../../Styles/Ipl.css"
import SeatSelection from './SeatSelection'
const MovieInfo = () => {
    const {state:movie}=useLocation()
    const navigate=useNavigate()

    if(!movie){
        return(
            <div className='container'>
            <h2>No movie info found</h2>
            <button onClick={() => navigate('/')}>Back to Tickets</button>
          </div>
        )
    }
  return (
    <div className='Maincontainer'>
    <div className='container'>
    <h1 className='title'>Booking Details</h1>
    <div className='ticket-card'>
      <div className='image-wrapper'>
        <img src={movie.MovieImage} alt={movie.MovieName} className='team-img' />
      </div>
      <h2>{movie.MovieName}</h2>
      <p className='description'>{movie.MovieDescription}</p>
      <h4>{movie.MovieGenre}</h4>
      <h3>Rating: {movie.MovieRating}</h3>
      <h4>{movie.MovieLanguage}</h4>
      <h3>Release Date: {movie.MovieReleaseDate}</h3>
      {/* You can add a form here to collect user info, seat selection, etc */}
      <button className="buy-btn" onClick={() => alert("Ticket booked!")}>
        Confirm Booking
      </button>
    </div>
  </div>
  <SeatSelection/>
  </div>
  )
}

export default MovieInfo
