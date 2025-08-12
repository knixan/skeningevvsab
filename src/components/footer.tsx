import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-[#2b2a29] rounded-lg shadow-sm m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3">
          <img
            src="/images/skeningevvs-vit.png"
            className="h-16"
            alt="Liten Logga"
          />
        </a>

        <div className="container mx-auto px-4">
          <span className="block text-sm text-gray-300">
            Postadress: Folkungagatan 35 E, 595 32 MJÖLBY
            <br />
            Besöksadress: Fabriksgatan 6, 596 33 Skänninge
            <br />
            E-post:{" "}
            <a
              href="mailto:skeningevvsab@msn.se"
              className="text-blue-400 hover:underline"
            >
              skeningevvsab@msn.se
            </a>
            <br />
            Bosse Engelke:{" "}
            <a
              href="tel:+46708417290"
              className="text-blue-400 hover:underline"
            >
              0708-417290
            </a>
            <br />
            Kristian Engelke:{" "}
            <a
              href="tel:+46735358075"
              className="text-blue-400 hover:underline"
            >
              0735-358075
            </a>
          </span>
        </div>

        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
          <li>
            <a href="#omoss" className="hover:underline me-4 md:me-6">
              Om oss
            </a>
          </li>
          <li>
            <a href="#service" className="hover:underline me-4 md:me-6">
              Våra Tjänster
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline me-4 md:me-6">
              Kontakt
            </a>
          </li>
        </ul>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto" />
      <span className="block text-sm text-white sm:text-center">
        © 1986 Skeninge VVS AB. All Rights Reserved.{" "}
        <a href="https://kodochdesign.se" className="hover:underline">
          Design by Kod och Design
        </a>
        .
      </span>
    </div>
  </footer>
);

export default Footer;
