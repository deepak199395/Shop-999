import React, { useState } from "react";
import "../../Styles/Products.css";
import CreateIpl from "../Booking/CreateIpl";
import CreateMovie from "../Booking/CreateMovie";

const Products = () => {
    const [activeModal, setActiveModal] = useState(null);
    const openModal = (type) => setActiveModal(type);
    const closeModal = () => setActiveModal(null);


  

  return (
    <div className="main-container">
      <div className="cards-container">
        {/* IPL Card */}
        <div className="card">
          <h2>IPL Ticket Booking</h2>
          <p>Book your IPL match tickets now!</p>
          <button  onClick={() => openModal("ipl")}>Create IPL Tickets</button>
        </div>

        {/* Movie Card */}
        <div className="card">
          <h2>Movie Booking</h2>
          <p>Reserve your favorite movie seat!</p>
          <button onClick={() => openModal("movie")}> Create  Movie Tickets</button>
        </div>
              {/* Modal Popup */}
        {
            activeModal && (
                <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <button className="close-btn" onClick={closeModal}>×</button>
                  {activeModal === "ipl" && <CreateIpl />}
                  {activeModal === "movie" && <CreateMovie/>}
                </div>
              </div>
            )
        }
    </div>
    </div>
  );
};

export default Products;

