import React from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
      <img
        src={doctor.photo}
        alt={doctor.name}
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
      <p className="text-gray-600 mb-2">{doctor.specialty}</p>
      <p className="text-gray-500 mb-4">{doctor.location}</p>
      <Link
        to={`/appointment/${doctor.id}`}
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2 inline-block"
      >
        Prendre un rendez-vous
      </Link>
    </div>
  );
};

export default DoctorCard;
