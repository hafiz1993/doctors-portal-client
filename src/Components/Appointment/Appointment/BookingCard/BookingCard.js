import React, { useState } from 'react';
import Appointmentform from '../Appointmentform/Appointmentform';
 

const BookingCard = ({ booking, date }) => {

const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);


  }


    return (
        <div className="col-md-4 mb-5" >
            <div className="card py-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <p>{booking.visitingHour}</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">book appointment</button>
                    <Appointmentform modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date ={date} ></Appointmentform>


                </div>
            </div>
        </div>
    );
};

export default BookingCard;