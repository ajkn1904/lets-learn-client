import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const courseDetail = useLoaderData();
    const {name, img, outcome, price, ratings, outline} = courseDetail;
    return (
        <>
            <header>
            <figure><img src={img} alt="" style={{height: "550px", width: "100%", filter: "brightness(80%)"}}/>
            </figure>
            
            
            <div className='text-center font-bold p-6 text-white text-4xl bg-black flex justify-between'>
                <h1>{name}</h1>
                <button className="btn glass">Download</button>
            </div>
            </header>

            <div className='m-8 border-success-2'>
                
                <h3 className='text-2xl font-bold text-slate-800'>What You will Learn?</h3>

                <p className='mt-3 mb-7'>{outcome}</p>

                <h3 className='text-2xl font-bold text-slate-800'>Course OutLine</h3>

                <span className="badge badge-outline p-4 mr-4 mt-3 mb-7">$ {price}</span>
                <span className="badge badge-primary  badge-outline p-4 mx-4 mt-3 mb-7">{outline.duration} Days</span>
                <span className="badge badge-secondary  badge-outline p-4 mx-4 mt-3 mb-7">{outline.time} hr</span>
                <span className="badge badge-success  badge-outline p-4 mx-4 mt-3 mb-7">{outline.language}</span>
                <span className="badge badge-info  badge-outline p-4 mx-4 mt-3 mb-7">{ratings} stars</span>


            </div>
        </>
    );
};

export default CourseDetail;