import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const availableData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 2,
        subject: 'Teeth Orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 3,
        subject: 'Teeth Orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 4,
        subject: 'Teeth Orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
]




const BookAppiontment = ({date}) => {
    return (
        <section>
        <h2 className="text-center  mb-5" style={{color:'#1cc7c1'}}>Appointment Available On {date.toDateString()}</h2>
        <div className="row">
             {
                 availableData.map(booking => <BookingCard booking ={booking} date={date}  key={booking.id}></BookingCard>)
             }
        </div>
        </section>
    );
};

export default BookAppiontment;