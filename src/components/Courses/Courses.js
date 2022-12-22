import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCards from '../CourseCards/CourseCards';
import CourseSideNav from '../CourseSideNav/CourseSideNav';

const Courses = () => {
    const courses = useLoaderData();
    
    return (
        <div className="flex">
            {/* course content */}
            <div className='grow'  style={{marginLeft: "15px", marginBottom: "50px"}}>
                    <p className='text-center font-bold py-6 text-3xl  mt-20 mb-16'>ALL COURSES</p>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 sm:mx-10 md:ml-14 lg:ml-20'>
                    {courses.map(course => <CourseCards course={course} key={course.id}></CourseCards>)
                    }
                </div>
            </div>
            {/* side nav of courses page */}
            <div className="grow-0 bg-blue-50 ml-4">
                <p className='text-primary text-center text-2xl font-semibold h-5 my-10'>FIND COURSES</p>
            {
                courses.map(course => <CourseSideNav course={course} key={course.id}></CourseSideNav>)
            }
            </div>
        </div>
    );
};

export default Courses;