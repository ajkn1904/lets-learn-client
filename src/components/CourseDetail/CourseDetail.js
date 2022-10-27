import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';


const ref = React.createRef()

const CourseDetail = () => {
    /* Loading data from API with react hook */
    const courseDetail = useLoaderData();
    const {name, img, outcome, price, ratings, outline, id} = courseDetail;


    return (
        <>
            <header>
            <figure><img src={img} alt="" style={{height: "550px", width: "100%", filter: "brightness(50%)"}}/>
            </figure>
            
            
            <div className='text-center font-bold p-6 text-white text-4xl bg-black flex justify-between'>
                <h1>{name}</h1>

                <Pdf targetRef={ref} filename="tutorial.pdf">
                {({ toPdf }) => <button className='btn glass' onClick={toPdf}>Download PDF</button>}
                </Pdf>
            </div>
            </header>


            <h2 className='my-14 text-center text-primary font-bold text-3xl'>Course Details</h2>


            <div className='my-8 w-10/12 mx-auto border-2 p-12 border-dark rounded-2xl' ref={ref}>
                
                <h3 className='text-2xl font-bold text-slate-800'>Course Name</h3>

                <p className='mt-3 mb-7'>{name}</p>

                <h3 className='text-2xl font-bold text-slate-800'>What You will Learn?</h3>

                <p className='mt-3 mb-7'>{outcome}</p>

                <h3 className='text-2xl font-bold text-slate-800'>Course OutLine</h3>

                <span className="badge badge-outline p-4 mr-4 mt-3 mb-7 font-semibold">$ {price}</span>
                <span className="badge badge-primary  badge-outline p-4 mx-4 mt-3 mb-7 font-semibold">{outline.duration} Days</span>
                <span className="badge badge-secondary  badge-outline p-4 mx-4 mt-3 mb-7 font-semibold">{outline.time} hr</span>
                <span className="badge badge-success  badge-outline p-4 mx-4 mt-3 mb-7 font-semibold">{outline.language}</span>
                <span className="badge badge-info  badge-outline p-4 mx-4 mt-3 mb-7 font-semibold">{ratings} stars</span>

                <div className='text-center my-10'>
                    <hr style={{width: "80%", margin: "auto"}}></hr><br/>
                    
                    <button className="btn btn-warning font-bold"><Link to={`/checkout/${id}`}>Get premium access</Link></button>

                            
                </div><div className='t'>
            </div>

            </div>
        </>
    );
};

export default CourseDetail;