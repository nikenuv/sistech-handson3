import React from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';
import { WorkshopData } from "../utils/WorkshopData";
import ProductCard from './ProductCard';

const Workshop = () => {
  return (
    <article id="workshop" className="min-h-screen py-20 px-5 text-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/begron2.png')" }}>
      <Heading className="text-white">Upcoming Workshop</Heading>
      <Paragraph className="text-white">Check it on YouTube!</Paragraph>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        {WorkshopData.map((workshop, index) => (
          <ProductCard key={index} workshop={workshop} />
        ))}
      </div>
    </article>
  );
}

export default Workshop;
