"use client"
import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';
import CourseCard from './CourseCard';

const Course = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://sistech-server.vercel.app/api/data')
      .then((res) => res.json())
      .then((data) => setCourses(data.data))
  }, []);

  return (
    <article id="courses" className="h-screen py-20 px-5 text-center">
      <Heading>Courses</Heading>
      <Paragraph>Pick A Course To Get Started</Paragraph>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </article>
  );
}

export default Course;
