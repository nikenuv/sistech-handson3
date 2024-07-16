import React from 'react';

const ProductCard = ({ workshop }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 right-0 bg-yellow-500 text-white py-1 px-2 rounded-bl-lg">
          {workshop.duration}
        </div>
      </div>
      <div className="p-5">
        <div className="bg-[#C8C0A6] text-black text-xs font-bold uppercase px-2 py-1 inline-block rounded">
          {workshop.type}
        </div>
        <h3 className="text-lg font-semibold mt-2">{workshop.title}</h3>
        <div className="mt-3 text-xl font-bold text-red-500">{workshop.price}</div>
        <a href={workshop.link} className="mt-3 inline-block bg-[#C8C0A6] text-black py-2 px-4 rounded">
          Watch Playlist
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
