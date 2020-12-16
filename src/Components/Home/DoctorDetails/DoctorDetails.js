/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../../../images/doctor.png'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DoctorDetails = ({ doctor }) => {
    console.log(doctor);

    return (
        <div className="col-4 text-center">

            {
                doctor.image ? <img style={{ height: '150px', borderRadius:'10px' }} src={`data:image/png;base64,${doctor.image.img}`} />
                    :
                    <img style={{ height: '150px' }} className="img-fluid mb-3" src={`https://powerful-crag-98528.herokuapp.com/${doctor.img}`} alt="" />
            }

            <h4>{doctor.name}</h4>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />+8801962796374</p>

        </div>
    );
};

export default DoctorDetails;