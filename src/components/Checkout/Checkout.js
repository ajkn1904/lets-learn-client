import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courseDetail = useLoaderData();
    const {name, img, outcome, price, ratings, outline} = courseDetail;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Checkout;