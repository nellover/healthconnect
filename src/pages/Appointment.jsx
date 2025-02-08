import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.css";

const doctorsList = [
  {
    id: "1",
    name: "Dr. Ahmed Ben Ali",
    specialty: "Cardiologie",
    location: "Tunis",
  },
  {
    id: "2",
    name: "Dr. Sara Mansour",
    specialty: "Dermatologie",
    location: "Sfax",
  },
  {
    id: "3",
    name: "Dr. Khaled Jaziri",
    specialty: "Pédiatrie",
    location: "Sousse",
  },
  {
    id: "4",
    name: "Dr. Leila Trabelsi",
    specialty: "Ophtalmologie",
    location: "Nabeul",
  },
  {
    id: "5",
    name: "Dr. Mohamed Kacem",
    specialty: "Neurologie",
    location: "Ariana",
  },
];

const Appointment = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    // Chercher le docteur correspondant à l'ID
    const selectedDoctor = doctorsList.find((doc) => doc.id === id);
    setDoctor(selectedDoctor);
  }, [id]);

  if (!doctor) {
    return (
      <div className="text-center text-red-500 p-8">
        <Header />
        <h2 className="text-xl font-bold">Docteur non trouvé</h2>
        <p>Veuillez sélectionner un docteur valide.</p>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <section className="p-8 max-w-md mx-auto">
        <h2 className="text-2xl font-bold">{doctor.name}</h2>
        <p className="text-gray-700">
          {doctor.specialty} - {doctor.location}
        </p>

        <label className="block mt-4 text-gray-700">Nom et prénom :</label>
        <input
          type="text"
          placeholder="Entrez votre nom complet"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <label className="block mt-4 text-gray-700">
          Numéro de téléphone :
        </label>
        <input
          type="tel"
          placeholder="Entrez votre numéro de téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <label className="block mt-4 text-gray-700">Choisissez la date :</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <label className="block mt-4 text-gray-700">Choisissez l’heure :</label>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Sélectionner l'heure</option>
          <option>08:00</option>
          <option>09:00</option>
          <option>10:00</option>
          <option>11:00</option>
          <option>12:00</option>
          <option>13:00</option>
          <option>14:00</option>
        </select>

        <div className="flex justify-between mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Confirmer
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Annuler
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Appointment;
