import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            {/* importent */}
            <div className="col-md-4  offset-md-1">
                <h1 style={{color:"3A4256"}}>Your New smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil culpa, dolorum voluptas ipsa cumque iste.</p>
                <Link to="/appointment" ><button  style={{backgroundColor:'#11D0DD'}}  className="btn  btn-outline-light" >
                    Get Appointment
                </button>
                </Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
            
        </main>
    );
};

export default HeaderMain;