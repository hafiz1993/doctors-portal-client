import React from 'react';
import BlogDetails from '../BlogDetails/BlogDetails';
import './Blogs.css';
import img1 from'../../../images/Ellipse 1.png'

const blogData =
[
    {   title:'2 times of brush in a day can keep you healthy',
        author:'Dr.Caudi',
        date:'23 April 2020',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, beatae laboriosam architecto ducimus mollitia numquam.',
        img:img1
    },
     {title:'2 times of brush in a day can keep you healthy',
        author:'Dr.Manik',
        date:'23 April 2020',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, beatae laboriosam architecto ducimus mollitia numquam.',
         img:img1

    },
    {
        title:'2 times of brush in a day can keep you healthy',
        author:'Dr.mohsina',
        date:'23 April 2020',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, beatae laboriosam architecto ducimus mollitia numquam.',
        img:img1
    },
]



const Blogs = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5>Our Blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                      blogData.map(blog=><BlogDetails blog={blog} key={blog.title}></BlogDetails>)  
                    }
                </div>
            </div>
         
        </section>
    );
};

export default Blogs;