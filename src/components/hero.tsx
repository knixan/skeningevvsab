import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      {/* Mobil */}
      <div className="block md:hidden bg-white rounded-lg shadow-sm m-4 relative z-10 flex flex-col items-center text-center px-4 pt-10">
        <h1 className="mb-4 text-4xl font-extrabold text-red-700 leading-none tracking-tight">
          Din lokala expert på VVS!
        </h1>
        <p className="mb-6 text-lg font-semibold text-blue-700">
          Små i storlek – stora på service
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-5 py-3 m-4 text-base font-medium bg-red-700 text-white rounded-lg"
        >
          Kontakta oss
          <svg
            className="w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <div className="flex justify-center">
          <img
            className="h-auto max-w-full"
            src="/images/skeningebuss2.png"
            alt="Skeninge VVS Rörbuss"
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex h-screen justify-center items-center bg-gray-100">
        <div className="relative h-full w-full">
          <img
            src="/images/skeningebuss2.png"
            alt="Skeninge VVS Rörbuss"
            className="h-full object-contain w-full"
          />
          <div className="absolute inset-0 flex flex-col text-white items-center">
            <div className="pt-10 text-center px-4">
              <h1 className="mb-4 text-4xl font-extrabold text-red-700 md:text-6xl lg:text-6xl">
                Din lokala expert på VVS!
              </h1>
              <p className="mb-6 text-lg font-semibold text-blue-700 lg:text-2xl">
                Små i storlek – stora på service
              </p>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium bg-red-700 text-white rounded-lg"
              >
                Kontakta oss
                <svg
                  className="w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
