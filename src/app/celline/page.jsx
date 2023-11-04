"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import Logo from "../images/page 2/Logo.png";
import Prod1 from "@/app/images/page 2/Papier HYGIENIQUE  7x2.png";
import Prod2 from "@/app/images/page 2/Papier HYGIENIQUE x4.jpg";
import Prod3 from "@/app/images/page 2/Papier HYGIENIQUE x12.jpg";
import Prod4 from "@/app/images/page 2/Papier HYGIENIQUE x24.jpg";
import Prod5 from "@/app/images/page 2/Papier HYGIENIQUE x32.jpg";

// import Prod5 from "../images/page 2/Prod5.png";
import Prod6 from "../images/page 2/Essuit-tout x1.jpg";
import Prod7 from "../images/page 2/Essuit-tout Multiusage.jpg";

import Prod8 from "../images/page 2/Mouchoir 300F.jpg";
import Prod9 from "../images/page 2/Mouchoir 300F 2 pli.jpg";
import Prod10 from "../images/page 2/Mouchoir 300F 3 pli.jpg";

import Slideshow from "@/components/Slideshow";
import Contact from "@/components/Contact";

export default function page() {
  const Hygienique = [
    {
      title: "Papier",
      subTitle: "Hygiénique",
      paragraph:
        "Avec sa triple épaisseur et sa texture hyper absorbante, le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation. Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale. Chaque rouleau est méticuleusement élaboré ",
      imageSrc: Prod1,
    },
    {
      title: "Papier",
      subTitle: "Hygiénique",
      paragraph:
        "Avec sa triple épaisseur et sa texture hyper absorbante, le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation. Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale. Chaque rouleau est méticuleusement élaboré ",
      imageSrc: Prod2,
    },
    {
      title: "Papier 3",
      subTitle: "Hygiénique",
      paragraph:
        "Avec sa triple épaisseur et sa texture hyper absorbante, le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation. Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale. Chaque rouleau est méticuleusement élaboré ",
      imageSrc: Prod3,
    },
    {
      title: "Papier 3",
      subTitle: "Hygiénique",
      paragraph:
        "Avec sa triple épaisseur et sa texture hyper absorbante, le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation. Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale. Chaque rouleau est méticuleusement élaboré ",
      imageSrc: Prod4,
    },
    {
      title: "Papier 3",
      subTitle: "Hygiénique",
      paragraph:
        "Avec sa triple épaisseur et sa texture hyper absorbante, le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation. Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale. Chaque rouleau est méticuleusement élaboré ",
      imageSrc: Prod5,
    },
  ];
  const EssuiteTout = [
    {
      title: "Papier",
      subTitle: "ESSUIE-TOUT",
      paragraph:
        "Grâce à sa composition 100% pure ouate de cellulose et à sa double épaisseur, l’essuie-tout Celline est à la fois absorbant et résistant pour de multiples usages et un confort d’utilisation optimal soit en cuisines ou en espaces de nettoyage, Découvrez notre gamme d'essuie-tout de qualité supérieure, conçus pour répondre à tous vos besoins de nettoyage. Nos essuie-tout sont la solution idéale pour une propreté impeccable dans votre maison, votre bureau ou n'importe où vous en avez besoin.",
      imageSrc: Prod6,
    },
    {
      title: "Papier",
      subTitle: "ESSUIE-TOUT",
      paragraph:
        "Grâce à sa composition 100% pure ouate de cellulose et à sa double épaisseur, l’essuie-tout Celline est à la fois absorbant et résistant pour de multiples usages et un confort d’utilisation optimal soit en cuisines ou en espaces de nettoyage, Découvrez notre gamme d'essuie-tout de qualité supérieure, conçus pour répondre à tous vos besoins de nettoyage. Nos essuie-tout sont la solution idéale pour une propreté impeccable dans votre maison, votre bureau ou n'importe où vous en avez besoin.",
      imageSrc: Prod7,
    },
  ];
  const Mouchoirs = [
    {
      title: "Papier",
      subTitle: "Mouchoirs",
      paragraph:
        "CELLINE propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort d’utilisation polyvalentes Le papier mouchoirs CELLINE sont fabriqués avec une attention minutieuse pour garantir une douceur exceptionnelle contre votre peau tout en étant suffisamment résistants pour une utilisation sans souci. Laissez nos mouchoirs vous offrir une sensation de réconfort à chaque utilisation.",
      imageSrc: Prod8,
    },
    {
      title: "Papier",
      subTitle: "Mouchoirs",
      paragraph:
        "CELLINE propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort d’utilisation polyvalentes Le papier mouchoirs CELLINE sont fabriqués avec une attention minutieuse pour garantir une douceur exceptionnelle contre votre peau tout en étant suffisamment résistants pour une utilisation sans souci. Laissez nos mouchoirs vous offrir une sensation de réconfort à chaque utilisation.",
      imageSrc: Prod9,
    },
    {
      title: "Papier",
      subTitle: "Mouchoirs",
      paragraph:
        "CELLINE propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort d’utilisation polyvalentes Le papier mouchoirs CELLINE sont fabriqués avec une attention minutieuse pour garantir une douceur exceptionnelle contre votre peau tout en étant suffisamment résistants pour une utilisation sans souci. Laissez nos mouchoirs vous offrir une sensation de réconfort à chaque utilisation.",
      imageSrc: Prod10,
    },
  ];

  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-r from-[#00feff] via-[#019cf8] to-[#0045f3] pt-[40px] pb-[60px] md:pt-[180px] md:pb-[30px]"
      >
        <div
          className="wow fadeInUp mx-auto max-w-[1200px] text-center"
          data-wow-delay=".2s"
        >
          <div className="hidden md:flex absolute top-[50%] right-8 transform translate-y-[-50%] flex-col space-y-14">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={32} color="white" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={32} color="white" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={32} color="white" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} color="white" />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            {" "}
            <Image src={Logo} alt="Celline" width={380} height={1100} />
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
              <h1 className="py-6 text-2xl font-extrabold tracking-tight leading-none md:text-3xl text-white">
                Celline vous offre tout le confort d’un papier de haute <br />
                <div className="font-light py-4">
                  qualité pour une meilleure hygiène quotidienne.
                </div>
              </h1>
              <div className="hidden md:block absolute top-[50%] right-8 transform translate-y-[-50%]  flex-col space-y-14">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={32} color="white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={32} color="white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={32} color="white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={32} color="white" />
                </a>
              </div>
              <div className="block md:hidden flex-row space-x-8 mx-auto justify-center">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={32} color="white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={32} color="white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={32} color="white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={32} color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slideshow trustBadge={true} slides={Hygienique} />
      <Slideshow trustBadge={false} slides={EssuiteTout} />
      <Slideshow trustBadge={true} slides={Mouchoirs} />
      <div className="bg-gradient-to-r from-[#00feff] via-[#019cf8] to-[#0045f3]">
        <Contact />
      </div>
    </>
  );
}
