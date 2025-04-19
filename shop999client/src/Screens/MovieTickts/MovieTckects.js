import React, { useEffect, useState } from 'react';
import "../../Styles/Ipl.css";
import { getMovieApi } from '../../Api/RestApi';
import { useNavigate } from 'react-router-dom';

const MovieTickets = () => {
  const [data, setData] = useState([]);  
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate()

  const getMovieInfo = async () => {
    try {
      const result = await getMovieApi()
      console.log(result);

      if (result.status && Array.isArray(result.getMovie)) {
        setData(result.getMovie);
      } else {
        console.log("Invalid movie data received");
        setData([]);
      }

      setLoading(false);
    } catch (error) {
      console.log("Error fetching movie info:", error);
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieInfo();
  }, []);


  const handleBookNow=(movie)=>{
    navigation("/Movie-Info",{state:movie})
  }
  return (
    <div className='container'>
      <h1 className='title'>Movie Tickets</h1>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <div className='ticket-container'>
          {data.map((ticket) => (
            <div className='ticket-card' key={ticket._id}>
              <div className='image-wrapper'>
              <img src={ticket.MovieImage} alt={ticket.MovieName} className='team-img' />
            </div>
              <h2>{ticket.MovieName}</h2>
              <p className='description'>{ticket.MovieDescription}</p>
              <h4>{ticket.MovieGenre}</h4>
              <h3>Rating: {ticket.MovieRating}</h3>
              <h4>{ticket.MovieLanguage}</h4>
              <h3>Movie Release Date: {ticket.MovieReleaseDate}</h3>
              <button className="buy-btn" onClick={()=>handleBookNow(ticket)} >Book Now</button>

            </div>
          ))}
        </div>
      ) : (
        <p>No tickets available</p>
      )}
    </div>
  );
};

export default MovieTickets;
