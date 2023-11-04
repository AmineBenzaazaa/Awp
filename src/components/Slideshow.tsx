import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AboutSectionOne from "./About/AboutSectionOne";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Slideshow = ({ slides, trustBadge }) => {
  const isMobile = window.innerWidth <= 768; // Define your mobile breakpoint

  const indicators = (index) => (
    <div className="indicator">
      {isMobile && index !== 0 ? null : (
        <div className="flex flex-row justify-center p-8 rounded-lg text-sm cursor-pointer">
          <Image alt="" width={180} src={slides[index].imageSrc} />
        </div>
      )}
    </div>
  );

  return (
    <Slide
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
      indicators={indicators}
    >
      {slides.map((slide, index) => (
        <div className="each-slide-effect" key={index}>
          <AboutSectionOne
            title={slide.title}
            subTitle={slide.subTitle}
            paragraph={slide.paragraph}
            imageSrc={slide.imageSrc}
            trustBadge={trustBadge}
          />
        </div>
      ))}
    </Slide>
  );
};

export default Slideshow;
