import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCards from '../CourseCards/CourseCards';
import CourseSideNav from '../CourseSideNav/CourseSideNav';

const Courses = () => {
    const courses = useLoaderData();

    return (

        <>
            <div className='flex flex-evenly gap-2 bg-blue-50 font-bold whitespace-nowrap overflow-auto scrollbar-hide md:hidden'>
                {
                    courses.map(course => <CourseSideNav course={course} key={course.id}></CourseSideNav>)
                }
            </div>


            <div className="flex">
                {/* course content */}
                <div className='grow mx-auto mb-11'>
                    <p className='text-center font-bold text-3xl  my-16'>ALL COURSES</p>
                    <div className='w-[90%] md:w-9/12 lg:w-9/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-auto'>
                        {courses.map(course => <CourseCards course={course} key={course.id}></CourseCards>)
                        }
                    </div>
                </div>
                {/* side nav of courses page */}
                <div className="bg-blue-50 ml-4 hidden md:block">
                    <p className='text-primary text-center text-2xl font-semibold h-5 my-10'>FIND COURSES</p>
                    {
                        courses.map(course => <CourseSideNav course={course} key={course.id}></CourseSideNav>)
                    }
                </div>
            </div>
        </>
    );
};

export default Courses;