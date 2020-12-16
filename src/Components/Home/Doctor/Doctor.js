import React, { useEffect, useState } from 'react';
import DoctorDetails from '../DoctorDetails/DoctorDetails';



const Doctor = () => {
    const [doctors, setDoctors]  = useState([])
    useEffect( () => {
        fetch('http://localhost:4000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <section className="doctors">
            <div className="container">
                <h4 className="text-center  mb-5" style={{color:'#5EC2B6'}}>Our Doctors</h4>
                <div className="row">
                  {
                     doctors.map(doctor => <DoctorDetails key={doctor._id} doctor={doctor} />)
                  }
                </div>
            </div>
        </section>
    );
};

export default Doctor;