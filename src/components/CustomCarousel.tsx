import React, { useEffect, useState } from "react";

const CustomCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleCarouselSlide = (evt: any) => {
      const index = evt.to;
      setActiveSlide(index);
    };
    
    const carousel = document.querySelector("#custom_carousel");
    if (carousel) {
      carousel.addEventListener("slid.bs.carousel", handleCarouselSlide);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("slid.bs.carousel", handleCarouselSlide);
      }
    };
  }, []);

  const slidesData = [
    {
      imgSrc: "http://placehold.it/350x250",
      title: "Slide 1",
      content: "Lorem ipsum dolor sit amet...",
    },
    {
      imgSrc: "http://placehold.it/350x250",
      title: "Slide 1",
      content: "Lorem ipsum dolor sit amet...",
    },
    {
      imgSrc: "http://placehold.it/350x250",
      title: "Slide 1",
      content: "Lorem ipsum dolor sit amet...",
    },
    {
      imgSrc: "http://placehold.it/350x250",
      title: "Slide 1",
      content: "Lorem ipsum dolor sit amet...",
    },
    // Define other slides in a similar format
  ];

  return (
    <div className="container mx-auto mt-4">
      <div
        id="custom_carousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="2500"
      >
        <div className="carousel-inner">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className={`item ${index === activeSlide ? "active" : ""}`}
            >
              <div className="container">
                <div className="flex">
                  <div className="w-1/4">
                    <img
                      src={slide.imgSrc}
                      alt={slide.title}
                      className="img-responsive"
                    />
                  </div>
                  <div className="w-3/4">
                    <h2 className="text-2xl">{slide.title}</h2>
                    <p>{slide.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="controls overflow-x-auto overflow-y-hidden p-0 m-0 whitespace-nowrap text-center bg-gray-300">
          <ul className="nav">
            {slidesData.map((_, index) => (
              <li
                key={index}
                data-target="#custom_carousel"
                data-slide-to={index}
                className={index === activeSlide ? "active" : ""}
              >
                <a href="#">
                  <img src="http://placehold.it/50x50" alt={`Slide ${index + 1}`} />
                  <small className="text-xs font-bold mt-2">{`Slide ${index + 1}`}</small>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
