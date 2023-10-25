"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import CustomCarousel from "@/components/CustomCarousel";
import { Tabs, Tab } from "@/components/Tabs";
import Image from "next/image";

export default function page() {
  const Restauration = <div className="">
    <AboutSectionOne/>
  </div>;
  const Magasine = <div className="text-center">Magasine</div>;
  const Informations = <div className="text-center">Informations</div>;

  return (
    <>
      <section
        id="home"
        className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-500 to-cyan-500 pt-[80px] pb-[80px] md:pt-[300px] md:pb-[280px] "
      >
        <div
          className="wow fadeInUp mx-auto max-w-[1200px] text-center"
          data-wow-delay=".2s"
        >
          <h1 className="text-gray-300 mb-5 text-7xl font-normal leading-tight dark:text-white sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
            Powerful <div className="font-bold"> Cleaning</div>
          </h1>
        </div>
      </section>
      <div className="py-20">
        <div className="justify-between items-center">
          <Tabs>
            <Tab component={Magasine} className="flex flex-row" active>
              <div className="flex items-center space-x-2">
                <img
                  src="/marques/Celline.PNG"
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
            <Tab component={Informations}>
              <div className="flex items-center space-x-2">
                <img
                  src="/marques/Rysh.PNG"
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
            <Tab component={Restauration}>
              <div className="flex items-center space-x-2">
                <img
                  src="/marques/AWP.PNG"
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
            <Tab component={Restauration}>
              <div className="flex items-center space-x-2">
                <img
                  src="/marques/AWP.PNG"
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* <CustomCarousel /> */}
    </>
  );
}
