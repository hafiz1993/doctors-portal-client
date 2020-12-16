import React, { useContext, useEffect, useState } from 'react';
import AppointmentByDate from './Sidebar/AppointmentByDate/AppointmentByDate';
import Sidebar from './Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';


const containerStyle ={ 
    backgroundColor:"#FAFDFB", height:"100%"
}

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const dateChange = date =>{
        setSelectedDate(date);
  
    }

    useEffect(() =>{
        fetch('https://powerful-crag-98528.herokuapp.com/appointmentByDate', {
            method:'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({date:selectedDate, email: loggedInUser.email})

        })
            .then(res=>res.json())
            .then(data=> setAppointments(data))
    }, [selectedDate])


    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4">
                <Calendar
        onChange={dateChange}
        value={new Date()}
      />
                </div>
                <div className="col-md-4">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;