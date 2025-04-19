import React, { useState } from 'react'
import { FaChair, FaBan } from 'react-icons/fa';
import "./Seats.css"
import { seatsLayout } from './TheatreSeats';


const SeatSelection = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seatNumber) => {
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber))
        } else {
            setSelectedSeats([...selectedSeats, seatNumber])
        }
    };
    return (
        <div className='seat-container'>
            <h2>Select Your Seats</h2>
            <div className='seats-grid'>
                {
                    seatsLayout.map(seat => (
                        <div key={seat.seatNumber}
                            className={`seat${!seat.isAvailable ? 'unavailable' : ""} ${selectedSeats.includes(seat.seatNumber) ? 'selected' : ""}`}
                            onClick={() => seat.isAvailable && handleSeatClick(seat.seatNumber)}
                        >
                            {seat.isAvailable ? <FaChair /> : <FaBan />}
                            <span>{seat.seatNumber}</span>
                        </div>
                    ))}
             </div>
             <div className='selected-info'>
             <h4>Selected Seats:</h4>
             {selectedSeats.length > 0 ? selectedSeats.join(','):null}
             </div>
             <button className="buy-btn" disabled={selectedSeats.length === 0}>Proceed to Payment</button>
        </div>
    );
};

export default SeatSelection
