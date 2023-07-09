import React, { useState } from "react";
import {BsChevronCompactLeft , BsChevronCompactRight} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { first, second, third, fourth } from "../assets";



const bannerimg = [
  {
    id: "1",
    img: first,
  },
  {
    id: "2",
    img: second,
  },
  {
    id: "3",
    img: third,
  },
  {
    id: "4",
    img: fourth,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? bannerimg.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === bannerimg.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <div className=" h-[420px] pb-8">
        <div className="max-w-[1500px] h-[420px] w-full m-auto py-3 px-4 relative group">
          <div
            style={{ backgroundImage: `url(${bannerimg[currentIndex].img})` }}
            className="w-full h-[420px] rounded-2xl bg-center bg-cover duration-500"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {bannerimg.map((banner, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
