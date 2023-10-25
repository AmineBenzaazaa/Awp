import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marques from "@/components/Marques";
import Values from "@/components/Values";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <section
        id="home"
        className="from-green-600 via-teal-500 to-cyan-600 relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] pt-[80px] pb-[80px] md:pt-[300px] md:pb-[280px] "
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
      {/* Centered and Overlapping Section */}
      <section className="flex justify-center items-center text-center text-green-500 z-20">
        <div
          className="relative flex flex-col bg-clip-border bg-white p-20 text-gray-700 rounded-2xl shadow-lg shadow-gray-500/10"
          style={{ marginTop: "-200px" }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl">
            Africa West Paper.
          </h2>
          <p className="mt-6 text-lg leading-8 text-green-500">
            est un groupe specialise dans la fabrication et la commercialisation{" "}
            <br /> de produit d'hygene et d'essuyage en papier.
          </p>
          <p className="mt-6 text-center max-w-[570px] text-lg leading-8 text-gray-500">
            Grâce à notre savoir-faire et à notre expertise, nous déclinons le
            papier sous différentes formes pour développer une large gamme de
            solutions d'hygiène optimales à destination de tout usage,
            corporelle ou domestique. Mouchoirs, papier hygiénique,
            essuie-tout... des produits destinés à améliorer notre hygiène
            quotidienne pensés pour tous types de publics, ménages ou
            professionnels.{" "}
          </p>
        </div>
      </section>
      <Marques />
      <section
        id="home"
        className="from-green-600 via-teal-500 to-cyan-600 relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] py-[20px] md:pt-[100px] md:pb-[20px] "
      >
        <Values />
        <Contact />
      </section>
    </div>
  );
}
