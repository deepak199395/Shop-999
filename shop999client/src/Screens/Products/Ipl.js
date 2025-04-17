import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Ipl.css";
import { GetIplTicketInfo } from "../../Api/RestApi";
const Ipl = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const GetTicketInfo = async () => {
    try {
      const result = await GetIplTicketInfo()
     console.log(result);
     
      if (result.success && Array.isArray(result.ticketsinfo)) {
        setData(result.ticketsinfo);
      } else {
        console.log("Invalid ticket data received");
        setData([]);
      }

      setLoading(false);
    } catch (error) {
      console.log("Error fetching ticket info:", error);
      setData([]);
      setLoading(false);
    }
  };

const handleOpenBooking=async(ticket)=>{
  navigate("/bookingScreen",{state:{ticket}})
}

  useEffect(() => {
    GetTicketInfo();
  }, []);
  

  return (
    <div className="container">
      <h1 className="title">IPL Tickets</h1>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <div className="ticket-container"> 
          {data.map((ticket) => (
            <div className="ticket-card" key={ticket._id}>
              <img src={ticket.TeamImage} alt={ticket.matchTeam1} className="team-img"/>
              <h2>{ticket.matchName}</h2>
              <p>{ticket.matchTeam1} vs {ticket.matchTeam2}</p>
              <p>Date: {ticket.matchDate}</p>
              <p>Time: {ticket.matchTime}</p>
              <p className="price">Price: ₹{ticket.matchTicketPrice}</p>
              <button className="buy-btn" onClick={() => handleOpenBooking(ticket)}>Book Now</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No tickets available.</p>
      )}
    </div>
  );
};

export default Ipl;
