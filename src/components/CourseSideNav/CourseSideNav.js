import React from 'react';
import { Link } from 'react-router-dom';

const CourseSideNav = ({course}) => {
    const {name, id} = course
    return (
        <div>
            <button className="btn btn-ghost w-40 my-4  mx-6 border-b-white"><Link to="/">{name}</Link></button>
        </div>
    );
};

export default CourseSideNav;