import React from 'react'
import { Navbar } from '.'

const Home = () => {
  return (
    <div className="home-container flex flex-col w-full h-full py-5 absolute bg-cover bg-no-repeat" style={{ backgroundImage: "url('/begron1.png')" }}>
        <Navbar />
        <div id="home" className="flex-1 flex items-center h-full relative">
            <div className="blank flex-1 flex"></div>
            <div className="content flex-1">
                <h1 className="title my-2 inline-flex bg-[#C8C0A6] text-[3vw] font-bold">HYUNNI, CS50 Archive!</h1>
                <p className="text-[1.5vw] leading-7 py-10 font-medium text-white">
                    Demanding, but definitely doable. Social, but educational. <br/> A focused topic, but broadly applicable skills.
                </p>
                <button className="px-6 py-3 mt-4 border border-transparent rounded-full bg-black text-lg font-bold text-white transition-all duration-150 ease-in hover:border-black hover:bg-transparent hover:text-black">
                    Join Community
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home