import React from 'react';
import DoctorDetails from '../DoctorDetails/DoctorDetails';



const Doctor = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h4 className="text-center  mb-5" style={{color:'#5EC2B6'}}>Our Doctors</h4>
                <div className="row">
                    <DoctorDetails/>
                    <DoctorDetails/>
                    <DoctorDetails/>
                </div>
            </div>
        </section>
    );
};

export default Doctor;