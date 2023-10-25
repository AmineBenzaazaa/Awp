"use client"
import React from 'react';
import { Link } from 'react-router-dom';

const Marques = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      description: 'Celline vous offre tout le confort dun papier de haute qualité pour une meil- leure hygiène quotidienne.',
      imageUrl: '/marques/Celline.PNG', 
      linkColor: 'text-blue-500', 
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      description: 'Rysh offre laccès à une large gamme de papiers qui participe à lhygiène quotidi enne de toute la famille.',
      imageUrl: '/marques/Rysh.PNG', // Replace with the actual image URL
      linkColor: 'text-purple-500', // Purple link
    },
    {
      name: 'Bob Johnson',
      role: 'Developer',
      description: 'Africa west paper a conçu une gamme spéciale de produits multi-usages pour le nettoyage professionnel.',
      imageUrl: '/marques/AWP.PNG', // Replace with the actual image URL
      linkColor: 'text-green-500', // Green link
    },
  ];

  return (
    <section className="py-16" id='marques'>
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-green-600">Decoivrez Nos Maruques</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-60 object-cover object-center"
                />
                <div className="px-6 py-4">
                  <p className="mt-2 text-gray-700">{member.description}</p>
                  <div
                    // to={`/${index}`} // Replace with your route
                    className={`mt-4 inline-block ${member.linkColor} hover:underline`}
                  >
                    En savoir plus
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marques;
