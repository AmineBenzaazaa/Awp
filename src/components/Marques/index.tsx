"use client";
import React from "react";
import Link from "next/link";

const Marques = () => {
  const teamMembers = [
    {
      name: "celline",
      // role: "CEO",
      description:
        "Celline vous offre tout le confort d'un papier de haute qualité pour une meilleure hygiène quotidienne.",
      imageUrl: "/marques/Celline.PNG",
      linkColor: "text-blue-500",
      bgColor: "bg-white", // Include the background color here
    },
    {
      name: "rysh",
      // role: "Designer",
      description:
        "Rysh offre l'accès à une large gamme de papiers qui participe à l'hygiène quotidienne de toute la famille.",
      imageUrl: "/marques/Rysh.PNG",
      linkColor: "text-purple-500",
      bgColor: "bg-white", // Include the background color here
    },
    {
      name: "awp",
      // role: "Developer",
      description:
        "Africa west paper a conçu une gamme spéciale de produits multi-usages pour le nettoyage professionnel.",
      imageUrl: "/marques/Awp.png",
      linkColor: "text-green-500",
      bgColor: "bg-[#1f9356]", // Include the background color here
    },
  ];

  return (
    <section className="py-16" id="marques">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-green-600 uppercase">
          Découvrez nos marques
        </h2>
        <div className="flex flex-wrap justify-center mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="shadow-2xl rounded-lg overflow-hidden">
                <Link href={`/${member.name}`}>
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className={`w-full h-60 object-cover object-center ${member.bgColor}`}
                  />
                </Link>
                <div className="px-6 py-4">
                  <p className="mt-2 text-gray-700">{member.description}</p>
                  <a
                    href={`/${member.name}`}
                    className={`mt-4 inline-block  ${member.linkColor} hover:underline cursor-pointer`}
                  >
                    En savoir plus
                  </a>
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
