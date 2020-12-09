import React from 'react';

const TestimonialDetails = (props) => {
    const { title, description, img, address } = props.testimonial;

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{description}</p>
            </div>
            <div className="card footer d-flex align-items-center">
                <img className="mx-3" src={img} alt="" width="60" />
                <h6 className="text-primary">{title}</h6>
                <p className="m-0">{address}</p>
                <div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;