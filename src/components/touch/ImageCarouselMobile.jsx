import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NextSvgIcon from "../common/svg/NextSvgIcon";

const ImageCarouselMobile = ({ images }) => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper) swiper.slideNext();
  };

  const goPrev = () => {
    if (swiper) swiper.slidePrev();
  };

  return (
    <div className="relative flex h-[18.75rem] w-full">
      <Swiper
        onSwiper={setSwiper}
        className="w-full"
        spaceBetween={1}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img src={image} alt={`Product ${index}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white"
      >
        <img
          src="/src/assets/images/icon-previous.svg"
          alt="Previous arrow icon"
        />
      </div>
      <div
        onClick={goNext}
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white"
      >
        <NextSvgIcon />
      </div>
    </div>
  );
};

export default ImageCarouselMobile;
