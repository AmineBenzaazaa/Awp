"use client";
import Image from "next/image";

import AboutSectionOne from "@/components/Rysh/AboutSectionOne";
import CustomCarousel from "@/components/CustomCarousel";
import { Tabs, Tab } from "@/components/Rysh/Tabs";

import Logo from "@/app/images/page 3/Logo.png";
import Prod1 from "@/app/images/page 3/Prod1.png";
import Prod2 from "@/app/images/page 3/Prod2.png";
import Prod3 from "@/app/images/page 3/Prod3.png";
import Prod4 from "@/app/images/page 3/Prod4.png";

import Prod5 from "@/app/images/page 3/Prod5.png";
import Prod6 from "@/app/images/page 3/Prod6.png";

import Prod7 from "@/app/images/page 3/Prod7.png";
import Prod8 from "@/app/images/page 3/Prod8.png";
import Prod9 from "@/app/images/page 3/Prod9.png";

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
  const CompProd5 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime velit cumque deleniti, blanditiis minima doloremque alias odit, accusantium ut, iure labore ad minus provident expedita veniam nihil eligendi? Nisi, voluptates."
        imageSrc={Prod5}
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
        className="bg-gradient-to-r from-violet-900 via-violet-600 to-fuchsia-600 pt-[40px] pb-[60px] md:pt-[80px] md:pb-[60px] "
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
              L'HYGIENE QUTIDIENNE <br /> DE TOUTE LA FAMILLE
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
      <div>
        <div className="items-center">
          <Tabs>
            <Tab component={CompProd5} className="flex flex-row" active>
              <div className="flex items-center space-x-2 bg-white px-10">
                <Image
                  src={Prod5}
                  alt=""
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
                  alt=""
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>

            <Tab component={CompProd8}>
              <div className="flex items-center space-x-2 bg-white p-5">
                <Image
                  src={Prod8}
                  alt=""
                  className="w-full h-60 object-cover object-center "
                />
              </div>
            </Tab>
            <Tab component={CompProd9} className="flex flex-row" active>
              <div className="flex items-center space-x-2 bg-white px-10">
                <Image
                  src={Prod9}
                  alt=""
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="bg-gradient-to-r from-violet-900 via-violet-600 to-fuchsia-600">
        <Contact />
      </div>
    </>
  );
}
