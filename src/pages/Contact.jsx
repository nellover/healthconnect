import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.css";
const Contact = () => {
  return (
    <div>
      <Header />
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Nom</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Envoyer
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Notre Adresse</h3>
            <p>123 Rue de la Santé, Tunis, Tunisie</p>
            <p>Téléphone: +216 71 123 456</p>
            <p>Email: contact@healthconnect.tn</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.123456789012!2d10.123456789012345!3d36.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA3JzI0LjQiTiAxMMKwMDcnMjQuNCJF!5e0!3m2!1sen!2stn!4v1631234567890!5m2!1sen!2stn"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
