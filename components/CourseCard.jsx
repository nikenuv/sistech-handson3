import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="w-80 h-48 mx-auto bg-cover bg-center rounded-lg shadow-md bg-blend-darken" style={{ backgroundImage: `url(${course.imgUrl})` }}>
      <div className="w-80 h-48 p-4 bg-opacity-50 bg-black rounded-lg shadow-xl">
        <h2 className="py-4 mt-10 mb-10 text-center justify-center text-2xl font-bold text-white">{course.course}</h2>
      </div>
    </div>
  );
};

export default CourseCard;
