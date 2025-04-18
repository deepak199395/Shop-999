import React, { useEffect, useState } from 'react'
import "../../Styles/Ipl.css";
import { getLiveShowData } from '../../Api/RestApi';

const Liveshow = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getLiveshowInfo = async () => {
        try {
            const result = await getLiveShowData();
            console.log("Liveshow===================>",result);
            
            if (result.success && Array.isArray(result.getLiveshow)) {
                setData(result.getLiveshow);
            } else {
                console.log("==================>Invalid Liveshow data received");
                setData([]);
            }
            setLoading(false);

        } catch (error) {
            console.log("Error fetching movie info:", error);
            setData([]);
            setLoading(false);
        }
    }

    useEffect(() => {
        getLiveshowInfo();
    }, []);

    return (
        <div className='container'>
            <h1 className='title'>Show Tickets</h1>
            {
                loading ? (
                    <p>Loading...</p>
                ) : data.length > 0 ? (
                    <div className='ticket-container'>
                        {data.map((ticket) => (
                            <div className='ticket-card' key={ticket._id}>
                                <div className='image-wrapper'>
                                <img src={ticket.showImage} alt={ticket.showImage} className='team-img' /></div>
                                <h2 className='showname'>{ticket.showName}</h2>
                                <p className='description'>{ticket.showDescription}</p>
                                <h4>{ticket.SingerName}</h4>
                                <h3>Rating: {ticket.MovieRating}</h3>
                                <h4>{ticket.MovieLanguage}</h4>
                                <p>{ticket.showDuration}</p>
                                <p>{ticket.showStatus}</p>
                                <p>{ticket.showRating}</p>
                                <p>{ticket.showReviews}</p>
                                <h3>Movie Release Date: {ticket.showDate}</h3>
                                <button className="buy-btn" >Book Now</button>

                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No tickets available</p>
                )
            }
        </div>
    )
}

export default Liveshow;
