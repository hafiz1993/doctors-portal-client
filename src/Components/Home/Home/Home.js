import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import DoctorsAppointment from '../DoctorsAppointment/DoctorsAppointment';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Header> </Header>
           <Services></Services>
           <FeaturedService></FeaturedService>
           <DoctorsAppointment></DoctorsAppointment>
           <Testimonial></Testimonial>
           <Blogs></Blogs>
           <Doctor></Doctor>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;