"use client";
import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";
import { AiOutlineCamera } from "react-icons/ai";

const EmblaCarousel = ({ productImages }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Update current index when the slide changes
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect(); // Initialize the index on mount

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="flex w-full lg:px-10 rounded-md md:bg-[#2e2e2e] items-center lg:gap-x-2">
      <div className="md:relative absolute z-50">
        <button
          className="embla__prev p-1 md:p-2 lg:p-2 rounded-full"
          onClick={scrollPrev}
          name="prevBTN"
        >
          <GrPrevious className="text-[20px] lg:text-[30px] text-white" />
        </button>
      </div>
      <div className="embla w-full" ref={emblaRef}>
        <div className="embla__container">
          {productImages.map((item, index) => (
            <div
              className="embla__slide relative lg:w-[100px] h-[300px] lg:h-[480px]"
              key={index}
            >
              <Image
                src={item}
                alt={`Image ${index + 1}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full rounded-md sm:rounded-none"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:relative absolute md:right-0 right-5">
        <button
          className="embla__next p-1 md:p-2 lg:p-2 rounded-full"
          onClick={scrollNext}
          name="nextBTN"
        >
          <GrNext className="text-[20px] lg:text-[30px] text-white" />
        </button>
      </div>
      <div className="text-black hidden lg:flex items-center gap-1 bg-white py-1 px-2 absolute top-[530px] ml-[715px] rounded-full">
      <AiOutlineCamera /> <span className="text-[14px]">{currentIndex + 1} / {productImages.length}</span>
      </div>
      <div className=" lg:flex hidden  items-center justify-center gap-1 mt-4 absolute top-[530px] ml-[370px]">
        {productImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
