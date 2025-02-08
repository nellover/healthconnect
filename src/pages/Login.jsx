import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajouter la logique de connexion ici
  };

  return (
    <div>
      <Header />
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Connexion</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Se Connecter
          </button>

          {/* Lien vers la page d'inscription */}
          <p className="mt-4 text-center text-gray-600">
            Pas encore de compte ?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Inscrivez-vous ici
            </Link>
          </p>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
