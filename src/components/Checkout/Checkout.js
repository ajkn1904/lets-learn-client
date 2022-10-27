import React from 'react';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Checkout = () => {
    /* Loading data from API using react hook */
    const courseDetail = useLoaderData();
    const {name, img, description, price} = courseDetail;

    /* using react hot toast */
    const handleCheckOut = () => {
        toast.success("Congratulations!!!")
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-9/12 mx-auto my-14">
        <figure><img src={img} alt=""/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <small>Price: ${price}</small>
            <div className="card-actions justify-end">
                <button onClick={handleCheckOut} className="btn btn-outline btn-primary font-bold">Checkout Now</button>
                <Toaster/>
            </div>
        </div>
        </div>
    );
};

export default Checkout;