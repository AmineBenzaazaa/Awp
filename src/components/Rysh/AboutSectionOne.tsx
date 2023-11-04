import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

import TrustBadge from "@/app/images/TrustBadge.png";

interface AboutSectionOneProps {
  title: string;
  subTitle: string;
  paragraph: string;
  imageSrc: string;
  trustBadge: boolean;
}

const AboutSectionOne: React.FC<AboutSectionOneProps> = ({
  title,
  subTitle,
  paragraph,
  imageSrc,
  trustBadge,
}) => {
  return (
    <section className="p-2 sm:p-10">
      <div className="w-full">
        <div className="border-b border-white/[.15] md:pb-10 lg:pb-4">
          <div className="flex flex-wrap items-center px-5 md:px-30">
            <div className="w-full lg:w-1/2 pl-2 sm:pl-28 z-20 relative">
              {trustBadge && (
                <div className="w-60 absolute -top-28 right-0 hidden lg:block">
                  <Image src={TrustBadge} alt="Trust Badge" />
                </div>
              )}
              <SectionTitle
                title={title}
                subTitle={subTitle}
                paragraph={paragraph}
                mb="44px"
              />
            </div>
            <div className="w-full px-4 lg:w-1/2 justify-center items-center">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[1000px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image src={imageSrc} alt={title} fill className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
