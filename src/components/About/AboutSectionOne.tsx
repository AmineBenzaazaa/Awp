import React from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

interface AboutSectionOneProps {
  title: string;
  subTitle: string;
  paragraph: string;
  imageSrc: string;
}

const AboutSectionOne: React.FC<AboutSectionOneProps> = ({
  title,
  subTitle,
  paragraph,
  imageSrc,
}) => {
  return (
    <section className="p-2 sm:p-10">
      <div className="container">
        <div className="border-b pb-16 border-white/[.15] md:pb-20 lg:pb-10">
          <div className="flex flex-wrap items-center px-5 md:px-30">
            <div className="w-full lg:w-1/2 pl-2 sm:pl-20">
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
                <Image
                  src={imageSrc}
                  alt="about-image"
                  fill
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
