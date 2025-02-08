import React from "react";
import { MessageCircle } from "lucide-react"; // Importing MessageCircle for chat and Robot for chatbot
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import ServiceCard from "../components/ServiceCard";
import DoctorCard from "../components/DoctorCard";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import "../styles/global.css";

const Home = () => {
  const services = [
    {
      id: 1,
      title: "Consultation en ligne",
      description: "Consultez un médecin en ligne.",
      icon: "consultation.png",
    },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Smith",
      specialty: "Cardiologie",
      photo: "dr_smith.jpg",
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "Comment prévenir les maladies cardiaques",
      image: "article1.jpg",
      summary: "Découvrez nos conseils...",
    },
  ];

  return (
    <div className="relative">
      <Header />
      <Carousel />
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Médecins Populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Derniers Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
      <Footer />

      {/* Floating buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4">
        {/* Chatbot button */}
        <button
          className="bg-green-500 text-black p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
          onClick={() => alert("Chatbot en ligne")}
          aria-label="Chatbot en ligne"
        >
          <MessageCircle size={24} />
        </button>

        {/* Online chat button */}
        <button
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition flex items-center justify-center"
          onClick={() => alert("Chat en ligne avec un docteur")}
          aria-label="Chat en ligne"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default Home;
