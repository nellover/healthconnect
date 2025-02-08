import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import "../styles/global.css";

const Doctors = () => {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("");

  // Liste des 20 médecins avec spécialités différentes
  const doctors = [
    { id: 1, name: "Dr. Ahmed Ben Ali", specialty: "Cardiologie", location: "Tunis", photo: "dr_ahmed.jpg" },
    { id: 2, name: "Dr. Sara Mansour", specialty: "Dermatologie", location: "Sfax", photo: "dr_sara.jpg" },
    { id: 3, name: "Dr. Khaled Jaziri", specialty: "Pédiatrie", location: "Sousse", photo: "dr_khaled.jpg" },
    { id: 4, name: "Dr. Leila Trabelsi", specialty: "Ophtalmologie", location: "Nabeul", photo: "dr_leila.jpg" },
    { id: 5, name: "Dr. Mohamed Kacem", specialty: "Neurologie", location: "Ariana", photo: "dr_mohamed.jpg" },
    { id: 6, name: "Dr. Fatma Bouaziz", specialty: "Gynécologie", location: "Monastir", photo: "dr_fatma.jpg" },
    { id: 7, name: "Dr. Hatem Chouchane", specialty: "Orthopédie", location: "Djerba", photo: "dr_hatem.jpg" },
    { id: 8, name: "Dr. Nadia Gharbi", specialty: "Psychiatrie", location: "Tunis", photo: "dr_nadia.jpg" },
    { id: 9, name: "Dr. Youssef Slama", specialty: "Radiologie", location: "Sousse", photo: "dr_youssef.jpg" },
    { id: 10, name: "Dr. Rania Ben Amor", specialty: "ORL", location: "Gabès", photo: "dr_rania.jpg" },
    { id: 11, name: "Dr. Hamza Sassi", specialty: "Endocrinologie", location: "Bizerte", photo: "dr_hamza.jpg" },
    { id: 12, name: "Dr. Malek Louati", specialty: "Chirurgie", location: "Kairouan", photo: "dr_malek.jpg" },
    { id: 13, name: "Dr. Samia Jebali", specialty: "Urologie", location: "Tataouine", photo: "dr_samia.jpg" },
    { id: 14, name: "Dr. Karim Mahfoudh", specialty: "Hématologie", location: "Sfax", photo: "dr_karim.jpg" },
    { id: 15, name: "Dr. Mariem Zouari", specialty: "Rhumatologie", location: "Médenine", photo: "dr_mariem.jpg" },
    { id: 16, name: "Dr. Ali Ben Romdhane", specialty: "Médecine Générale", location: "Tozeur", photo: "dr_ali.jpg" },
    { id: 17, name: "Dr. Wafa Mansouri", specialty: "Oncologie", location: "Kasserine", photo: "dr_wafa.jpg" },
    { id: 18, name: "Dr. Zied Boukhris", specialty: "Anesthésie", location: "Jendouba", photo: "dr_zied.jpg" },
    { id: 19, name: "Dr. Habiba Guesmi", specialty: "Gastro-entérologie", location: "Gafsa", photo: "dr_habiba.jpg" },
    { id: 20, name: "Dr. Mehdi Ferjani", specialty: "Médecine du Sport", location: "Siliana", photo: "dr_mehdi.jpg" },
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) &&
      (specialty === "" || doctor.specialty === specialty)
  );

  return (
    <div>
      <Header />
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Trouvez un Médecin</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Rechercher un médecin..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="ml-4 p-2 border border-gray-300 rounded"
          >
            <option value="">Toutes les spécialités</option>
            {Array.from(new Set(doctors.map((d) => d.specialty))).map((spec) => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor}>
              <Link
                to={`/appointment/${doctor.id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded mt-2 inline-block"
              >
                Prendre un rendez-vous
              </Link>
            </DoctorCard>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Doctors;
