import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marques from "@/components/Marques";
import Values from "@/components/Values";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import Logo from "../../public/images/page 1/Logo.png";
import WBG from "@/app/images/Objet dynamique vectoriel copie 9.png";
import Image from "next/image";
import ScrollUp from "@/components/Common/ScrollUp";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <ScrollUp />

      <Header />
      <section
        id="home"
        className="from-[#22a45b] via-[#2f9e98] to-[#3f8ec4] relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] pt-[80px] pb-[80px] md:pt-[140px] md:pb-[280px] "
      >
        <div
          className="wow fadeInUp mx-auto max-w-[1200px] text-center"
          data-wow-delay=".2s"
        >
          <div className="absolute top-[60%] right-0 transform translate-y-[-50%] flex flex-col space-y-14">
            <Image src={WBG} alt="Africa West Paper" height={600} />
          </div>
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
            <Image
              src={Logo}
              alt="Africa West Paper"
              width={180}
              height={1000}
            />
            <h1 className="pt-8  mb-12 md:mb-5 text-5xl font-light leading-tight text-white  sm:leading-tight md:leading-tight">
               Powerful <div className="font-normal capilazed text-6xl "> Cleaning</div>
            </h1>
          </div>
        </div>
      </section>
      {/* Centered and Overlapping Section */}
      <section className="flex justify-center items-center text-center text-green-500 z-20 mx-6 sm:mx-0">
        <div  id="about" 
          className="relative flex flex-col bg-clip-border bg-white p-6 sm:p-20 text-gray-700 rounded-2xl shadow-lg shadow-gray-500/10"
          style={{ marginTop: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl uppercase">
            Africa West Paper.
          </h2>
          <p className="mt-6 text-lg leading-8 text-green-600">
          AFRICA WEST PAPER est une société spécialisée dans la fabrication et la commercialisation
            <br /> de produits d’hygiène et d’essuyage en papier.
          </p>
          <p className="mt-6 text-center max-w-[770px] text-sm sm:text-md leading-8 text-gray-500">
            Grâce à notre savoir-faire et à notre expertise, nous déclinons le
            papier sous différentes formes pour développer une large gamme de
            solutions d’hygiène optimales à destination de tout usage,
            corporelle ou domestique. Mouchoirs, papier hygiénique, essuie-tout…
            des produits destinés à améliorer notre hygiène quotidienne pensés
            pour tous types de publics, ménages ou professionnels. Notre volonté
            d’apporter aux marchés sur lesquels nous opérons des produits de
            haute qualité, facilitant l’accès à une meilleure hygiène constitue
            le moteur du développement de nos marques, Celline , Rysh et AWP
            PRO.
          </p>
        </div>
      </section>
      <Marques />
      <section
        id="home"
        className="from-[#22a45b] via-[#2f9e98] to-[#3f8ec4] relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] py-[20px] md:pt-[100px] md:pb-[20px] "
      >
        <div className="absolute top-[80%] right-0 transform translate-y-[-50%] flex flex-col space-y-14">
          <Image src={WBG} alt="Africa West Paper" height={600} />
        </div>
        <Values />
        <Contact />
      </section>
    </div>
  );
}
