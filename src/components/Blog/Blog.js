import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center font-semibold py-6 text-white text-3xl bg-black mb-16'>Welcome to BLOG!</h1>

            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://images.unsplash.com/photo-1596461009523-7d647a4e2399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div className="flex flex-col gap-5">
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold">
                    what is cors?
                    </div>
                    <div className="collapse-content"> 
                        <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism. It allows a server to indicate any origins other than its own from which a browser should permit loading resources.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold">
                    Why are you using firebase? What other options do you have to implement authentication?
                    </div>
                    <div className="collapse-content"> 
                        <p>Firebase helps us to develop high-quality apps, helps to grow user base, it's easy to set up, fast, in many cases requires only front-end logic. Each feature works independently, and they work even better together. 
                        We can implement authentication with other options like: Google, Github, Facebook, Twitter etc.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold">
                    How does the private route work?
                    </div>
                    <div className="collapse-content"> 
                        <p>The react private route requires a user being authorized to visit a route.  Mainly this component renders child components if the user is logged in. If not logged in the user is redirected to the login page with the return url passed in the location state property.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold">
                    What is Node? How does Node work?
                    </div>
                    <div className="collapse-content"> 
                        <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications It is an open source server environment, runs on various platforms like Windows, Linux, Mac OS X, etc. 
                        Node. js runs on chrome v8 engine which converts javascript code into machine code. Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests. Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”. Node JS Web Server internally has a Component, known as “Event Loop”.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;