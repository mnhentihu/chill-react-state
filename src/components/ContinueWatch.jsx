import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

// eslint-disable-next-line react/prop-types
function ContinueWatch({ data }) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigationState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  // Ambil tanggal sekarang dan kurangi 6 bulan
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  return (
    <div className="relative">
      {/* Tombol Prev */}
      <button
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-2 rounded-full transition  ${
          isBeginning
            ? "opacity-50 cursor-not-allowed"
            : "opacity-80 hover:bg-secondary cursor-pointer "
        }`}
        onClick={() => swiperInstance?.slidePrev()}
        disabled={isBeginning}
      >
        <Icon icon="ant-design:arrow-left-outlined" width="24" height="24" />
      </button>

      {/* Tombol Next */}
      <button
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-2 rounded-full transition ${
          isEnd
            ? "opacity-50 cursor-not-allowed"
            : "opacity-80 hover:bg-secondary  cursor-pointer "
        }`}
        onClick={() => swiperInstance?.slideNext()}
        disabled={isEnd}
      >
        <Icon icon="ant-design:arrow-right-outlined" width="24" height="24" />
      </button>

      {/* Swiper */}
      <Swiper
        onSwiper={setSwiperInstance}
        onSlideChange={updateNavigationState}
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={30}
        className="rounded-lg"
      >
        {/*eslint-disable-next-line react/prop-types*/}
        {data.map((slide) => {
          return (
            <SwiperSlide key={slide.id} className="max-w-[310px] relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="rounded-lg h-44 sm:h-32 object-cover w-[310px] sm:w-full"
              />
              <div className="flex justify-between items-end absolute inset-0 px-3 py-3.5 bg-gradient-to-t from-primary/80 to-transparent">
                <span className="text-sm sm:text-sm">{slide.title}</span>
                <span className="flex justify-center items-center gap-1 font-light text-xs sm:text-sm">
                  <Icon icon="material-symbols:star" />
                  {slide.rating}/5
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ContinueWatch;
