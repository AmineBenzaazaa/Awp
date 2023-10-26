"use client";
import Image from "next/image";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Tabs, Tab } from "@/components/Tabs";

import Logo from "../images/page 2/Logo.png";
import Prod1 from "../images/page 2/Papier HYGIENIQUE  7x2.png";
import Prod2 from "../images/page 2/Papier HYGIENIQUE x4.jpg";
import Prod3 from "../images/page 2/Papier HYGIENIQUE x12.jpg";
import Prod4 from "../images/page 2/Papier HYGIENIQUE x24.jpg";
import Prod5 from "../images/page 2/Papier HYGIENIQUE x32.jpg";

// import Prod5 from "../images/page 2/Prod5.png";
import Prod6 from "../images/page 2/Essuit-tout x1.jpg";
import Prod7 from "../images/page 2/Essuit-tout Multiusage.jpg";

import Prod8 from "../images/page 2/Mouchoir 300F.jpg";
import Prod9 from "../images/page 2/Mouchoir 300F 2 pli.jpg";
import Prod10 from "../images/page 2/Mouchoir 300F 3 pli.jpg";

import Tableimg from "../images/page 2/Table.png";

import Contact from "@/components/Contact";

export default function page() {
  const CompProd1 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Hygiénique"
        paragraph="Avec sa triple épaisseur et sa texture hyper absorbante, le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation.
        Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, 
        Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale.
        Chaque rouleau est méticuleusement élaboré 
        "
        imageSrc={Prod1}
      />
    </div>
  );
  const CompProd2 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Hygiénique"
        paragraph="Avec sa triple épaisseur et sa texture hyper absorbante, le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation.
        Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, 
        Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale.
        Chaque rouleau est méticuleusement élaboré 
        "
        imageSrc={Prod2}
      />
    </div>
  );
  const CompProd3 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Hygiénique"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime velit cumque deleniti, blanditiis minima doloremque alias odit, accusantium ut, iure labore ad minus provident expedita veniam nihil eligendi? Nisi, voluptates."
        imageSrc={Prod3}
      />
    </div>
  );
  const CompProd4 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Hygiénique"
        paragraph="Avec sa triple épaisseur et sa texture hyper absorbante, le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation.
        Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, 
        Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale.
        Chaque rouleau est méticuleusement élaboré 
        "
        imageSrc={Prod4}
      />
    </div>
  );
  const CompProd5 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Hygiénique"
        paragraph="Avec sa triple épaisseur et sa texture hyper absorbante, le papier Celline vous garantit à la fois douceur et résistance pour un confort optimal d’utilisation.
        Composé de matière première de première qualité, il se distingue par sa douceur et sa robustesse, 
        Décliné sous différentes formes pour répondre à tous les besoins et usages, Celline offre un large choix aux ménages et aux professionnelles pour une propreté optimale.
        Chaque rouleau est méticuleusement élaboré 
        "
        imageSrc={Prod5}
      />
    </div>
  );

  const CompProd6 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        paragraph="Grâce à sa composition 100% pure ouate de cellulose et à sa double épaisseur, l’essuie-tout Celline est à la fois absorbant et résistant pour de multiples usages et un confort d’utilisation optimal soit en cuisines ou en espaces de nettoyage, Découvrez notre gamme d'essuie-tout de qualité supérieure, conçus pour répondre à tous vos besoins de nettoyage. Nos essuie-tout sont la solution idéale pour une propreté impeccable dans votre maison, votre bureau ou n'importe où vous en avez besoin."
        imageSrc={Prod6}
      />
    </div>
  );
  const CompProd7 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        paragraph="Grâce à sa composition 100% pure ouate de cellulose et à sa double épaisseur, l’essuie-tout Celline est à la fois absorbant et résistant pour de multiples usages et un confort d’utilisation optimal soit en cuisines ou en espaces de nettoyage, Découvrez notre gamme d'essuie-tout de qualité supérieure, conçus pour répondre à tous vos besoins de nettoyage. Nos essuie-tout sont la solution idéale pour une propreté impeccable dans votre maison, votre bureau ou n'importe où vous en avez besoin."
        imageSrc={Prod7}
      />
    </div>
  );

  const CompProd8 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Mouchoirs"
        paragraph="CELLINE propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort d’utilisation polyvalentes Le papier mouchoirs CELLINE sont fabriqués avec une attention minutieuse pour garantir une douceur exceptionnelle contre votre peau tout en étant suffisamment résistants pour une utilisation sans souci. Laissez nos mouchoirs vous offrir une sensation de réconfort à chaque utilisation."
        imageSrc={Prod8}
      />
    </div>
  );

  const CompProd9 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Mouchoirs"
        paragraph="CELLINE propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort d’utilisation polyvalentes Le papier mouchoirs CELLINE sont fabriqués avec une attention minutieuse pour garantir une douceur exceptionnelle contre votre peau tout en étant suffisamment résistants pour une utilisation sans souci. Laissez nos mouchoirs vous offrir une sensation de réconfort à chaque utilisation."
        imageSrc={Prod9}
      />
    </div>
  );

  const CompProd10 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Mouchoirs"
        paragraph="CELLINE propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort d’utilisation polyvalentes Le papier mouchoirs CELLINE sont fabriqués avec une attention minutieuse pour garantir une douceur exceptionnelle contre votre peau tout en étant suffisamment résistants pour une utilisation sans souci. Laissez nos mouchoirs vous offrir une sensation de réconfort à chaque utilisation."
        imageSrc={Prod10}
      />
    </div>
  );

  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-r from-[#00feff] via-[#019cf8] to-[#0045f3]  pt-[40px] pb-[60px] md:pt-[180px] md:pb-[200px]"
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
          <div className="flex flex-col items-center justify-center h-full">
            {" "}
            {/* Centering div */}
            <Image src={Logo} alt="Celline" width={480} height={1300} />
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
              <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl text-white">
                Celline vous offre tout le confort d’un papier de haute <br />
                <div className="font-light">
                  qualité pour une meilleure hygiène quotidienne.
                </div>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="justify-between items-center">
          <Tabs>
            <Tab component={CompProd2}>
              <div className="flex items-center space-x-2">
                <Image
                  src={Prod2}
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
            <Tab component={CompProd1} className="flex flex-row" active>
              <div className="flex items-center space-x-2">
                <Image
                  src={Prod1}
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
            <Tab component={CompProd3}>
              <div className="flex items-center space-x-2">
                <Image
                  src={Prod3}
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
            <Tab component={CompProd4}>
              <div className="flex items-center space-x-2">
                <Image
                  src={Prod4}
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
            <Tab component={CompProd5}>
              <div className="flex items-center space-x-2">
                <Image
                  src={Prod4}
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div>
        <div className="items-center">
          <Tabs>
            <Tab component={CompProd6} className="flex flex-row" active>
              <div className="flex items-center space-x-2 bg-white px-10">
                <Image
                  src={Prod6}
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>

            <Tab component={CompProd7}>
              <div className="flex items-center space-x-2 bg-white p-5">
                <Image
                  src={Prod7}
                  className="w-full h-60 object-cover object-center "
                />
              </div>
            </Tab>

            <Tab component={CompProd6} className="flex flex-row" active>
              <div className="flex items-center space-x-2 bg-white px-10">
                <Image
                  src={Prod6}
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div>
        <div className="items-center">
          <Tabs>
            <Tab component={CompProd10} className="flex flex-row" active>
              <div className="flex items-center space-x-2 bg-white px-10">
                <Image
                  src={Prod10}
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
            <Tab component={CompProd8}>
              <div className="flex items-center space-x-2 bg-white p-5">
                <Image
                  src={Prod8}
                  className="w-full h-60 object-cover object-center "
                />
              </div>
            </Tab>
            <Tab component={CompProd9} className="flex flex-row" active>
              <div className="flex items-center space-x-2 bg-white px-10">
                <Image
                  src={Prod9}
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="px-40 py-4">
        <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-6xl text-[#0f468f]">
          Gamme <span className="font-light">Celline</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center pb-8">
        <div className="flex items-center justify-center">
          <Image src={Tableimg} className="w-[960%] h-[50%]" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#00feff] via-[#019cf8] to-[#0045f3] ">
        <Contact />
      </div>
    </>
  );
}
