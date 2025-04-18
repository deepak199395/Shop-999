import React, { useEffect, useState } from 'react'
import "../../Styles/Ipl.css";
import { getLiveShowData } from '../../Api/RestApi';

const Liveshow = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedCard, setExpandedCard] = useState(null);

    const getLiveshowInfo = async () => {
        try {
            const result = await getLiveShowData();
            console.log(result);

            if (result.success && Array.isArray(result.getLiveshow)) {
                setData(result.getLiveshow);
            } else {
                console.log("Invalid Liveshow data received");
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

    const toggleExpand = (id) => {
        setExpandedCard(prev => prev === id ? null : id)
    };
    return (
        <div className='container'>
            <h1 className='title'>Show Tickets</h1>
            {
                loading ? (
                    <p>Loading...</p>
                ) : data.length > 0 ? (
                    <div className='ticket-container'>
                        {data.map((ticket) => {
                            const isExpanded = expandedCard === ticket._id;
                            return (
                                <div className='ticket-card' key={ticket._id}>
                                    <div className='image-wrapper'>
                                        <img src={ticket.showImage} alt={ticket.showImage} className='team-img' /></div>
                                    <h2 className='showname'>{ticket.showName}</h2>
                                    <p className='description'>{ticket.showDescription}</p>
                                    <h4>{ticket.SingerName}</h4>
                                    {
                                        isExpanded && (
                                            <>
                                                <h3>Rating: {ticket.MovieRating}</h3>
                                                <h4>{ticket.MovieLanguage}</h4>
                                                <p>{ticket.showDuration}</p>
                                                <p>{ticket.showStatus}</p>
                                                <p>{ticket.showRating}</p>
                                                <p>{ticket.showReviews}</p>
                                                <h3>Movie Release Date: {ticket.showDate}</h3>
                                            </>
                                        )}

                                    <button  onClick={() => toggleExpand(ticket._id)}>
                                        {isExpanded ? "See Less......." : "See More........"}
                                    </button>
                                    <button className="buy-btn" >Book Now</button>

                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>No tickets available</p>
                )
            }
        </div>
    )
}

export default Liveshow;
