import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const data = useLoaderData();
  const restaurant = data.find((item) => item.id === restaurantId);

  return (
    <div className=" flex justify-center md:grid-cols-3 gap-6 p-6">
      <div key={restaurant.id} className="bg-white border rounded-lg">
        <img
          src={restaurant.imageCarousel.images[0].url}
          alt={restaurant.imageCarousel.images[0].alt}
          className="rounded-t-lg"
        />
       <div className="lol flex items-center justify-center">
       <div className="p-4">
          <h2 className="text-2xl font-bold">{restaurant.restaurant.name}</h2>
          <p className="text-gray-600">{restaurant.restaurant.address.line1}</p>
          <p className="text-gray-600">{restaurant.restaurant.address.line2} | {restaurant.restaurant.address.getDirectionUrl}</p>
          <p className="mt-4 text-gray-600">{restaurant.restaurant.hours}</p>
          <p className="mt-4  text-2xl text-gray-600">Avaible time slots</p>
          <p className="mt-4 text-gray-600 flex gap-3">{
          restaurant.timeSlots.map((el) => <div key={el.id}><h5>{el.time}</h5> <h6>{el.available}</h6></div>)
        }</p>

        

        </div>
        <div className="omg">
            {restaurant
            .restaurant.description}
        </div>
       </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
