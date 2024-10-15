import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Import fade effect
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

const Carousel = () => {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    videoRefs.current.forEach((video, index) => {
      if (index === activeIndex && video) {
        video.pause();
        video.currentTime = 0;
        requestAnimationFrame(() => {
          video.play().catch((err) => {
            console.error("Error playing video:", err);
          });
        });
      } else if (video) {
        video.pause();
      }
    });
  };

  return (
    <div className="h-[500px] w-[100%]  mx-auto">
      <Swiper
        loop={true}
        spaceBetween={0}
        className="h-[100%]"
        navigation={true}
        modules={[Navigation, Autoplay, EffectFade]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        effect="fade" // Use fade effect for transitions
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            src="../assets/drinks3.jpg"
            alt="Image 1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <video
            ref={(el) => (videoRefs.current[1] = el)}
            className="w-full h-full object-cover"
            muted
            playsInline
            onPlay={() => {
              if (swiperRef.current) {
                swiperRef.current.autoplay.stop();
              }
            }}
            onEnded={() => {
              if (swiperRef.current) {
                swiperRef.current.autoplay.start();
              }
            }}
          >
            <source src="../assets/drinks1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            src="../assets/drinks4.jpg"
            alt="Image 2"
          />
        </SwiperSlide>

        <SwiperSlide>
          <video
            ref={(el) => (videoRefs.current[3] = el)}
            className="w-full h-full object-cover"
            muted
            playsInline
            onPlay={() => {
              if (swiperRef.current) {
                swiperRef.current.autoplay.stop();
              }
            }}
            onEnded={() => {
              if (swiperRef.current) {
                swiperRef.current.autoplay.start();
              }
            }}
          >
            <source src="../assets/drinks2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            src="../assets/drinks5.jpg"
            alt="Image 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
