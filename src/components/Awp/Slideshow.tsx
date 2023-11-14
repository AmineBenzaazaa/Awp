import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AboutSectionOne from "./AboutSectionOne";
import Image, { StaticImageData } from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "./slider.css";

interface Slide {
  title: string;
  subTitle: string;
  tagline: string;
  paragraph1: string;
  paragraph2: string;
  imageSrc: string | StaticImageData;
  trustBadge: boolean;
}

interface SlideshowProps {
  slides: Slide[];
  trustBadge: boolean;
}

const Slideshow: React.FC<SlideshowProps> = ({ slides, trustBadge }) => {
  const indicators = (index?: number) =>
    index !== undefined && (
      <div className="indicator">
        <div className="flex justify-center p-2 text-sm cursor-pointer bg-white m-4">
          <Image alt="" width={200} src={slides[index].imageSrc} />
        </div>
      </div>
    );

  return (
    <Slide
      autoplay={false}
      nextArrow={
        <div className="px-8">
          <BsArrowRight size={38} color="#1f9257" />
        </div>
      }
      prevArrow={
        <div className="px-8">
          <BsArrowLeft size={38} color="#1f9257" />
        </div>
      }
      indicators={(index) => indicators(index)}
    >
      {slides.map((slide, index) => (
        <div className="each-slide-effect" key={index}>
          {
            <AboutSectionOne
              title={slide.title}
              subTitle={slide.subTitle}
              tagline={slide.tagline}
              paragraph1={slide.paragraph1}
              paragraph2={slide.paragraph2}
              imageSrc={slide.imageSrc}
              trustBadge={trustBadge}
            />
          }
        </div>
      ))}
    </Slide>
  );
};

export default Slideshow;
