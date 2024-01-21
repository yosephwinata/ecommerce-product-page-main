import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PrevSvgIcon from "../common/svg/PrevSvgIcon";
import NextSvgIcon from "../common/svg/NextSvgIcon";
import { getProductImageByIndex } from "/src/utils/imageUtils";

const ImageCarouselMobile = ({ images }) => {
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    if (swiper) swiper.slideNext();
  };

  const goPrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <div className="relative flex h-[18.75rem] w-full">
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        className="w-full"
        spaceBetween={1}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={getProductImageByIndex(currentIndex)}
              alt={`Product ${index}`}
              className="w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        onClick={goPrev}
        className={`absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white ${currentIndex === 0 ? "hidden" : ""}`}
      >
        <PrevSvgIcon />
      </div>
      <div
        onClick={goNext}
        className={`absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white ${currentIndex === images.length - 1 ? "hidden" : ""}`}
      >
        <NextSvgIcon />
      </div>
    </div>
  );
};

export default ImageCarouselMobile;
