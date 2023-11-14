import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AboutSectionOne from "../About/AboutSectionOne";
import Image, { StaticImageData } from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "./slider.css";

interface Slide {
  title: string;
  subTitle: string;
  paragraph: string;
  imageSrc: string | StaticImageData;
}

interface SlideshowProps {
  slides: Slide[];
  trustBadge: boolean;
}

const Slideshow: React.FC<SlideshowProps> = ({ slides, trustBadge }) => {
  const indicators = (index?: number) =>
    index !== undefined && (
      <div className="indicator">
        <div className="flex justify-center p-6 text-sm cursor-pointer bg-white m-4">
          <Image alt="" width={240} src={slides[index].imageSrc} />
        </div>
      </div>
    );

  return (
    <Slide
      autoplay={false}
      nextArrow={
        <button
          style={{
            background: "none",
            border: "0px",
            width: "30px",
          }}
        >
          <BsArrowRight size={28} color="white" />
        </button>
      }
      prevArrow={
        <button
          style={{
            background: "none",
            border: "0px",
            width: "30px",
          }}
        >
          <BsArrowLeft size={28} color="white" />
        </button>
      }
      indicators={(index) => indicators(index)}
    >
      {slides.map((slide, index) => (
        <div className="each-slide-effect" key={index}>
          {
            <AboutSectionOne
              title={slide.title}
              subTitle={slide.subTitle}
              paragraph={slide.paragraph}
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
