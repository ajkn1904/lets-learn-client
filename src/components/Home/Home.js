import React from 'react';
import { Link } from 'react-router-dom';
import Feedback from './Feedback';

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


        </>
    );
};

export default Home;