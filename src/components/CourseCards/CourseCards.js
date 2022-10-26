import React from 'react';
import { Link } from 'react-router-dom';

const CourseCards = ({course}) => {
    const {id, name, img, description} = course
    return (
        <div className="card sm:w-50 md:w-70 lg:w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="" style={{height: "300px"}}/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to={`/course/${id}`}>Details</Link></button>
                </div>
                <p>{description}</p>
            </div>
            
        </div>
    );
};

export default CourseCards;