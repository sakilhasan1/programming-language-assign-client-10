import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';

const Course = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <h1>Courses {courses.length}</h1>
            {
                courses.map(course => <CourseDetails
                    key={course.id}
                    course={course}
                ></CourseDetails>)
            }
        </div>
    );
};

export default Course;