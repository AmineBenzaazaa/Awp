"use client";
import React from "react";
import Link from "next/link";

const Marques = () => {
  const teamMembers = [
    {
      name: (
        <>
          Qualité <br /> Inégalée
        </>
      ),
      description:
        "Nous nous engageons à fournir le meilleur papier hygiénique, doux pour la peau et performant pour votre bien-être.",
      linkColor: "text-green-500",
      linkTo: "/quality",
    },
    {
      name: "Responsabilité Environnementale",
      description:
        "Nous sommes conscients de notre impact sur la planète. Nos produits écoresponsables sont conçus pour minimiser notre empreinte environnementale.",
      linkColor: "text-green-500", // Purple link
      linkTo: "/environment",
    },
    {
      name: "Service Client Exceptionnel",
      description:
        "Votre satisfaction est notre priorité. Notre équipe est à votre disposition pour répondre à toutes vos questions et préoccupations.",
      linkColor: "text-green-500", // Green link
      linkTo: "/customer-service",
    },
  ];

  return (
    <section className="py-16" id="valeurs">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-white">Nos Valeurs</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                <div className="px-6 py-8 h-full flex flex-col">
                  <div className="mt-2 text-3xl font-bold text-center text-gray-700">
                    {member.name}
                  </div>
                  <p className="mt-2 text-gray-500 flex-grow overflow-hidden overflow-ellipsis py-5">
                    {member.description}
                  </p>
                  <Link
                    href={member.linkTo}
                    className={`mt-4 inline-block ${member.linkColor} hover:underline`}
                  >
                    En savoir plus
                  </Link>
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
