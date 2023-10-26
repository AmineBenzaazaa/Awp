"use client";
import Image from "next/image";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import CustomCarousel from "@/components/CustomCarousel";
import { Tabs, Tab } from "@/components/Tabs";

import Logo from "../images/page 2/Logo.png";
import Prod1 from "../images/page 2/Papier HYGIENIQUE  7x2.png";
import Prod2 from "../images/page 2/Papier HYGIENIQUE x4.jpg";
import Prod3 from "../images/page 2/Papier HYGIENIQUE x12.jpg";
import Prod4 from "../images/page 2/Papier HYGIENIQUE x24.jpg";
import Prod5 from "../images/page 2/Papier HYGIENIQUE x32.jpg";

// import Prod5 from "../images/page 2/Prod5.png";
import Prod6 from "../images/page 2/Prod6.png";

import Prod7 from "../images/page 2/Prod7.png";
import Prod8 from "../images/page 2/Prod8.png";
import Prod9 from "../images/page 2/Prod9.png";
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
        "imageSrc={Prod2}
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
        "imageSrc={Prod4}
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
        "imageSrc={Prod5}
      />
    </div>
  );
  const CompProd6 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime velit cumque deleniti, blanditiis minima doloremque alias odit, accusantium ut, iure labore ad minus provident expedita veniam nihil eligendi? Nisi, voluptates."
        imageSrc={Prod6}
      />
    </div>
  );

  const CompProd7 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime velit cumque deleniti, blanditiis minima doloremque alias odit, accusantium ut, iure labore ad minus provident expedita veniam nihil eligendi? Nisi, voluptates."
        imageSrc={Prod7}
      />
    </div>
  );
  const CompProd8 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime velit cumque deleniti, blanditiis minima doloremque alias odit, accusantium ut, iure labore ad minus provident expedita veniam nihil eligendi? Nisi, voluptates."
        imageSrc={Prod8}
      />
    </div>
  );
  const CompProd9 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime velit cumque deleniti, blanditiis minima doloremque alias odit, accusantium ut, iure labore ad minus provident expedita veniam nihil eligendi? Nisi, voluptates."
        imageSrc={Prod9}
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
          <div className="flex flex-col items-center justify-center h-full">
            {" "}
            {/* Centering div */}
            <Image src={Logo} alt="Celline" width={380} height={1000} />
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
              <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl  dark:text-white">
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
            <Tab component={CompProd1} className="flex flex-row" active>
              <div className="flex items-center space-x-2">
                <Image
                  src={Prod1}
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
            <Tab component={CompProd2}>
              <div className="flex items-center space-x-2">
                <Image
                  src={Prod2}
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
            <Tab component={CompProd5} className="flex flex-row" active>
              <div className="flex items-center space-x-2 bg-white px-10">
                <Image
                  src={Prod5}
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>

            <Tab component={CompProd6}>
              <div className="flex items-center space-x-2 bg-white p-5">
                <Image
                  src={Prod6}
                  className="w-full h-60 object-cover object-center "
                />
              </div>
            </Tab>
            <Tab component={CompProd5} className="flex flex-row" active>
              <div className="flex items-center space-x-2 bg-white px-10">
                <Image
                  src={Prod5}
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
            <Tab component={CompProd7} className="flex flex-row" active>
              <div className="flex items-center space-x-2 bg-white px-10">
                <Image
                  src={Prod7}
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
      <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-500 to-cyan-500">
        <Contact />
      </div>
    </>
  );
}
