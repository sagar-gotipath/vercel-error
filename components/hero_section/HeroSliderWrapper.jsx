import { useState } from 'react'
import HeroSlide from './HeroSlide'
import HeroSlideContent from './HeroSlideContent'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function HeroSliderWrapper({ sliderData }) {
  const pagination = {
    clickable: true,
    // bulletClass: "bg-red-500 w-10 h-10",
  }

  return (
    <Swiper
      // spaceBetween={2}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => {}}
      // onSlideChange={() => console.log("slide change")}
      modules={[Autoplay, Navigation, Pagination]}
      pagination={pagination}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      followFinger={false}
    >
      {sliderData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <HeroSlide imageUrl={item.coverImage} className="min-h-[460px]" isOverlay={item.isOverlay}>
              <HeroSlideContent title={item.title} description={item.description} buttons={item.buttonGroup} />
            </HeroSlide>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
