import React, { useState } from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import "../../Styles/BookingScreen.css";
import { useLocation } from "react-router-dom";
const BookingScreen = () => {
    const location = useLocation();
    const ticket = location.state?.ticket;
    const [loading, setLoading] = useState(false);  // ✅ Loading state
    const [formData, setFormData] = useState({
        fullname: "",
        PhoneNumber: "",
        Adress: "",
        NumberofTickets: ""
    });
    const [error, setError] = useState("");
    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
   // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true); 

      try {
            const response = await fetch("https://shop999backend.vercel.app/api/auth/Booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
           const result = await response.json();
           console.log("Response:", result); 

              if (response.ok) {
                alert("Booking successful! can we Proceed you on Payment Part");
                setFormData({
                    fullname: "",
                    phoneNumber: "",
                    address: "",
                    numberOfTickets: ""
                });
              if (response.status === 201) {
                    window.location.href = "/payment";
                }
            } else {
                setError(result.message || "Failed to book tickets");
            }
        } catch (error) {
            setError("Something went wrong. Please try again.");
            console.error("here is error================>:", error);
        }finally{
            setLoading(false);
        }
    };

    return (
        <div>
            <Header />
            <div className="BookingScreenMain">
                {/* Booking Details Section */}
                <div className="BookingDetails">
                    <h1>Booking Screen</h1>
                    {ticket ? (
                        <>
                            <img src={ticket.TeamImage} alt={ticket.matchName} className="team-img" />
                        </>
                    ) : (
                        <p>No ticket selected.</p>
                    )}

                    {/* Booking Form */}
                    <form className="BookingForm" onSubmit={handleSubmit}>
                        <label>Full Name:</label>
                        <input
                            type="text"
                            name="fullname"
                            required
                            onChange={handleChange}
                            value={formData.fullname}
                            disabled={loading} 
                        />
                        <br />
                        <label>Phone Number:</label>
                        <input
                            type="number"
                            name="PhoneNumber"
                            required
                            onChange={handleChange}
                            value={formData.PhoneNumber}
                            disabled={loading} 

                        />
                        <br />
                        <label>Address:</label>
                        <input
                            type="text"
                            name="Adress"
                            required
                            onChange={handleChange}
                            value={formData.Adress}
                            disabled={loading} 

                        />
                        <br />
                        <label>Number of Tickets:</label>
                        <input
                            type="number"
                            name="NumberofTickets"
                            required
                            onChange={handleChange}
                            value={formData.NumberofTickets || ""}
                            disabled={loading} 

                        />
                        <br />
                        {error && <p className="error">{error}</p>}
                        <button className="buy-btn">Submit Details</button>
                    </form>
                </div>

                {/* Match Details Section */}
                <div className="Matchfullinfo">
                    <h1>Match Details</h1>
                    {ticket && (
                        <>
                            <h4 className="matchinfotxt">{ticket.matchName}</h4>
                            <p className="matchinfotxt">
                                {ticket.matchTeam1} vs {ticket.matchTeam2}
                            </p>
                            <p className="matchinfotxt">Date: {ticket.matchDate}</p>
                            <p className="matchinfotxt">Time: {ticket.matchTime}</p>
                            <p className="matchinfotxt">Price: ₹{ticket.matchTicketPrice}</p>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookingScreen;
