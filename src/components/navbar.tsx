"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/images/SkeningeVVS.png"
            className="h-24"
            alt="Skeninge VVS"
          />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={open}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${open ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-red-700 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#omoss"
                className="block py-2 px-3 text-blue-700 hover:text-red-700"
              >
                Om oss
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="block py-2 px-3 text-blue-700 hover:text-red-700"
              >
                Våra Tjänster
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-blue-700 hover:text-red-700"
              >
                Kontakta oss
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
