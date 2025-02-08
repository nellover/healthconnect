import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.css";
const NotFound = () => {
  return (
    <div>
      <Header />
      <section className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">404 - Page Non Trouvée</h2>
        <p>Désolé, la page que vous cherchez n'existe pas.</p>
        <a href="/" className="text-blue-600 underline">
          Retour à l'accueil
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
