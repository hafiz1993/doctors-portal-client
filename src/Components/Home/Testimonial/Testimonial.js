import React from 'react';
import pic1 from '../../../images/Ellipse 1.png';
import pic2 from '../../../images/Ellipse 2.png';
import pic3 from '../../../images/Ellipse 3.png';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import './Testimonial.css';

const clientData = [
    {
      title: "Winson Herry",
      address:"california",
      description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam dolorem libero ipsam mollitia aperiam ea  ",
      img: pic1

    },
    {
        title: "Winson Herry",
        address:"california",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam dolorem libero ipsam mollitia aperiam ea ",
        img: pic2
  
      },
      {
        title: "Winson Herry",
        address:"california",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam dolorem libero ipsam mollitia aperiam ea ",
         img: pic3
  
      },
  ];


const Testimonial = () => {
    return (
        <section className="testimonial  my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 style={{color:'#5EC2B6'}} className="text-uppercase" >Testimonial</h5>
                    <h1><b>What's our patients <br/> Says </b> </h1> 
                </div>
                 <div className="card-deck mt-5">
                    {
                        clientData.map( testimonial =><TestimonialDetails testimonial={testimonial} key={testimonial.title}/>)
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Testimonial;