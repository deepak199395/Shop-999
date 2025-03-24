import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import "../../Styles/BookingScreen.css";
import { useLocation } from "react-router-dom";

const BookingScreen = () => {
    const location = useLocation();
    const ticket = location.state?.ticket;

    return (
        <div>
            <Header />
            <div className="BookingScreenMain">
                {/* Booking Details Section */}
                <div className="BookingDetails">
                    <h1>Booking Screen</h1>
                    {ticket ? (
                        <>
                            <img
                                src={ticket.TeamImage}
                                alt={ticket.matchName}
                                className="team-img"
                            />


                        </>
                    ) : (
                        <p>No ticket selected.</p>
                    )}

                    {/* Booking Form */}
                    <form className="BookingForm">
                        <label>Full Name:</label>
                        <input type="text" name="name" required />
                        <br />
                        <label>Phone Number:</label>
                        <input type="number" name="phone" required />
                        <br />
                        <label>Address:</label>
                        <input type="text" name="address" required />
                        <br />
                        <label>Number of Tickets:</label>
                        <input type="number" name="tickets" required />
                        <br />
                        <button className="buy-btn" >Summit Details</button>
                        </form>
                </div>

                {/* Payment Details Section */}
                <div className="Matchfullinfo">
                    <h1>Match  Details</h1>
                    {
                        <>
                            <h2 className="matchinfotxt">{ticket.matchName}</h2>
                            <p className="matchinfotxt">
                                {ticket.matchTeam1} vs {ticket.matchTeam2}
                            </p>
                            <p className="matchinfotxt">Date: {ticket.matchDate}</p>
                            <p className="matchinfotxt">Time: {ticket.matchTime}</p>
                            <p className="matchinfotxt">Price: ₹{ticket.matchTicketPrice}</p>
                        </>


                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookingScreen;
