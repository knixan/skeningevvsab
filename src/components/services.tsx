import React from "react";

const Services: React.FC = () => (
  <section
    id="service"
    className="flex flex-col md:flex-row items-center justify-between p-8 bg-white shadow-lg rounded-lg max-w-6xl mx-auto my-10"
  >
    <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 text-left">
      <h2 className="text-2xl font-semibold text-red-700 mb-6">Tjänster</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-700">
          🔧 Rörinstallationer
        </h3>
        <p className="text-base font-normal text-gray-800 leading-relaxed">
          Nyinstallation, omdragning och byte av vatten- och avloppsledningar i
          kök, badrum och hela fastigheter.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-800">🔥 Värmesystem</h3>
        <p className="text-base font-normal text-gray-800 leading-relaxed">
          Installation, service och felsökning av värmepumpar, radiatorer och
          golvvärme. Vi hjälper dig även att sänka dina uppvärmningskostnader
          med smarta lösningar.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-800">
          🚿 Badrumsrenovering
        </h3>
        <p className="text-base font-normal text-gray-800 leading-relaxed">
          Vi utför allt VVS-arbete vid badrumsrenoveringar enligt gällande
          branschregler. Montering av WC, dusch, handfat och badkar.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-800">
          🍽️ Köksinstallationer
        </h3>
        <p className="text-base font-normal text-gray-800 leading-relaxed">
          Professionell installation av diskmaskin, köksblandare, vattenlås och
          avlopp vid köksrenovering eller nyinstallation.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-800">
          🛠️ Service & underhåll
        </h3>
        <p className="text-base font-normal text-gray-800 leading-relaxed">
          Vi underhåller och kontrollerar ditt VVS-system för att förebygga
          problem, spara energi och förlänga livslängden.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-800">
          📦 Installation av vitvaror & apparater
        </h3>
        <p className="text-base font-normal text-gray-800 leading-relaxed">
          Anslutning av tvättmaskin, ismaskin, kaffemaskin och andra
          vattenanslutna produkter.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-800">
          🌱 Energisparande lösningar
        </h3>
        <p className="text-base font-normal text-gray-800 leading-relaxed">
          Vi hjälper dig hitta miljövänliga alternativ som sänker din
          energiförbrukning och gör skillnad i plånboken.
        </p>
      </div>
    </div>

    <div className="w-full md:w-1/2 flex justify-center items-center">
      <img
        src="/images/skeningevvs-frontbuss.png"
        alt="bild"
        className="rounded-lg max-w-full h-auto"
      />
    </div>
  </section>
);

export default Services;
