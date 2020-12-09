import React from 'react';

const BlogDetails = (props) => {
    const { title, author, date, description, img } = props.blog;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex align-items-center">
                <img className="mx-4" src={img} alt="" width="60" />
            </div>
            <div className="card-body">
                <h6 className="text-primary">{author}</h6>
                <p className="m-0">{date}</p>
                <br />
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>

        </div>
    );
};

export default BlogDetails;