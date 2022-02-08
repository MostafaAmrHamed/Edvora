import React from 'react'
import Product from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
const SliderProducts = () => {
  return (
    <div>
      <p className="ml-3 mb-3 border-b-2 border-[#A5A5A5] pb-2 text-xl text-white">
        Brand Name
      </p>
      <div className="max-w-[900px] rounded-2xl bg-primary-2 p-5">
        <Swiper
          modules={[Navigation]}
          spaceBetween={5}
          slidesPerView={3}
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
        </Swiper>
      </div>
    </div>
  )
}

export default SliderProducts
