import React from 'react';
import Image from 'next/image';
import Heading from './Heading';

const About = () => {
  return (
    <aside id="about" className="h-screen py-10 px-5 bg-gray-200 text-center">
      <div className="flex flex-col h-full justify-center items-center">
        <Heading>About CS50</Heading>
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <div className="flex justify-center">
            <div className="w-24 h-24 relative rounded-full overflow-hidden">
              <Image src="/about.JPEG" layout="fill" objectFit="cover" alt="CS50" />
            </div>
          </div>
          <div className="text-center mt-6">
            <h3 className="text-xl mb-3">CS50</h3>
            <p className="text-lg text-gray-700">
              CS50 is Harvard University's introduction to the intellectual enterprises of computer science and the art of programming. CS50 is the quintessential Harvard (and Yale!) course.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="contact-item text-center">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-6 w-6 inline-block">
                  <path d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z"/>
                </svg>
              </div>
              <div className="contact-detail mt-2">
                <h3 className="text-lg">Offline Course</h3>
                <p className="text-gray-700">Massachusetts Hall, Cambridge, MA 02138, USA</p>
              </div>
            </div>
            <div className="contact-item text-center">
              <div className="contact-icon">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="h-6 w-6 inline-block">
                  <path d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.639.855-2.313 2.666-2.289 4.916.075 6.948 6.809 18.071 12.309 18.045.541-.003 1.07-.113 1.58-.346.121-.055 2.102-1.029 2.11-1.033zm-2.5-13.621c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/>
                </svg>
              </div>
              <div className="contact-detail mt-2">
                <h3 className="text-lg">Telephone</h3>
                <p className="text-gray-700">+1 617-495-1000</p>
              </div>
            </div>
            <div className="contact-item text-center">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-6 w-6 inline-block">
                  <path d="M19 9.062s-5.188-.333-7 1.938c2-4.896 7-5.938 7-5.938v-2l5 4-5 4.019v-2.019zm-18.974 14.938h23.947l-11.973-11.607-11.974 11.607zm1.673-14l10.291-7.488 3.053 2.218c.712-.459 1.391-.805 1.953-1.054l-5.006-3.637-11.99 8.725v12.476l7.352-7.127-5.653-4.113zm15.753 4.892l6.548 6.348v-11.612l-6.548 5.264z"/>
                </svg>
              </div>
              <div className="contact-detail mt-2">
                <h3 className="text-lg">Contact</h3>
                <p className="text-gray-700">cs50.edx.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default About;
