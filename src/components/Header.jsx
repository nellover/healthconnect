import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="logo">
        <Link to="/" className="text-2xl font-bold">
          HealthConnect
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/doctors">Médecins</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-yellow-400 text-blue-600 px-4 py-2 rounded"
            >
              Connexion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
