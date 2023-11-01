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

export default function page() {
  const CompProd1 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
          subTitle="Hygiénique"
        paragraph="Rysh offre un papier hygiénique 2 plis de qualité, une composition 100% pure ouate et une texture lisse qui garan un confort d’utilisation à toute la famille."
        imageSrc={Prod1}
      />
    </div>
  );
  const CompProd2 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Hygiénique"
        paragraph="Rysh offre un papier hygiénique 2 plis de qualité, une composition 100% pure ouate et une texture lisse qui garan un confort d’utilisation à toute la famille."
        imageSrc={Prod2}
      />
    </div>
  );
  const CompProd3 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Hygiénique"
        paragraph="Rysh offre un papier hygiénique 2 plis de qualité, une composition 100% pure ouate et une texture lisse qui garan un confort d’utilisation à toute la famille."
        imageSrc={Prod3}
      />
    </div>
  );
  const CompProd4 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Hygiénique"
        paragraph="Rysh offre un papier hygiénique 2 plis de qualité, une composition 100% pure ouate et une texture lisse qui garan un confort d’utilisation à toute la famille."
        imageSrc={Prod4}
      />
    </div>
  );

  const CompProd5 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        // subTitle2="Multiusage"
        paragraph="L’essuie-tout Rysh est composé d’un papier 2 plis  de qualité, 100% pure ouate de cellulose, absorbant et résistant, pour tous les usages du quotidien. Rysh Essuie-tout c’est l'outil parfait pour maintenir la propreté et l'efficacité dans votre maison, votre lieu de travail ou tout endroit où vous en avez besoin."
        imageSrc={Prod5}
      />
    </div>
  );
  const CompProd6 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        // subTitle2="Multiusage"
        paragraph="L’essuie-tout Rysh est composé d’un papier 2 plis  de qualité, 100% pure ouate de cellulose, absorbant et résistant, pour tous les usages du quotidien. Rysh Essuie-tout c’est l'outil parfait pour maintenir la propreté et l'efficacité dans votre maison, votre lieu de travail ou tout endroit où vous en avez besoin."
        imageSrc={Prod6}
      />
    </div>
  );
  const CompProd7 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="ESSUIE-TOUT"
        subTitle2="Multiusage"
        paragraph="L’essuie-tout Rysh est composé d’un papier 2 plis  de qualité, 100% pure ouate de cellulose, absorbant et résistant, pour tous les usages du quotidien. Rysh Essuie-tout c’est l'outil parfait pour maintenir la propreté et l'efficacité dans votre maison, votre lieu de travail ou tout endroit où vous en avez besoin."
        imageSrc={Prod7}
      />
    </div>
  );

  const CompProd8 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Mouchoirs"
        paragraph="Rysh propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort. Conçus pour apporter un soulagement instantané, Rysh propose des  mouchoirs parfaits pour faire face aux éternuements, aux larmes, ou simplement pour se rafraîchir"
        imageSrc={Prod10}
      />
    </div>
  );
  const CompProd9 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Mouchoirs"
        paragraph="Rysh propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort. Conçus pour apporter un soulagement instantané, Rysh propose des  mouchoirs parfaits pour faire face aux éternuements, aux larmes, ou simplement pour se rafraîchir"
        imageSrc={Prod9}
      />
    </div>
  );

  const CompProd10 = (
    <div className="">
      <AboutSectionOne
        title="Papier"
        subTitle="Mouchoirs"
        paragraph="Rysh propose une gamme de mouchoirs sous plusieurs formats pour accompagner vos besoins au quotidien. Un papier de qualité qui assure douceur et confort. Conçus pour apporter un soulagement instantané, Rysh propose des  mouchoirs parfaits pour faire face aux éternuements, aux larmes, ou simplement pour se rafraîchir"
        imageSrc={Prod10}
      />
    </div>
  );

  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-r from-[#8800ff] via-[#6c04fe] to-[#4307ff]  pt-[40px] pb-[60px] md:pt-[180px] md:pb-[200px]"
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
            <Image src={Logo} alt="Celline" width={780} height={1700} />
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl text-white">
              Rysh offre l’accès à une large gamme de papiers qui participe à{" "}
              <br />
              <div className="font-light">
                l’hygiène quotidienne de toute la famille.
              </div>
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
            <Tab component={CompProd7} className="flex flex-row" active>
              <div className="flex items-center space-x-2 bg-white px-10">
                <Image
                  src={Prod7}
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
            <Tab component={CompProd8} className="flex flex-row" active>
              <div className="flex items-center space-x-2 bg-white px-10">
                <Image
                  src={Prod10}
                  alt=""
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>

            <Tab component={CompProd9}>
              <div className="flex items-center space-x-2 bg-white p-5">
                <Image
                  src={Prod9}
                  alt=""
                  className="w-full h-60 object-cover object-center "
                />
              </div>
            </Tab>
            <Tab component={CompProd10} className="flex flex-row" active>
              <div className="flex items-center space-x-2 bg-white px-10">
                <Image
                  src={Prod10}
                  alt=""
                  className="w-full h-60 object-cover object-center"
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="px-40 py-4">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-6xl text-[#672a81]">
          Gamme <span className="font-light">Celline</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center pb-8">
        <div className="flex items-center justify-center">
          <Image src={Tableimg} className="w-[960%] h-[50%]" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#8800ff] via-[#6c04fe] to-[#4307ff] ">
        <Contact />
      </div>
    </>
  );
}
