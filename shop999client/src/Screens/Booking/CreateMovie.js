import React, { useState } from 'react';
import "../Booking/CreayeMovie.css";

const CreateMovie = () => {
  const [formdata, setformdata] = useState({
    movieId: "",
    MovieName: "",
    MovieDescription: "",
    MovieImage: "",
    MovieRating: "",
    MovieGenre:"",
    MovieReleaseDate: "",
    MovieLanguage: "",

  });

  const HandleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://shop999backend.vercel.app/api/auth/createMovie/Api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formdata)
      });

      const result = await response.json(); 

      if (response.ok) {
        alert("Movie Created Successfully");
        console.log(result);
        if (response.status === 201) {
          window.location.href = "/";
        }
        setformdata({
          movieId: "",
          MovieName: "",
          MovieDescription: "",
          MovieImage: "",
          MovieGenre:"",
          MovieRating: "",
          MovieReleaseDate: "",
          MovieLanguage: "",
        });
      } else {
        alert("Movie Creation Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h2>Create Live Show Ticket</h2>
      <form onSubmit={HandleSubmit}>
        <input onChange={HandleChange} name='movieId' value={formdata.movieId} type='text' placeholder="Movie Name" />
        <input onChange={HandleChange} name='MovieName' value={formdata.MovieName} type='text' placeholder="Movie Name" />
        <input onChange={HandleChange} name='MovieDescription' value={formdata.MovieDescription} type='text' placeholder="Movie Description" />
        <input onChange={HandleChange} name='MovieImage' value={formdata.MovieImage} type='text' placeholder="Movie Image URL" />
        <input onChange={HandleChange} name='MovieRating' value={formdata.MovieRating} type='number' placeholder="Movie Rating" />
        <input onChange={HandleChange} name='MovieReleaseDate' value={formdata.MovieReleaseDate} type='date' placeholder="Release Date" />
        <input onChange={HandleChange} name='MovieGenre' value={formdata.MovieGenre} type='text' placeholder="Genre" />
        <input onChange={HandleChange} name='MovieLanguage' value={formdata.MovieLanguage} type='text' placeholder="Language" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateMovie;
