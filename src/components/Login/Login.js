import { FaGoogle, FaGithub } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        
                        
                        <small className='text-center'>Haven't any account? <Link to="/signup" className='text-primary'>Create here</Link></small>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-active">Login</button>
                        </div>

                        <div className='flex justify-center items-center my-4'>
                            <hr style={{width: "50%"}}></hr><br/>
                            
                            <p className='mx-4'>or</p>

                            <hr style={{width: "50%"}}></hr>
                        </div>

                        <div className='flex gap-2'>
                            <button className="btn btn-ghost border-success">
                                <FaGoogle className='mr-1'></FaGoogle>Login with Google
                            </button>

                            <button className="btn btn-ghost border-primary">
                                <FaGithub className='mr-1'></FaGithub>Login with GitHub
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        
        </div>
    );
};

export default Login;