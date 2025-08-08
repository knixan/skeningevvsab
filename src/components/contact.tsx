import React from "react";

const PersonCard: React.FC<{
  img: string;
  name: string;
  title: string;
  phone?: string;
  mail?: string;
}> = ({ img, name, title, phone, mail }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
    <img
      className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-300"
      src={img}
      alt={name}
    />
    <h3 className="text-xl font-semibold text-red-800 mb-1">{name}</h3>
    <p className="text-gray-600 mb-4">{title}</p>

    {phone && (
      <div className="flex items-center mb-2">
        <i className="fas fa-phone text-gray-500 mr-2"></i>
        <a href={`tel:${phone}`} className="text-blue-600 hover:underline">
          {phone}
        </a>
      </div>
    )}

    {mail && (
      <div className="flex items-center">
        <i className="fas fa-envelope text-gray-500 mr-2"></i>
        <a href={`mailto:${mail}`} className="text-blue-600 hover:underline">
          {mail}
        </a>
      </div>
    )}
  </div>
);

const Contact: React.FC = () => (
  <section id="contact" className="flex flex-wrap justify-center gap-6 p-6">
    <PersonCard
      img="/images/kristian.png"
      name="Kristian Engelke"
      title="VVS-montör"
      phone="+46735358075"
      mail="skeningevvsab@msn.se"
    />
    <PersonCard
      img="/images/bosse.png"
      name="Bosse Engelke"
      title="Ägare/VVS-montör"
      phone="+46708417290"
      mail="skeningevvsab@msn.se"
    />
    <PersonCard
      img="/images/nina.png"
      name="Nina Engelke"
      title="Ägare/Administratör"
      mail="skeningevvsab@msn.se"
    />
    <PersonCard
      img="/images/tyson.png"
      name="Tyson"
      title="VVS-Vovve/Säkerhetsansvarig"
      mail="skeningevvsab@msn.se"
    />

    {/* Google map */}
    <div className="w-full mt-6">
      <div className="w-full h-96">
        <iframe
          className="w-full h-full"
          src="https://maps.google.com/maps?f=q&source=embed&hl=sv&q=58.386333,15.085444&output=embed"
          frameBorder={0}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </div>
  </section>
);

export default Contact;
