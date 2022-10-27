import React from 'react';
import { Link } from 'react-router-dom';

const CourseCards = ({course}) => {
    const {id, name, img, description, ratings, price} = course
    return (
        <div className="card sm:w-50 md:w-70 lg:w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="" style={{height: "350px"}}/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to={`/courseDetail/${id}`}>Details</Link></button>        {/* links to dynamic route */}
                </div>
                <p>{description}</p>

                <div className='flex justify-around items-center bg-white p-3 h-14 text-black rounded'>
                    <p>Price: ${price}</p>

                    <span className="indicator-item badge">{ratings}
                        <small className='rating '>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-3 h-3" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-3 h-3" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-3 h-3" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300 w-3 h-3" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-100 w-3 h-3" />
                        </small>
                    </span>
                </div>
            </div>
            
        </div>
    );
};

export default CourseCards;