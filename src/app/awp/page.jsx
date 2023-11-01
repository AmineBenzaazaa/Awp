"use client";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import AboutSectionOne from "@/components/Awp/AboutSectionOne";
import { AwpTabs, Tab } from "@/components/Awp/AwpTabs";

import Logo from "../images/page 4/Logo.png";
import Prod1 from "../images/page 4/Papier HYGIENIQUE .jpg";
import Prod2 from "../images/page 4/Papier HYGIENIQUE X3 .jpg";
import Prod3 from "../images/page 4/Papier HYGIENIQUE X6 .jpg";
import Prod4 from "../images/page 4/Papier HYGIENIQUE X12 .jpg";
import Prod5 from "../images/page 4/Essuit-tout.jpg";

import Tableimg from "../images/page 4/Table.png";

import Contact from "@/components/Contact";

export default function page() {
  const CompProd1 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Hygiénique"
        paragraph="AWP PRO, gamme de papier à usage professionnel, conçue pour répondre aux besoins spécifiques des entreprises, des institutions et des professionnels exigeants. Notre papier à usage professionnel est le choix idéal pour maintenir l'efficacité et la productivité dans votre environnement de travail Leur composition 100% pure ouate de cellulose et leur double épaisseur assurent absorption et résistance pour un confort d’utilisation et une efficacité optimales."
        imageSrc={Prod1}
      />
    </div>
  );
  const CompProd2 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Hygiénique"
        paragraph="AWP PRO, gamme de papier à usage professionnel, conçue pour répondre aux besoins spécifiques des entreprises, des institutions et des professionnels exigeants. Notre papier à usage professionnel est le choix idéal pour maintenir l'efficacité et la productivité dans votre environnement de travail Leur composition 100% pure ouate de cellulose et leur double épaisseur assurent absorption et résistance pour un confort d’utilisation et une efficacité optimales."
        imageSrc={Prod2}
      />
    </div>
  );
  const CompProd3 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Hygiénique"
        paragraph="AWP PRO, gamme de papier à usage professionnel, conçue pour répondre aux besoins spécifiques des entreprises, des institutions et des professionnels exigeants. Notre papier à usage professionnel est le choix idéal pour maintenir l'efficacité et la productivité dans votre environnement de travail Leur composition 100% pure ouate de cellulose et leur double épaisseur assurent absorption et résistance pour un confort d’utilisation et une efficacité optimales."
        imageSrc={Prod3}
      />
    </div>
  );
  const CompProd4 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Hygiénique"
        paragraph="AWP PRO, gamme de papier à usage professionnel, conçue pour répondre aux besoins spécifiques des entreprises, des institutions et des professionnels exigeants. Notre papier à usage professionnel est le choix idéal pour maintenir l'efficacité et la productivité dans votre environnement de travail Leur composition 100% pure ouate de cellulose et leur double épaisseur assurent absorption et résistance pour un confort d’utilisation et une efficacité optimales."
        imageSrc={Prod4}
      />
    </div>
  );
  const CompProd5 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        paragraph="Explorez notre ligne d'essuie-tout professionnels AWP PRO, spécialement développés pour répondre aux normes rigoureuses des environnements commerciaux et industriels les plus exigeants. Nos essuie-tout sont l'élément essentiel pour garantir la propreté, l'efficacité et la productivité au sein de votre entreprise, de votre atelier ou de votre espace de travail. Chaque feuille est soigneusement conçue pour assurer une absorption rapide et efficace des liquides, une résistance exceptionnelle pour affronter les tâches les plus ardues, ainsi qu'une polyvalence qui satisfait une multitude de besoins professionnels. Nos essuie-tout professionnels sont le gage de performances constantes."
        imageSrc={Prod5}
      />
    </div>
  );

  return (
    <>
      <section
        id="home"
        className="relative bg-[#1f9356] pt-[40px] pb-[60px] md:pt-[180px] md:pb-[120px]"
      >
        <div
          className="wow fadeInUp mx-auto max-w-[1200px] text-center"
          data-wow-delay=".2s"
        >
          <div className="absolute top-[50%] right-8 transform translate-y-[-50%] flex flex-col space-y-14">
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
          <div className="relative flex flex-col items-center justify-center h-full">
            <Image src={Logo} alt="Celline" width={580} height={1000} />
            <h1 className="my-12 text-2xl font-extrabold tracking-tight leading-none md:text-4xl text-white">
              Africa west paper a conçu une gamme spéciale de produits
              <div className="font-light">
                multi-usages pour le nettoyage professionnel.
              </div>
            </h1>
          </div>
        </div>
      </section>
      <div>
        <div className="justify-between items-center">
          <AwpTabs>
            <Tab component={CompProd1} className="flex flex-row" active>
              <div className="flex items-center space-x-2">
                <Image
                  src={Prod1}
                  alt=""
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
            <Tab component={CompProd2}>
              <div className="flex items-center space-x-2">
                <Image
                  src={Prod2}
                  alt=""
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
            <Tab component={CompProd3}>
              <div className="flex items-center space-x-2">
                <Image
                  src={Prod3}
                  alt=""
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
            <Tab component={CompProd4}>
              <div className="flex items-center space-x-2">
                <Image
                  src={Prod4}
                  alt=""
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
            <Tab component={CompProd5}>
              <div className="flex items-center space-x-2">
                <Image
                  src={Prod4}
                  alt=""
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
          </AwpTabs>
        </div>
      </div>
      <div className="px-40 py-4">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-6xl text-[#1f9356]">
          Gamme <span className="font-light">Celline</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center pb-8">
        <div className="flex items-center justify-center">
          <Image src={Tableimg} className="w-[160%] h-[60%]" />
        </div>
      </div>
      <div className="bg-[#1f9356]">
        <Contact />
      </div>
    </>
  );
}
