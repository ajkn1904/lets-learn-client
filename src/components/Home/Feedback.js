import React from 'react';
import { FaStar } from 'react-icons/fa';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi';

const Feedback = () => {
    return (
        <div>
            <section className="container">
                <div className="carousel w-10/12 mx-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="bg-info bg-opacity-10 w-[90%] mx-auto p-10 bg-light border-primary border border-3 rounded-xl">
                            <div className="flex justify-between my-4">
                                <div className="peoples-intro flex my-4">
                                    <div>
                                        <h5 className="font-semibold">Awlad Hossain</h5>
                                        <small>University Professor</small>
                                    </div>
                                </div>
                                <span className="flex flex-row justify-center">
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />

                                </span>
                            </div>
                            <p>“The opportunity for every child to learn and to make the most of their talents is at the heart of a fairer society. Yet in country after country it is wealth, not talent, that dictates a child’s educational destiny.… This reality is failing individual children, each of whom has a right to education. It is also failing society, as a generation of talented poor girls and boys cannot fulfil their promise and contribute fully to human progress. Brilliant doctors, teachers or entrepreneurs are instead herding goats or collecting water. Humanity faces unprecedented challenges. Yet instead of utilizing the talents of all of people, inequality means we are squandering this potential.”</p>



                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-ghost text-success btn-circle"><TfiArrowCircleLeft className='h-5 w-5' /></a>
                            <a href="#slide2" className="btn btn-ghost text-success btn-circle"><TfiArrowCircleRight className='h-5 w-5' /></a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="bg-info bg-opacity-10 w-[90%] mx-auto p-10 bg-light border-primary border border-3 rounded-xl">
                            <div className="flex justify-between my-4">
                                <div className="peoples-intro flex my-4">
                                    <div>
                                        <h5 className="font-semibold">Awlad Hossain</h5>
                                        <small>Student</small>
                                    </div>
                                </div>
                                <span className="flex flex-row justify-center">
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />

                                </span>
                            </div>
                            <p>“The opportunity for every child to learn and to make the most of their talents is at the heart of a fairer society. Yet in country after country it is wealth, not talent, that dictates a child’s educational destiny.… This reality is failing individual children, each of whom has a right to education. It is also failing society, as a generation of talented poor girls and boys cannot fulfil their promise and contribute fully to human progress. Brilliant doctors, teachers or entrepreneurs are instead herding goats or collecting water. Humanity faces unprecedented challenges. Yet instead of utilizing the talents of all of people, inequality means we are squandering this potential.”</p>



                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-ghost text-success btn-circle"><TfiArrowCircleLeft className='h-5 w-5' /></a>
                            <a href="#slide3" className="btn btn-ghost text-success btn-circle"><TfiArrowCircleRight className='h-5 w-5' /></a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="bg-info bg-opacity-10 w-[90%] mx-auto p-10 bg-light border-primary border border-3 rounded-xl">
                            <div className="flex justify-between my-4">
                                <div className="peoples-intro flex my-4">
                                    <div>
                                        <h5 className="font-semibold">Awlad Hossain</h5>
                                        <small>College Student</small>
                                    </div>
                                </div>
                                <span className="flex flex-row justify-center">
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />

                                </span>
                            </div>
                            <p>“The opportunity for every child to learn and to make the most of their talents is at the heart of a fairer society. Yet in country after country it is wealth, not talent, that dictates a child’s educational destiny.… This reality is failing individual children, each of whom has a right to education. It is also failing society, as a generation of talented poor girls and boys cannot fulfil their promise and contribute fully to human progress. Brilliant doctors, teachers or entrepreneurs are instead herding goats or collecting water. Humanity faces unprecedented challenges. Yet instead of utilizing the talents of all of people, inequality means we are squandering this potential.”</p>



                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-ghost text-success btn-circle"><TfiArrowCircleLeft className='h-5 w-5' /></a>
                            <a href="#slide1" className="btn btn-ghost text-success btn-circle"><TfiArrowCircleRight className='h-5 w-5' /></a>
                        </div>
                    </div>

                </div>


            </section>

        </div>
    );
};

export default Feedback;