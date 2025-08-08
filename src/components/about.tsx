import React from "react";

const About: React.FC = () => (
  <section
    id="omoss"
    className="flex flex-col md:flex-row items-center justify-between p-8 bg-white shadow-lg rounded-lg max-w-6xl mx-auto my-10"
  >
    <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 text-left">
      <h2 className="text-xl md:text-xl font-semibold text-red-800 mb-4">
        Om oss
      </h2>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        Skeninge VVS AB är ett VVS-företag som grundades 1986 i Skänninge. Vi
        erbjuder pålitliga tjänster inom värme, ventelation och sanitet för både
        privatpersoner och företag. Med lång erfarenhet och lokal förankring
        levererar vi trygga lösningar med hög kvalitet.
        <br />
        Vi har certifierade VVS-tekniker med lång erfarenhet och hög kompetens
        för att säkerställa professionellt utförda arbeten. Vi strävar efter att
        leverera enastående kundservice genom att vara lyhörda för kundernas
        behov, ge tydlig information och hålla hög kvalitet på våra tjänster.
        <br />
        Våra certifierade installatörer har den nödvändiga expertisen för att
        utföra VVS-arbeten på ett professionellt och noggrant sätt. Vi använder
        enbart branschgodkända material av hög kvalitet för att säkerställa
        långvariga och pålitliga VVS-lösningar.
      </p>
    </div>

    <div className="w-full md:w-1/2 flex justify-center items-center">
      <img
        src="/images/kristiantysonbosse.png"
        alt="bild"
        className="rounded-lg max-w-full h-auto"
      />
    </div>
  </section>
);

export default About;
