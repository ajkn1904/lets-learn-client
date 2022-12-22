import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';


const ref = React.createRef()

const CourseDetail = () => {
    /* Loading data from API with react hook */
    const courseDetail = useLoaderData();
    const { name, img, outcome, price, ratings, outline, id } = courseDetail;


    return (
        <>
            <header>
                <div className='text-center font-bold p-6 text-white text-4xl bg-[#042825] flex justify-between'>
                    <h1>{name}</h1>

                    <Pdf targetRef={ref} filename="tutorial.pdf">
                        {({ toPdf }) => <button className='btn glass' onClick={toPdf}>Download PDF</button>}
                    </Pdf>
                </div>
            </header>


            <h2 className='my-14 text-center font-bold text-4xl'>Course Details</h2>


            <div className='my-8 w-10/12 mx-auto border-2 p-12 border-dark rounded-2xl flex md:justify-evenly lg:justify-evenly flex-col sm:flex-col md:flex-row-reverse lg:flex-row-reverse gap-5' ref={ref}>

                <figure><img src={img} alt=""  className='w-[90%] h-[350px] mx-auto' style={{ filter: "brightness(70%)" }} />
                </figure>

                <div>
                    <h3 className='text-2xl font-bold'>Course Name</h3>

                    <p className='mt-3 mb-7'>{name}</p>

                    <h3 className='text-2xl font-bold'>What You will Learn?</h3>

                    <p className='mt-3 mb-7'>{outcome}</p>

                    <h3 className='text-2xl font-bold'>Course OutLine</h3>

                    <span className="badge badge-outline p-4 mr-4 mt-3 mb-7 font-semibold">$ {price}</span>
                    <span className="badge badge-primary  badge-outline p-4 mx-4 mt-3 mb-7 font-semibold">{outline.duration} Days</span>
                    <span className="badge badge-secondary  badge-outline p-4 mx-4 mt-3 mb-7 font-semibold">{outline.time} hr</span>
                    <span className="badge badge-success  badge-outline p-4 mx-4 mt-3 mb-7 font-semibold">{outline.language}</span>
                    <span className="badge badge-info  badge-outline p-4 mx-4 mt-3 mb-7 font-semibold">{ratings} stars</span>

                    <div className='text-center my-10'>
                        <hr style={{ width: "80%", margin: "auto" }}></hr><br />

                        <button className="btn btn-warning font-bold"><Link to={`/checkout/${id}`}>Get premium access</Link></button>


                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetail;