import React from 'react';
import { Link } from 'react-router-dom';
import Feedback from './Feedback';
import img1 from '../../images/company-1.png'
import img2 from '../../images/company-2.png'
import img3 from '../../images/company-3.png'
import img4 from '../../images/company-4.png'
import img5 from '../../images/company-5.png'
import img6 from '../../images/company-6.png'

const Home = () => {
    return (
        <>
            <div className="hero min-h-[70vh] bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1599666520394-50d845fe09c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">LET'S LEARN</h1>
                        <p className="mb-5">“In learning you will teach, and in teaching you will learn.”</p>
                        <button className="btn btn-primary"><Link to="/courses">Get Started</Link></button>
                    </div>
                </div>
            </div>


            <div className='my-20'>
                <h1 className="my-10 text-4xl font-bold text-center">What People Says</h1>
                <Feedback />
            </div>

            <section id="get-my-update">
                <h1 className="my-10 text-4xl font-bold text-center">Get Connected</h1>
                <div className='bg-gradient-to-r from-cyan-200 to-blue-200 px-5 py-20 w-10/12 sm:w-10/12 md:w-8/12 lg:w-9/12 mx-auto mb-32 rounded'>
                    <form className='flex flex-col justify-center'>
                        <input className='input my-3 w-[90%] mx-auto' type="text" placeholder="Name" />                  
                        <input className='input my-3 w-[90%] mx-auto' type="email" placeholder="Email" />
                        <textarea className='input my-3 w-[90%] mx-auto min-h-[80px]' type="textarea" placeholder="Your Message" />
                        <button className='btn w-[50%] mx-auto mt-6'><a href="/" >Submit</a></button>
                    </form>
                </div>
            </section>


            <section>
            <h1 className="my-10 text-4xl font-bold text-center">Our Sponsors</h1>

            <div className='w-full p-5 mb-20'>
                <div className="flex justify-evenly items-center gap-4 m-3">

                    <div className="col">
                        <img className="w-75 m-2" src={img1} alt=" " />
                    </div>

                    <div className="col">
                        <img className="w-75 m-2" src={img2} alt=" " />
                    </div>

                    <div className="col">
                        <img className="w-75 m-2" src={img3} alt=" " />
                    </div>

                    <div className="col">
                        <img className="w-75 m-2" src={img4} alt=" " />
                    </div>

                    <div className="col">
                        <img className="w-75 m-2" src={img5} alt=" " />
                    </div>

                    <div className="col">
                        <img className="w-75 m-2" src={img6} alt=" " />
                    </div>

                </div>
            </div>
        </section>


        </>
    );
};

export default Home;