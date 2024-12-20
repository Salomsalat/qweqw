import React from "react";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const RestaurantList = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  const handleCardClick = (id) => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {data?.map((item) => (
        <div
          key={item.id}
          className="bg-white border rounded-lg"
          onClick={() => handleCardClick(item.id)}
        >
          <img
            src={item.imageCarousel.images[0].url}
            alt={item.imageCarousel.images[0].alt}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold">{item.restaurant.name}</h2>
            <p className="text-gray-600">{item.restaurant.address.line1}</p>
            <p className="text-gray-600">{item.restaurant.address.line2}</p>
            <p className="mt-4 text-gray-600">{item.restaurant.hours}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
