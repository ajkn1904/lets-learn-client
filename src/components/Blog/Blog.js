import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className="text-4xl text-center font-bold my-14">Welcome to BLOG!</h1>

            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div className="flex flex-col gap-5">
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold">
                    what is cors?
                    </div>
                    <div className="collapse-content"> 
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold">
                    Why are you using firebase? What other options do you have to implement authentication?
                    </div>
                    <div className="collapse-content"> 
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold">
                    How does the private route work?
                    </div>
                    <div className="collapse-content"> 
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold">
                    What is Node? How does Node work?
                    </div>
                    <div className="collapse-content"> 
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;