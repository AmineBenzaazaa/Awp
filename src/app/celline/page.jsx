"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

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
import WBG from "@/app/images/Objet dynamique vectoriel copie 9.png";

import Slideshow from "@/components/Celline/Slideshow";
import Contact from "@/components/Contact";

export default function page() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  console.log("isMobile :>> ", isMobile);

  const Hygienique = [
    {
      title: "Papier",
      subTitle: "Hygiénique",
      tagline: "4 R - 3 Layers",
      paragraph1:
        "Avec sa triple épaisseur et sa texture hyper absorbante en 100% pure ouate de cellulose , le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation.        ",
      paragraph2: `Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, 
        Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale.
        Chaque rouleau est méticuleusement élaboré 
        `,
      imageSrc: Prod2,
    },
    {
      title: "Papier",
      subTitle: "Hygiénique",
      tagline: "7+2 R - 3 Layers",
      paragraph1:
        "Avec sa triple épaisseur et sa texture hyper absorbante en 100% pure ouate de cellulose , le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation.        ",
      paragraph2: `Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, 
        Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale.
        Chaque rouleau est méticuleusement élaboré 
        `,
      imageSrc: Prod1,
    },
    {
      title: "Papier",
      subTitle: "Hygiénique",
      tagline: "12 R - 3 Layers",
      paragraph1:
        "Avec sa triple épaisseur et sa texture hyper absorbante en 100% pure ouate de cellulose , le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation.        ",
      paragraph2: `Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, 
        Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale.
        Chaque rouleau est méticuleusement élaboré 
        `,
      imageSrc: Prod3,
    },
    {
      title: "Papier",
      subTitle: "Hygiénique",
      tagline: "24 R - 3 Layers",
      paragraph1:
        "Avec sa triple épaisseur et sa texture hyper absorbante en 100% pure ouate de cellulose , le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation.        ",
      paragraph2: `Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, 
        Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale.
        Chaque rouleau est méticuleusement élaboré 
        `,
      imageSrc: Prod4,
    },
    {
      title: "Papier",
      subTitle: "Hygiénique ",
      tagline: "32 R - 3 Layers",
      paragraph1:
        "Avec sa triple épaisseur et sa texture hyper absorbante en 100% pure ouate de cellulose , le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation.        ",
      paragraph2: `Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, 
        Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale.
        Chaque rouleau est méticuleusement élaboré 
        `,
      imageSrc: Prod5,
    },
  ];

  const EssuiteTout = [
    {
      title: "Papier",
      subTitle: "ESSUIE-TOUT",
      tagline: "1 R - 3 Layers",
      paragraph1:
        "Grâce à sa composition 100% pure ouate de cellulose et à sa double épaisseur, l’essuie-tout Celline est à la fois absorbant et résistant pour de multiples usages et un confort d’utilisation optimal soit en cuisines ou en espaces de nettoyage,        ",
      paragraph2: `Découvrez notre gamme d'essuie-tout de qualité supérieure, conçus pour répondre à tous vos besoins de nettoyage. 

      Nos essuie-tout sont la solution idéale pour une propreté impeccable dans votre maison, votre bureau ou n'importe où vous en avez besoin.      
      `,
      imageSrc: Prod6,
    },
    {
      title: "Papier",
      subTitle: "ESSUIE-TOUT",
      tagline: "MULTIUSAGE",
      paragraph1:
        "Sa composition 100% pure ouate de cellulose et à sa double épaisseur, l’essuie-tout Celline Maxi Rooll XXL est à la fois absorbant et résistant pour de multiples usages et un confort d’utilisation optimal et prolongée,        ",
      paragraph2: `Chaque feuille est soigneusement élaborée pour offrir une absorption rapide et efficace des liquides, que ce soit des déversements accidentels, de la cuisine désordonnée ou des tâches ménagères exigeantes. La résistance exceptionnelle de nos essuie-tout garantit qu'ils ne se déchireront pas, même lors de tâches plus exigeantes.      `,
      imageSrc: Prod7,
    },
  ];

  const Mouchoirs = [
    {
      title: "Papier",
      subTitle: "Mouchoirs ",
      tagline: "200 Feuilles",
      paragraph1:
        "CELLINE propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort d’utilisation polyvalentes         ",
      paragraph2: `Le papier mouchoirs CELLINE sont fabriqués avec une attention minutieuse pour garantir une douceur exceptionnelle contre votre peau tout en étant suffisamment résistants pour une utilisation sans souci. Laissez nos mouchoirs vous offrir une sensation de réconfort à chaque utilisation.      `,
      imageSrc: Prod8,
    },
    {
      title: "Papier",
      subTitle: "Mouchoirs",
      tagline: "300 Feuilles",
      paragraph1:
        "CELLINE propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort d’utilisation polyvalentes         ",
      paragraph2: `Le papier mouchoirs CELLINE sont fabriqués avec une attention minutieuse pour garantir une douceur exceptionnelle contre votre peau tout en étant suffisamment résistants pour une utilisation sans souci. Laissez nos mouchoirs vous offrir une sensation de réconfort à chaque utilisation.      `,
      imageSrc: Prod8,
    },
    {
      title: "Papier",
      subTitle: "Mouchoirs",
      tagline: "550 Feuilles",
      paragraph1:
        "CELLINE propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort d’utilisation polyvalentes         ",
      paragraph2: `Le papier mouchoirs CELLINE sont fabriqués avec une attention minutieuse pour garantir une douceur exceptionnelle contre votre peau tout en étant suffisamment résistants pour une utilisation sans souci. Laissez nos mouchoirs vous offrir une sensation de réconfort à chaque utilisation.      `,
      imageSrc: Prod10,
    },
  ];

  const Poket = [
    {
      title: "Papier",
      subTitle: "Poket",
      tagline: "10 Mouchoirs - 3 Layers",
      paragraph1:
        "Découvrez les papiers pocket CELLINE, spécialement conçus pour essuyer le nez, offrant une solution pratique et douce pour faire face au quotidien, que ce soit pendant la saison du rhume, en cas d'allergies prononcées ou simplement pour rafraîchir.  ",
      paragraph2: `Nos papiers pocket sont élaborés en pensant à votre confort. Ils sont doux, résistants et faciles à emporter partout où vous allez. Grâce à leur format compact, glissez-les dans votre sac, votre poche, ou gardez-les à portée de main à la maison ou au bureau, prêts à être utilisés à chaque éternuement.      `,
      imageSrc: Prod11,
    },
  ];

  const Napking = [
    {
      title: "Papier",
      subTitle: "Napking",
      tagline: "75 Serviette ",
      paragraph1:
        "Explorez la variété de serviettes en papier CELLINE, soigneusement conçues pour marier délicatesse et une remarquable capacité d'absorption. Ces serviettes sont le complément parfait pour n'importe quelle table, que ce soit pour un repas familial décontracté ou une occasion spéciale. De plus, elles constituent une solution discrète pour ranger vos couverts, serviettes et autres accessoires de table.        ",
      paragraph2: `Plongez dans notre sélection de produits pour découvrir précisément ce qui convient à vos besoins. Chez CELLINE, la qualité est notre priorité absolue, et nous nous engageons à répondre à vos besoins en matière de papier de table. Nos serviettes, disponibles en lot de 75, ajoutent une touche de confort et d'élégance à chaque événement, qu'il s'agisse d'une réception ou d'un repas en famille.      `,
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
            <Image
              alt="Celline"
              src={Logo}
              width={isMobile ? 240 : 480} // Set different widths for mobile and non-mobile
              height={isMobile ? 550 : 1100} // Set different heights for mobile and non-mobile
            />
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
              <h1 className="py-6 text-3xl font-extrabold tracking-tight leading-none md:text-3xl text-white">
                Celline vous offre tout le confort d’un papier <br />
                <div className="font-light text-xl md:text-3xl p-4">
                  De haute Qualité pour une meilleure hygiène quotidienne.
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
      <div className="w-full bg-[#0f4690] py-4 sm:block hidden">
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
        <Slideshow trustBadge={true} slides={EssuiteTout} />
      </div>
      <div className="p-6 sm:px-40 sm:py-12">
        <h2 className="text-5xl sm:text-7xl font-extrabold text-[#0E4690] !leading-tight uppercase">
          Gamme <span className="font-light">Celline</span>
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center pb-8">
        <div className="flex items-center justify-center">
          <Image alt="table" src={Tableimg} className="w-[160%] h-[60%]" />
        </div>
      </div>
      <div id="Mouchoirs">
        <Slideshow trustBadge={true} slides={Mouchoirs} />
      </div>
      <div id="Poket">
        <Slideshow trustBadge={true} slides={Poket} />
      </div>
      <div id="Napking">
        <Slideshow trustBadge={true} slides={Napking} />
      </div>

      <section
        id="home"
        className="from-[#22a45b] via-[#2f9e98] to-[#3f8ec4] relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] py-[20px] md:pt-[100px] md:pb-[20px] "
      >
        <div className="absolute top-[80%] right-0 transform translate-y-[-50%] flex flex-col space-y-14">
          <Image src={WBG} alt="Africa West Paper" height={600} />
        </div>
        <Contact />
      </section>
    </>
  );
}
