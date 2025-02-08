import React from "react";
import "../styles/global.css";
const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-bold">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        En savoir plus
      </button>
    </div>
  );
};

export default ServiceCard;
