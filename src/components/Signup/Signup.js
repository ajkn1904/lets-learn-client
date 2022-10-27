import { FaGoogle, FaGithub } from 'react-icons/fa';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';


const Signup = () => {

    const {createUser, continueWithProvider, updatePro} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [error, setError] = useState(null);        /* to handle input error  */

    const location = useLocation();             /* for getting browsers' location history */

    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';         /* to navigate users location*/


/* for profile update */
    const handlePro = (name, photoURL) => {

        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updatePro(profile)
        .then(() => {})
        .catch(error => {
            console.error(error);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmed = form.confirmPass.value;

        const name = form.name.value;
        const photoURL = form.photoURL.value;


        console.log(email, password, confirmed, photoURL, name);

        /* Password validation */
        if(password.length < 6){
            setError('Password must be at least 6 character long.');
            return setError;
        }

        if(password !== confirmed){
            setError('Your password did not match.')
            return setError;
        }

        /* creating user with email & password */
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            navigate(from, {replace: true});
            handlePro(name, photoURL);

        })
        .catch(error => {
            const setError = error.message;
            console.error(error);
        })

    }

    /* Log in wih google provider */
    const handleGglLogin = () => {
        continueWithProvider(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        });

    }

    /* Log in wih github provider */
    const handleGitLogin = () => {
        continueWithProvider(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        });

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold">Sign Up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Image Url" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirmPass" placeholder="Retype Password" className="input input-bordered" required />
                        </div>
                        
                        
                        <small className='text-center'>Have an account? <Link to="/login" className='text-blue-600'>Login Now</Link></small>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-active">Sign up</button>
                        </div>

                        <small className="text-red-600">{error}</small>

                        <div className='flex justify-center items-center my-4'>
                            <hr style={{width: "50%"}}></hr><br/>
                            
                            <p className='mx-4'>or</p>

                            <hr style={{width: "50%"}}></hr>
                        </div>

                        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2'>
                            <button onClick={handleGglLogin} className="btn btn-ghost border-success">
                                <FaGoogle className='mr-1'></FaGoogle> Signup with Google
                            </button>

                            <button onClick={handleGitLogin} className="btn btn-ghost border-primary">
                                <FaGithub className='mr-1'></FaGithub>Signup with GitHub
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        
        </div>
    );
};

export default Signup;