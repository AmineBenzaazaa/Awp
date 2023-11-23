"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import Logo from "../images/page 4/Logo.png";
import Prod2 from "../images/page 4/Papier HYGIENIQUE X3 .jpg";
import Prod3 from "../images/page 4/Papier HYGIENIQUE X6 .jpg";
import Prod4 from "../images/page 4/Papier HYGIENIQUE X12 .jpg";
import Prod1 from "../images/page 4/Papier HYGIENIQUE .jpg";

import Prod5 from "../images/page 4/Essuit-tout.jpg";
import Prod6 from "../images/page 4/ZIGZAG.png";

import Tableimg from "../images/page 4/Table.png";
import WBG from "@/app/images/Objet dynamique vectoriel copie 9.png";

import Contact from "@/components/Contact";
import Values from "@/components/Values";
import Slideshow from "@/components/Awp/Slideshow";

export default function page() {
  const Hygienique = [
    {
      title: "Papier",
      subTitle: "USAGE PRO",
      tagline: "3 R - 3 Layers",
      paragraph1:
        "AWP PRO est une collection de papiers professionnels soigneusement élaborée pour satisfaire les exigences particulières des entreprises, des institutions et des professionnels les plus exigeants. Notre gamme de papiers professionnels est le choix parfait pour maintenir la productivité et l'efficacité dans votre environnement de travail.",
      paragraph2:
        "Grâce à leur composition en pure ouate de cellulose à 100% et à leur double épaisseur, ces papiers garantissent une absorption exceptionnelle et une résistance qui vous procureront un confort d'utilisation et une efficacité optimaux.",
      imageSrc: Prod2,
    },
    {
      title: "Papier",
      subTitle: "USAGE PRO",
      tagline: "6 R - 3 Layers",
      paragraph1:
        "AWP PRO est une collection de papiers professionnels soigneusement élaborée pour satisfaire les exigences particulières des entreprises, des institutions et des professionnels les plus exigeants. Notre gamme de papiers professionnels est le choix parfait pour maintenir la productivité et l'efficacité dans votre environnement de travail.",
      paragraph2:
        "Grâce à leur composition en pure ouate de cellulose à 100% et à leur double épaisseur, ces papiers garantissent une absorption exceptionnelle et une résistance qui vous procureront un confort d'utilisation et une efficacité optimaux.",
      imageSrc: Prod3,
    },
    {
      title: "Papier",
      subTitle: "USAGE PRO",
      tagline: "12 R - 3 Layers",
      paragraph1:
        "AWP PRO est une collection de papiers professionnels soigneusement élaborée pour satisfaire les exigences particulières des entreprises, des institutions et des professionnels les plus exigeants. Notre gamme de papiers professionnels est le choix parfait pour maintenir la productivité et l'efficacité dans votre environnement de travail.",
      paragraph2:
        "Grâce à leur composition en pure ouate de cellulose à 100% et à leur double épaisseur, ces papiers garantissent une absorption exceptionnelle et une résistance qui vous procureront un confort d'utilisation et une efficacité optimaux.",
      imageSrc: Prod4,
    },
    {
      title: "Papier",
      subTitle: "USAGE PRO",
      tagline: "18 R - 3 Layers",
      paragraph1:
        "AWP PRO est une collection de papiers professionnels soigneusement élaborée pour satisfaire les exigences particulières des entreprises, des institutions et des professionnels les plus exigeants. Notre gamme de papiers professionnels est le choix parfait pour maintenir la productivité et l'efficacité dans votre environnement de travail.",
      paragraph2:
        "Grâce à leur composition en pure ouate de cellulose à 100% et à leur double épaisseur, ces papiers garantissent une absorption exceptionnelle et une résistance qui vous procureront un confort d'utilisation et une efficacité optimaux.",
      imageSrc: Prod1,
    },
  ];

  const EssuiteTout = [
    {
      title: "Papier",
      subTitle: "ESSUIE-TOUT",
      tagline: "",
      paragraph1:
        "Explorez notre collection d'essuie-tout professionnels AWP PRO, spécialement Bienvenue dans notre sélection de produits AWP PRO d'essuie-tout professionnels. Cette gamme a été spécialement développée pour répondre aux normes strictes des environnements commerciaux et industriels les plus exigeants. Nos essuie-tout sont plus qu'un simple produit, ils sont essentiels pour maintenir la propreté, améliorer l'efficacité et stimuler la productivité au sein de votre entreprise, de votre atelier ou de votre espace de travail.",
      paragraph2:
        "Chaque feuille a été soigneusement conçue pour garantir une absorption rapide et efficace des liquides, une résistance exceptionnelle face aux tâches les plus ardues, et une polyvalence qui répond à une variété de besoins professionnels. Avec nos essuie-tout professionnels, vous pouvez compter sur des performances constantes et une solution fiable pour vos besoins en matière de nettoyage et d'hygiène.",
      imageSrc: Prod5,
    },
  ];

  const ZigZag = [
    {
      title: "Papier",
      subTitle: "ZigZag",
      tagline: "150 serviettes",
      paragraph1:
        "Découvrez notre gamme d'essuie-mains zigzag AWP PRO, la solution idéale pour une absorption maximale tout en préservant les ressources. Nos essuie-mains zigzag combinent parfaitement praticité et efficacité.",
      paragraph2: `Grâce aux plis en zigzag, nos essuie-mains facilitent la prise en main et l'essuyage, minimisant ainsi considérablement le gaspillage de papier. Que ce soit dans des restaurants, des cuisines, des bureaux, ou à la maison, nos essuie-mains zigzag sont adaptés à une variété de situations.

        Ils sont disponibles en lot de 150 serviettes pour répondre à vos besoins en matière de propreté et de praticité. Faites le choix de l'efficacité et de la durabilité avec nos essuie-mains zigzag AWP PRO.`,
      imageSrc: Prod6,
    },
  ];

  const NavigationItem = ({ href, label }) => (
    <li className="mr-2">
      <Link
        href={href}
        className="inline-flex items-center justify-center p-4 hover:text-[#1f9257] hover:bg-white rounded-full px-5 py-2 group active"
      >
        {label}
      </Link>
    </li>
  );

  return (
    <>
      <section
        id="home"
        className="relative bg-[#1f9257] pt-[40px] pb-[60px] md:pt-[180px] md:pb-[120px]"
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
          <div className="relative flex flex-col items-center justify-center h-full px-8 pt-8">
            <Image src={Logo} alt="Celline" width={580} height={1000} />
            <h1 className="py-6 text-3xl font-extrabold tracking-tight leading-none md:text-3xl text-white">
              Africa west paper a conçu une gamme spéciale de produits <br />
              <div className="font-light text-xl md:text-3xl p-4">
                multi-usages pour le nettoyage professionnel.
              </div>
            </h1>
          </div>
        </div>
      </section>
      <div className="w-full bg-[#1f9257] py-4">
        <ul className="flex max-w-min flex-row -mb-px  text-lg font-medium text-center text-white container mx-auto">
          <NavigationItem href="#Hygienique" label="Hygienique" />
          <NavigationItem href="#EssuiteTout" label="EssuitTout" />
          <NavigationItem href="#ZigZag" label="ZigZag" />
        </ul>
      </div>
      <div id="Hygienique">
        <Slideshow trustBadge={false} slides={Hygienique} />
      </div>
      <div id="EssuiteTout">
        <Slideshow trustBadge={false} slides={EssuiteTout} />
      </div>
      <div id="ZigZag">
        <Slideshow trustBadge={false} slides={ZigZag} />
      </div>
      <div className="p-6 sm:px-40 sm:py-12">
        <h2 className="text-5xl sm:text-7xl font-extrabold text-[#1f9257] !leading-tight uppercase">
          Gamme <span className="font-light">Celline</span>
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center pb-8">
        <div className="flex items-center justify-center px-6">
          <Image alt="table" src={Tableimg} className="w-[160%] h-[60%]" />
        </div>
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
