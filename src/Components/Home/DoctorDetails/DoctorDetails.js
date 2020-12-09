import React from 'react';
import img from '../../../images/doctor.png'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DoctorDetails = () => {
    return (
        <div className="col-4 text-center">
            <img className="img-fluid mb-3" src={img} width="150" alt=""/>
            <h4>Dr. Manik</h4>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/>+8801962796374</p>
            
        </div>
    );
};

export default DoctorDetails;