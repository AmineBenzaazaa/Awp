"use client";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import AboutSectionOne from "@/components/Rysh/AboutSectionOne";
import { Tabs, Tab } from "@/components/Rysh/Tabs";

import Logo from "../images/page 3/logo.png";
import Prod1 from "../images/page 3/Papier HYGIENIQUE x4.jpg";
import Prod2 from "../images/page 3/Papier HYGIENIQUE x6.jpg";
import Prod3 from "../images/page 3/Papier HYGIENIQUE x12.jpg";
import Prod4 from "../images/page 3/Papier HYGIENIQUE x24.jpg";

import Prod5 from "../images/page 3/Essuit-tout x2.jpg";
import Prod6 from "../images/page 3/Essuit-tout x2.jpg";
import Prod7 from "../images/page 3/Essuit-tout Multiusage.jpg";

// import Prod8 from "../images/page 3/Mouchoir 300 F.jpg";

import Prod9 from "../images/page 3/Mouchoir 300 F2.jpg";
import Prod10 from "../images/page 3/Mouchoir 550 F.jpg";

import Tableimg from "../images/page 3/Table.png";

import Contact from "@/components/Contact";
import Slideshow from "@/components/Rysh/Slideshow";

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
      imageSrc: Prod9,
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
        className="bg-gradient-to-r from-[#622a81] via-[#712d84] to-[#9c2080]  pt-[40px] pb-[60px] md:pt-[180px] md:pb-[200px]"
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
            {/* Centering div */}
            <Image src={Logo} alt="Celline" width={780} height={1700} />
            <h1 className="py-6 text-2xl font-extrabold tracking-tight leading-none md:text-3xl text-white">
              Rysh offre l’accès à une large gamme de papiers qui participe à{" "}
              <div className="font-light py-4">
                l’hygiène quotidienne de toute la famille.
              </div>
            </h1>
          </div>
        </div>
      </section>
      <Slideshow trustBadge={false} slides={Hygienique} />
      <Slideshow trustBadge={false} slides={EssuiteTout} />
      <Slideshow trustBadge={false} slides={Mouchoirs} />
      <div className="px-40 py-4">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-6xl text-[#712d84]">
          Gamme <span className="font-light">Celline</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center pb-8">
        <div className="flex items-center justify-center">
          <Image src={Tableimg} className="w-[160%] h-[60%]" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#622a81] via-[#712d84] to-[#9c2080] ">
        <Contact />
      </div>
    </>
  );
}
