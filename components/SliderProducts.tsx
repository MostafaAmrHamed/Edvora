import React from 'react'
import Product from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { products } from '../types'
const SliderProducts: React.FC<products> = ({ items, brand_name }) => {
  return (
    <div className="mt-5">
      <p className="ml-3 mb-3 border-b-2 border-[#A5A5A5] pb-2 text-xl text-[#A5A5A5]">
        Brand Name:{' '}
        <span className=" font-semibold text-white">{brand_name}</span>
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
          {items.map((item, index) => {
            return item.brand_name === brand_name ? (
              <SwiperSlide key={index}>
                <Product
                  key={index}
                  address={item.address}
                  brand_name={item.brand_name}
                  date={item.date}
                  discription={item.discription}
                  image={item.image}
                  price={item.price}
                  product_name={item.product_name}
                  time={item.time}
                />
              </SwiperSlide>
            ) : (
              ''
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default SliderProducts
