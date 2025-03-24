import React, { useEffect, useState } from "react";
import "../../Styles/Ipl.css";

const Ipl = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetTicketInfo = async () => {
    try {
      const response = await fetch("https://shop999backend.vercel.app/api/auth/getticketsinfo");
      const result = await response.json();

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

  useEffect(() => {
    GetTicketInfo();
  }, []);

  return (
    <div className="container">
      <h1 className="title">IPL Tickets</h1>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <div className="ticket-container"> {/* Scrollable row */}
          {data.map((ticket) => (
            <div className="ticket-card" key={ticket._id}>
              <img src={ticket.TeamImage} alt={ticket.matchTeam1} className="team-img"/>
              <h2>{ticket.matchName}</h2>
              <p>{ticket.matchTeam1} vs {ticket.matchTeam2}</p>
              <p>Date: {ticket.matchDate}</p>
              <p>Time: {ticket.matchTime}</p>
              <p className="price">Price: ₹{ticket.matchTicketPrice}</p>
              <button className="buy-btn">Book Now</button>
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
