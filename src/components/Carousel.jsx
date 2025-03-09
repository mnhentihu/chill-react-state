import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

// eslint-disable-next-line react/prop-types
function Carousel({ data }) {
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
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-2 rounded-full transition${
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
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-2 rounded-full transition${
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
          const isTop10 = slide.rank <= 10;
          const isNewEpisode =
            slide.category === "series" &&
            new Date(slide.update_at) >= sixMonthsAgo;

          return (
            <SwiperSlide key={slide.id} className="max-w-fit relative">
              {/* Tag */}
              <div className=" flex flex-col gap-1">
                {isTop10 ? (
                  <div className="flex flex-col justify-center text-center absolute right-2 top-0 px-1.5 py-1 text-[8px] sm:text-sm bg-red-700 rounded-tr-lg rounded-bl-lg">
                    <span>Top</span>
                    <span>10</span>
                  </div>
                ) : isNewEpisode ? (
                  <div className="absolute inset-0 sm:inset-2 px-1.5 py-1 mt-2 ml-2 w-fit h-fit bg-button text-[8px] sm:text-sm rounded-full">
                    Episode Baru
                  </div>
                ) : null}
              </div>

              {/* Gambar */}
              <img
                src={slide.image}
                alt={slide.title}
                className="rounded-lg h-44 sm:h-96 w-24 sm:w-full object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;
