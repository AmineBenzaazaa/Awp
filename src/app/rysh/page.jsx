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

import Prod9 from "../images/page 3/Mouchoir 300 F2.jpg";
import Prod10 from "../images/page 3/Mouchoir 550 F.jpg";

import Prod11 from "../images/page 3/NAPKING Rysh.png";
import Prod12 from "../images/page 3/Rysh POKET.png";

import Tableimg from "../images/page 3/Table.png";
import bg from "../images/page 3/bg.png";

import Contact from "@/components/Contact";
import Slideshow from "@/components/Rysh/Slideshow";
import Link from "next/link";

export default function page() {
  const Hygienique = [
    {
      title: "Papier",
      subTitle: "Hygiénique  4R",
      paragraph:
        "Rysh offre un papier hygiénique 2 plis de qualité, comme il est conçu pour répondre à vos besoins en matière de confort, de propreté et de durabilité. Fabriqué à partir de matières premières de première qualité, il est doux au toucher, résistant et incroyablement absorbant        ",
      imageSrc: Prod1,
    },
    {
      title: "Papier",
      subTitle: "Hygiénique 6R",
      paragraph:
        "Rysh offre un papier hygiénique 2 plis de qualité, comme il est conçu pour répondre à vos besoins en matière de confort, de propreté et de durabilité. Fabriqué à partir de matières premières de première qualité, il est doux au toucher, résistant et incroyablement absorbant        ",
      imageSrc: Prod2,
    },
    {
      title: "Papier",
      subTitle: "Hygiénique 12R",
      paragraph:
        "Rysh offre un papier hygiénique 2 plis de qualité, comme il est conçu pour répondre à vos besoins en matière de confort, de propreté et de durabilité. Fabriqué à partir de matières premières de première qualité, il est doux au toucher, résistant et incroyablement absorbant        ",
      imageSrc: Prod3,
    },
    {
      title: "Papier",
      subTitle: "Hygiénique 24R",
      paragraph:
        "Rysh offre un papier hygiénique 2 plis de qualité, comme il est conçu pour répondre à vos besoins en matière de confort, de propreté et de durabilité. Fabriqué à partir de matières premières de première qualité, il est doux au toucher, résistant et incroyablement absorbant        ",
      imageSrc: Prod4,
    },
    
  ];

  const EssuiteTout = [
    {
      title: "Papier",
      subTitle: "ESSUIE-TOUT - MULTIUSAGE",
      paragraph: `Une polyvalence et une double épaisseur, l’essuie-tout Rysh Maxi Rooll XXL est à la fois absorbant et résistant pour de multiples usages et un confort d’utilisation optimal.

      Conçus pour simplifier le quotidien en étant une solution pratique et hautement efficace,`, 
      imageSrc: Prod7,
    },
    {
      title: "Papier",
      subTitle: "ESSUIE-TOUT 2R",
      paragraph: `L’essuie-tout Rysh est composé d’un papier 2 plis  de qualité, 100% pure ouate de cellulose, absorbant et résistant, pour tous les usages du quotidien.`,
      imageSrc: Prod5,
    },
  ];

  const Mouchoirs = [
    {
      title: "Papier",
      subTitle: "Mouchoirs 200 Feuilles",
      paragraph: `Rysh propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort.

        Conçus pour apporter un soulagement instantané, Rysh propose des  mouchoirs parfaits pour faire face aux éternuements, aux larmes, ou simplement pour se rafraîchir
        `,
      imageSrc: Prod9,
    },
    {
      title: "Papier",
      subTitle: "Mouchoirs 300 Feuilles",
      paragraph: `Rysh propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort.

        Conçus pour apporter un soulagement instantané, Rysh propose des  mouchoirs parfaits pour faire face aux éternuements, aux larmes, ou simplement pour se rafraîchir
        `,
      imageSrc: Prod9,
    },
    {
      title: "Papier",
      subTitle: "Mouchoirs 550 Feuilles",
      paragraph: `Rysh propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort.

        Conçus pour apporter un soulagement instantané, Rysh propose des  mouchoirs parfaits pour faire face aux éternuements, aux larmes, ou simplement pour se rafraîchir
        `,
      imageSrc: Prod10,
    },
  ];

  const Poket = [
    {
      title: "Papier",
      subTitle: "Poket 10",
      paragraph: `Nos papiers pocket Rysh 2 Plis, sont conçus avec votre confort à l'esprit. Ils sont doux, résistants et faciles à emporter partout où vous allez. Grâce à leur format pratique, glissez-les dans votre sac, votre poche ou gardez-les à portée de main à la maison ou au bureau ou à chaque éternuement.`,
      imageSrc: Prod12,
    },
  ];

  const Napking = [
    {
      title: "Papier",
      subTitle: "Napking 75 Serviettes",
      paragraph: `Nos serviettes Rysh en papier douces et absorbantes sont le complément parfait pour toute table, qu'il s'agisse d'un repas décontracté en famille ou d'un événement spécial.
      Elles offrent une solution de rangement discrète pour vos couverts, serviettes et autres accessoires.`,
      imageSrc: Prod11,
    },
  ];

  const NavigationItem = ({ href, label }) => (
    <li className="mr-2">
      <Link
        href={href}
        className="inline-flex items-center justify-center p-4 hover:text-[#9c2080] hover:bg-white rounded-full px-5 py-2 group active"
      >
        {label}
      </Link>
    </li>
  );

  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-r from-[#622a81] via-[#712d84] to-[#9c2080]  pt-[40px] pb-[20px] md:pt-[60px] md:pb-[100px]"
      >
        <Image
          src={bg}
          className="absolute inset-0  w-full h-full object-cover z-[10]"
        />
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
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl text-white">
              <br />
              <div className="font-light"></div>
            </h1>
            <h1 className="py-6 text-2xl font-extrabold tracking-tight leading-none md:text-3xl text-white">
              Rysh offre l’accès à une large gamme de papiers qui participe à{" "}
              <div className="font-light py-4">
                l’hygiène quotidienne de toute la famille.
              </div>
            </h1>
          </div>
        </div>
      </section>

      <div className="w-full bg-[#712d84] py-4">
        <ul className="flex max-w-min flex-row -mb-px  text-lg font-medium text-center text-white container mx-auto">
          <NavigationItem href="#Hygienique" label="Hygiénique" />
          <NavigationItem href="#EssuiteTout" label="EssuiteTout" />
          <NavigationItem href="#Mouchoirs" label="Mouchoirs" />
          <NavigationItem href="#Poket" label="Poket" />
          <NavigationItem href="#Napking" label="Napking" />
        </ul>
      </div>

      <div id="Hygienique">
        <Slideshow trustBadge={false} slides={Hygienique} />
      </div>
      <div id="EssuiteTout">
        <Slideshow trustBadge={false} slides={EssuiteTout} />
      </div>
      <div id="Mouchoirs">
        <Slideshow trustBadge={false} slides={Mouchoirs} />
      </div>
      <div id="Poket">
        <Slideshow trustBadge={false} slides={Poket} />
      </div>
      <div id="Napking">
        <Slideshow trustBadge={false} slides={Napking} />
      </div>

      <div className="px-40 py-12">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-6xl text-[#712d84]">
          Gamme <span className="font-light">Rysh</span>
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center pb-8">
        <div className="flex items-center justify-center">
          <Image alt="table" src={Tableimg} className="w-[160%] h-[60%]" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#622a81] via-[#712d84] to-[#9c2080] ">
        <Contact />
      </div>
    </>
  );
}
