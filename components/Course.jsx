import React from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';

const Course = () => {
  return (
    <article id="courses" className="h-screen bg-gray-200 py-20 px-5 text-center">
      <Heading>Courses</Heading>
      <Paragraph>Pick A Course To Get Started</Paragraph>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
        <div className="w-60 h-60 mx-auto bg-cover bg-center rounded-lg shadow-md bg-blend-darken" style={{
        backgroundImage: "url('/course.jpg')",
    }}>
          <div className="p-4">
            <h2 className="py-4 mt-16 text-center justify-center text-2xl font-bold mb-3 bg-[#C8C0A6] bg-cover bg-no-repeat">Android Track</h2>
            <h3><a href="https://youtube.com/playlist?list=PLhQjrBD2T381qULidYDKP55-4u1piASC1&si=bD7CXVQPTTY8sVLm" className="text-black font-bold hover:text-white hover:underline">Watch Playlist</a></h3>
          </div>
        </div>
          <div className="w-60 h-60 mx-auto bg-cover bg-center rounded-lg shadow-md bg-blend-darken" style={{
        backgroundImage: "url('/course.jpg')",
    }}>
          <div className="p-4">
            <h2 className="py-4 mt-16 text-center justify-center text-2xl font-bold mb-3 bg-[#C8C0A6] bg-cover bg-no-repeat">iOS Track</h2>
            <h3><a href="https://youtube.com/playlist?list=PLhQjrBD2T3810ZX79Xrgj8X382QaWbk_J&si=xOPhYBZnZGyaRY-I" className="text-black font-bold hover:text-white hover:underline">Watch Playlist</a></h3>
          </div>
        </div>
          <div className="w-60 h-60 mx-auto bg-cover bg-center rounded-lg shadow-md bg-blend-darken" style={{
        backgroundImage: "url('/course.jpg')",
    }}>
          <div className="p-4">
            <h2 className="py-4 mt-16 text-center justify-center text-2xl font-bold mb-3 bg-[#C8C0A6] bg-cover bg-no-repeat">Web Track</h2>
            <h3><a href="https://youtube.com/playlist?list=PLhQjrBD2T382xHP1dYqfF6kRqL7xBTQNJ&si=7ukqQ3NuebWY6KP1" className="text-black font-bold hover:text-white hover:underline">Watch Playlist</a></h3>
          </div>
        </div>
          <div className="w-60 h-60 mx-auto bg-cover bg-center rounded-lg shadow-md bg-blend-darken" style={{
        backgroundImage: "url('/course.jpg')",
    }}>
          <div className="p-4">
            <h2 className="py-4 mt-16 text-center justify-center text-2xl font-bold mb-3 bg-[#C8C0A6] bg-cover bg-no-repeat">Data Science</h2>
            <h3><a href="https://youtube.com/playlist?list=PLhQjrBD2T381qULidYDKP55-4u1piASC1&si=bD7CXVQPTTY8sVLm" className="text-black font-bold hover:text-white hover:underline">Watch Playlist</a></h3>
          </div>
        </div>
          <div className="w-60 h-60 mx-auto bg-cover bg-center rounded-lg shadow-md bg-blend-darken" style={{
        backgroundImage: "url('/course.jpg')",
    }}>
          <div className="p-4">
            <h2 className="py-4 mt-16 text-center justify-center text-2xl font-bold mb-3 bg-[#C8C0A6] bg-cover bg-no-repeat">Machine Learning</h2>
            <h3><a href="https://youtube.com/playlist?list=PLhQjrBD2T3810ZX79Xrgj8X382QaWbk_J&si=xOPhYBZnZGyaRY-I" className="text-black font-bold hover:text-white hover:underline">Watch Playlist</a></h3>
          </div>
        </div>
          <div className="w-60 h-60 mx-auto bg-cover bg-center rounded-lg shadow-md bg-blend-darken" style={{
        backgroundImage: "url('/course.jpg')",
    }}>
          <div className="p-4">
            <h2 className="py-4 mt-16 text-center justify-center text-2xl font-bold mb-3 bg-[#C8C0A6] bg-cover bg-no-repeat">Games Track</h2>
            <h3><a href="https://youtube.com/playlist?list=PLhQjrBD2T382xHP1dYqfF6kRqL7xBTQNJ&si=7ukqQ3NuebWY6KP1" className="text-black font-bold hover:text-white hover:underline">Watch Playlist</a></h3>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Course;
