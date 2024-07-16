import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="home-container flex flex-col h-screen py-5 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/begron1.png')" }}>
      <Navbar />
      <div id="home" className="flex-1 flex items-center h-full px-4 lg:px-20">
        <div className="blank flex-1 hidden lg:flex"></div>
        <div className="content flex-1 py-2 text-center lg:text-left">
          <h1 className="title my-2 inline-flex bg-[#C8C0A6] text-[6vw] lg:text-[3vw] font-bold">HYUNNI, CS50 Archive!</h1>
          <p className="text-[4vw] lg:text-[1.5vw] leading-7 py-10 text-white">
            Demanding, but definitely doable. Social, but educational. <br /> A focused topic, but broadly applicable skills.
          </p>
          <button className="px-6 py-3 mt-4 border border-transparent rounded-full bg-black text-lg font-bold text-white transition-all duration-150 ease-in hover:border-black hover:bg-transparent hover:text-black">
            Join Community
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;