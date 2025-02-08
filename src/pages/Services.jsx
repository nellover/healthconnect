import React from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import "../styles/global.css";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Consultation en ligne",
      description: "Consultez un médecin en ligne.",
      icon: "consultation.png",
    },
    {
      id: 2,
      title: "Prise de rendez-vous",
      description: "Prenez rendez-vous en quelques clics.",
      icon: "appointment.png",
    },
    {
      id: 3,
      title: "Téléconsultation",
      description: "Consultez un médecin par vidéo ou téléphone.",
      icon: "teleconsultation.png",
    },
    {
      id: 4,
      title: "Informations médicales",
      description: "Accédez à des articles et guides médicaux.",
      icon: "info.png",
    },
  ];

  return (
    <div>
      <Header />
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
