import React from 'react'
import './DoctorsAppointment.css'
import doctor from '../../../images/doctor.png';
import { Link } from 'react-router-dom';

const DoctorsAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img style={{ width: '450px' }} src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 style={{color:'#5EC2B6'}} className="text-uppercase">Appointment</h5>
                        <h1 className="my-4">make Appointment <br /> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum debitis dolorum vero ullam aspernatur facilis accusamus nobis vel dolorem quibusdam placeat iusto iste rem ex tenetur voluptatem, eaque delectus animi.</p>
                        <Link path to ='/appointment'>
                        <button  style={{ backgroundColor: '#11D0DD', width: '200px', height: '50px' }} className="btn  btn-outline-dark" >
                            Learn more
                </button>
                </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default DoctorsAppointment;