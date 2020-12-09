import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className=" contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-black mb-5">
                    <h5 className="text-primary">Contact</h5>
                    <h1>Always Contact with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                    <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea className="form-control col-30 row-10"  type="text"  placeholder="Message *"/>
                       </div>
                       <div className="form-group text-center">
                           <button style={{ backgroundColor: '#11D0DD', width: '300px', color:'white' }} type="button" className="btn "> Submit </button>
                       </div>
                    </form>

                </div>
            </div>
            
        </section>
    );
};

export default Contact;