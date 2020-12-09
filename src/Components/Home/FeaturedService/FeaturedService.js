import React from 'react';
import mask from'../../../images/Mask Group 3.png'

const FeaturedService = () => {
    return (
        <section className=" pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-3">
                <div className="col-md-5 mb-4 m-md-0">
                    <img  style={{borderRadius: '50px', }}src={mask} alt="" className="img-fluid "/>
                </div>
                <div className="col-md-7 align-self-center ">
                <h1>Exceptional Dental Care, on your Term</h1>
                <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ullam nesciunt?  Molestiae perspiciatis cum consequuntur iste amet quisquam dolorum error quod quaerat, recusandae id ut libero? Nesciunt deserunt architecto vitae laudantium repudiandae atque ipsa quaerat praesentium dolor. Sequi aliquid, neque ea dolores magnam facilis dolore, repellat accusantium necessitatibus tenetur nemo?</p>

                <button style={{backgroundColor:'#11D0DD', width:'200px', height:'50px'}}  className="btn  btn-outline-light" >
                    Learn more
                </button>
                </div>
                
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;