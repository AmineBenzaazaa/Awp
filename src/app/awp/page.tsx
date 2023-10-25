"use client";
import Image from "next/image";

import AboutSectionOne from "@/components/Awp/AboutSectionOne";
import { Tabs, Tab } from "@/components/AWP/Tabs";

import Logo from "../images/page 4/Logo.png";
import Prod1 from "../images/page 4/Prod1.png";
import Prod2 from "../images/page 4/Prod2.png";
import Prod3 from "../images/page 4/Prod3.png";
import Prod4 from "../images/page 4/Prod4.png";

import Contact from "@/components/Contact";

export default function page() {
  const CompProd1 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime velit cumque deleniti, blanditiis minima doloremque alias odit, accusantium ut, iure labore ad minus provident expedita veniam nihil eligendi? Nisi, voluptates."
        imageSrc={Prod1}
      />
    </div>
  );
  const CompProd2 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime velit cumque deleniti, blanditiis minima doloremque alias odit, accusantium ut, iure labore ad minus provident expedita veniam nihil eligendi? Nisi, voluptates."
        imageSrc={Prod2}
      />
    </div>
  );
  const CompProd3 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime velit cumque deleniti, blanditiis minima doloremque alias odit, accusantium ut, iure labore ad minus provident expedita veniam nihil eligendi? Nisi, voluptates."
        imageSrc={Prod3}
      />
    </div>
  );
  const CompProd4 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime velit cumque deleniti, blanditiis minima doloremque alias odit, accusantium ut, iure labore ad minus provident expedita veniam nihil eligendi? Nisi, voluptates."
        imageSrc={Prod4}
      />
    </div>
  );
  

  return (
    <>
      <section
        id="home"
        className="bg-green-600 pt-[40px] pb-[60px] md:pt-[180px] md:pb-[120px] "
      >
        <div
          className="wow fadeInUp mx-auto max-w-[1200px] text-center"
          data-wow-delay=".2s"
        >
          <div className="flex flex-col items-center justify-center h-full">
            {" "}
            {/* Centering div */}
            <Image src={Logo} alt="Celline" width={580} height={1000} />
            <h1 className="py-16 uppercase text-white mb-5 text-4xl font-bold leading-tight sm:text-xl sm:leading-tight md:leading-tight">
            AFRICA WEST PAPER A CONÇU UNE GAMME SPÉCIALE DE PRODUITS MULTI-USAGES <br /> <p className="font-extrabold"> POUR LE NETTOYAGE PROFESSIONNEL.</p>
            </h1>
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
          </Tabs>
        </div>
      </div>
      <div className="bg-green-600">
        <Contact />
      </div>
    </>
  );
}
