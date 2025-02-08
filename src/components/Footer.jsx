import React from "react";
import "../styles/global.css";
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-8">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-bold">HealthConnect</h3>
          <p>Votre santé, notre priorité.</p>
        </div>
        {/* <div>
          <h3 className="text-xl font-bold">Liens Rapides</h3>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/doctors">Médecins</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
