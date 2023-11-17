import React from "react";
import Image, { StaticImageData } from "next/image";
import SectionTitle from "./SectionTitle";

import TrustBadge from "@/app/images/TrustBadge.png";

interface AboutSectionOneProps {
  title: string;
  subTitle: string;
  tagline: string;
  paragraph1: string;
  paragraph2: string;
  imageSrc: string | StaticImageData;
  trustBadge: boolean;
}

const AboutSectionOne: React.FC<AboutSectionOneProps> = ({
  title,
  subTitle,
  tagline,
  paragraph1,
  paragraph2,
  imageSrc,
  trustBadge,
}) => {
  return (
    <section className="p-2 sm:px-12">
      {" "}
      {/* Reduced padding */}
      <div className="">
        <div className="border-b border-white/[.15] md:pb-5 lg:pb-2">
          {" "}
          {/* Reduced padding */}
          <div className="container py-8 mx-0 flex flex-wrap items-center px-2 md:px-32">
            {" "}
            {/* Reduced padding */}
            <div className="w-full pl-20 lg:w-3/5 justify-center items-center">
              {" "}
              {/* Reduced width and padding */}
              {trustBadge && (
                <div className="w-full absolute -top-20 right-0 hidden lg:block">
                  {" "}
                  {/* Adjusted badge size */}
                  <Image
                    src={TrustBadge}
                    alt="Trust Badge"
                    className="w-16 h-12"
                  />
                </div>
              )}
              <SectionTitle
                title={title}
                subTitle={subTitle}
                tagline={tagline}
                paragraph1={paragraph1}
                paragraph2={paragraph2}
                mb="2px" // Adjusted margin
              />
            </div>
            <div className="w-full px-2 lg:w-2/5 justify-center items-center">
              {" "}
              {/* Reduced padding */}
              <div
                className="wow fadeInUp relative mx-auto aspect-[20/19]lg:mr-0" // Adjusted aspect ratio and max-width
                data-wow-delay=".2s"
              >
                <Image
                  src={imageSrc}
                  alt={title}
                  width={400}
                  height={238}
                  className="mx-auto"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
