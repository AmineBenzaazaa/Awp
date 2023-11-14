"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Link from "next/link";

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
import Prod6 from "@/app/images/page 2/Essuit-tout x1.jpg";
import Prod7 from "@/app/images/page 2/Essuit-tout Multiusage.jpg";

import Prod8 from "@/app/images/page 2/Mouchoir 300F.jpg";
import Prod9 from "@/app/images/page 2/Mouchoir 300F 2 pli.jpg";
import Prod10 from "@/app/images/page 2/Mouchoir 550 F.jpg";

import Prod11 from "@/app/images/page 2/CELLINE POKET.png";

import Prod12 from "@/app/images/page 2/NAPKING CELLINE.png";

import Tableimg from "../images/page 2/Table.png";

import Slideshow from "@/components/Celline/Slideshow";
import Contact from "@/components/Contact";

export default function page() {
  const Hygienique = [
    {
      title: "Papier",
      subTitle: "Hygiénique 4 R",
      paragraph: `Papier hygiénique 4 Rouleaux Celline : Découvrez le luxe de notre papier Celline, doté de triple épaisseur et d'une texture hyper absorbante en pure ouate de cellulose. Cette option pratique et haut de gamme est disponible en format 4 rouleaux.`,
      imageSrc: Prod2,
    },
    {
      title: "Papier",
      subTitle: "Hygiénique 7+2 R",
      paragraph: `Papier hygiénique 7+2 Rouleaux Celline : Profitez d'une sensation de douceur et de résistance grâce à notre papier triple épaisseur en pure ouate de cellulose. Idéal pour une hygiène quotidienne, il est disponible en format 7+2 rouleaux. `,

      imageSrc: Prod1,
    },
    {
      title: "Papier 3",
      subTitle: "Hygiénique 12 R",
      paragraph: `Papier hygiénique 12 Rouleaux Celline : Optez pour notre format généreux de 12 rouleaux, offrant une douceur inégalée et une résistance fiable grâce à sa triple épaisseur et à sa texture absorbante en pure ouate de cellulose.      `,
      imageSrc: Prod3,
    },
    {
      title: "Papier 3",
      subTitle: "Hygiénique 24 R",
      paragraph: `Papier hygiénique 24 Rouleaux Celline : Pour un approvisionnement à long terme, choisissez notre format économique de 24 rouleaux. Vous bénéficierez toujours de la triple épaisseur et de la délicate texture en pure ouate de cellulose.      `,
      imageSrc: Prod4,
    },
    {
      title: "Papier 3",
      subTitle: "Hygiénique 32 R",
      paragraph: `Papier hygiénique 32 Rouleaux Celline : Pour allier praticité et qualité, notre format généreux de 32 rouleaux offre un confort optimal au quotidien, grâce à sa triple épaisseur et à sa texture en pure ouate de cellulose de première qualité.`,
      imageSrc: Prod5,
    },
  ];

  const EssuiteTout = [
    {
      title: "Papier",
      subTitle: "ESSUIE-TOUT 1R",
      paragraph: `Découvrez l'essuie-tout Celline, fabriqué à partir de 100% de pure ouate de cellulose et doté d'une double épaisseur. Il combine une absorption exceptionnelle et une résistance pour une polyvalence optimale, que ce soit en cuisine ou pour le nettoyage. Explorez notre gamme d'essuie-tout de qualité supérieure, conçus pour répondre à tous vos besoins de nettoyage. Nos essuie-tout sont la solution idéale pour maintenir une propreté impeccable dans votre maison, au bureau, ou partout où vous en avez besoin`,
      imageSrc: Prod6,
    },
    {
      title: "Papier",
      subTitle: "ESSUIE-TOUT - MULTIUSAGE",
      paragraph:
        "Découvrez l'essuie-tout Celline, fabriqué à partir de 100% de pure ouate de cellulose et doté d'une double épaisseur. Il combine une absorption exceptionnelle et une résistance pour une polyvalence optimale, que ce soit en cuisine ou pour le nettoyage. Explorez notre gamme d'essuie-tout de qualité supérieure, conçus pour répondre à tous vos besoins de nettoyage. Nos essuie-tout sont la solution idéale pour maintenir une propreté impeccable dans votre maison, au bureau, ou partout où vous en avez besoin.",
      imageSrc: Prod7,
    },
  ];
  
  const Mouchoirs = [
    {
      title: "Papier",
      subTitle: "Mouchoirs 200 Feuilles",
      paragraph:
        "CELLINE propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort d’utilisation polyvalentes Le papier mouchoirs CELLINE sont fabriqués avec une attention minutieuse pour garantir une douceur exceptionnelle contre votre peau tout en étant suffisamment résistants pour une utilisation sans souci. Laissez nos mouchoirs vous offrir une sensation de réconfort à chaque utilisation.",
      imageSrc: Prod8,
    },
    {
      title: "Papier",
      subTitle: "Mouchoirs 300 Feuilles",
      paragraph:
        "CELLINE propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort d’utilisation polyvalentes Le papier mouchoirs CELLINE sont fabriqués avec une attention minutieuse pour garantir une douceur exceptionnelle contre votre peau tout en étant suffisamment résistants pour une utilisation sans souci. Laissez nos mouchoirs vous offrir une sensation de réconfort à chaque utilisation.",
      imageSrc: Prod8,
    },
    {
      title: "Papier",
      subTitle: "Mouchoirs 550 Feuilles",
      paragraph:
        "CELLINE propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort d’utilisation polyvalentes Le papier mouchoirs CELLINE sont fabriqués avec une attention minutieuse pour garantir une douceur exceptionnelle contre votre peau tout en étant suffisamment résistants pour une utilisation sans souci. Laissez nos mouchoirs vous offrir une sensation de réconfort à chaque utilisation.",
      imageSrc: Prod10,
    },
  ];
  const Poket = [
    {
      title: "Papier",
      subTitle: "Poket",
      paragraph: `Nos papiers pocket CELLINE 3 plis, pour essuyer le nez sont le choix idéal pour tous ceux qui recherchent une solution pratique et douce pour affronter le quotidien, qu'il s'agisse de saison du rhume, de fortes allergies ou tout simplement d'un besoin de fraîcheur.
      Nos papiers pocket sont conçus avec votre confort à l'esprit. Ils sont doux, résistants et faciles à emporter partout où vous allez. Grâce à leur format pratique, glissez-les dans votre sac, votre poche ou gardez-les à portée de main à la maison ou au bureau ou à chaque éternuement.`,
      imageSrc: Prod11,
    },
  ];
  const Napking = [
    {
      title: "Papier",
      subTitle: "Napking",
      paragraph:
        "CELLINE propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort d’utilisation polyvalentes Le papier mouchoirs CELLINE sont fabriqués avec une attention minutieuse pour garantir une douceur exceptionnelle contre votre peau tout en étant suffisamment résistants pour une utilisation sans souci. Laissez nos mouchoirs vous offrir une sensation de réconfort à chaque utilisation.",
      imageSrc: Prod12,
    },
  ];

  const NavigationItem = ({ href, label }) => (
    <li className="mr-2">
      <Link
        href={href}
        className="inline-flex items-center justify-center p-4 hover:text-[#0f4690] hover:bg-white rounded-full px-5 py-2 group active"
      >
        {label}
      </Link>
    </li>
  );

  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-r from-[#0045f3] via-[#2b64f3] to-[#019cf8] pt-[40px] pb-[60px] md:pt-[180px] md:pb-[30px]"
      >
        <div
          className="wow fadeInUp mx-auto max-w-[1200px] text-center"
          data-wow-delay=".2s"
        >
          <div className="absolute top-[40%] right-8 transform translate-y-[-50%] flex flex-col space-y-14"></div>
          <div className="flex flex-col items-center justify-center h-full">
            {" "}
            <Image src={Logo} alt="Celline" width={480} height={1100} />
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
              <h1 className="py-6 text-2xl font-extrabold tracking-tight leading-none md:text-3xl text-white">
                Celline vous offre tout le confort d’un papier de haute <br />
                <div className="font-light py-4">
                  qualité pour une meilleure hygiène quotidienne.
                </div>
              </h1>
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
            </div>
          </div>
        </div>
      </section>
      {/* <div className={`header top-0 left-0 z-40 flex w-full items-center  bg-gray-900 bg-opacity-20 ${
          sticky
            ? "!fixed !z-[9999] shadow-sticky backdrop-blur-sm !transition "
            : "absolute"
        }`}

      </div> */}
      <div className="w-full bg-[#0f4690] py-4">
        <ul className="flex max-w-min flex-row -mb-px  text-lg font-medium text-center text-white container mx-auto">
          <NavigationItem href="#Hygienique" label="Hygiénique" />
          <NavigationItem href="#EssuiteTout" label="EssuiteTout" />
          <NavigationItem href="#Mouchoirs" label="Mouchoirs" />
          <NavigationItem href="#Poket" label="Poket" />
          <NavigationItem href="#Napking" label="Napking" />
        </ul>
      </div>

      <div id="Hygienique">
        <Slideshow trustBadge={true} slides={Hygienique} />
      </div>
      <div id="EssuiteTout">
        <Slideshow trustBadge={false} slides={EssuiteTout} />
      </div>
      <div id="Mouchoirs">
        <Slideshow trustBadge={true} slides={Mouchoirs} />
      </div>
      <div id="Poket">
        <Slideshow trustBadge={false} slides={Poket} />
      </div>
      <div id="Napking">
        <Slideshow trustBadge={false} slides={Napking} />
      </div>

      <div className="px-40 py-12">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-6xl text-[#0f4690]">
          Gamme <span className="font-light">Celline</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center pb-8">
        <div className="flex items-center justify-center">
          <Image alt="table" src={Tableimg} className="w-[160%] h-[60%]" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#00feff] via-[#019cf8] to-[#0045f3]">
        <Contact />
      </div>
    </>
  );
}
