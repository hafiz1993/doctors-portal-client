import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../Sidebar/Sidebar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://powerful-crag-98528.herokuapp.com/appointments')
        .then(res => res.json())
        .then (data => setAppointments(data))
    }, [])
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h4 className="text-brand">**ALL Patients**</h4>
            <AppointmentDataTable appointments={appointments}></AppointmentDataTable>

            </div>
        </div>
    );
};

export default AllPatients;