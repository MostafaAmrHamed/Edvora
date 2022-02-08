import React from 'react'
import Product from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
const SliderProducts = () => {
  return (
    <div>
      <p className="ml-3 mb-3 border-b-2 border-[#A5A5A5] pb-2 text-xl text-white">
        Brand Name
      </p>
      <div className=" rounded-2xl bg-primary-2 p-5">
        <Swiper
          modules={[Navigation, Mousewheel]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 4,
            },
          }}
          mousewheel={true}
          navigation
        >
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default SliderProducts
