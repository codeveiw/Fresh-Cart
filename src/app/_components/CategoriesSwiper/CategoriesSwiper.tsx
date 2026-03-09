"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Img1 from "../../../../public/images/grocery-banner-2.jpeg"
import Img2 from "../../../../public/images/grocery-banner.png"
import Img3 from "../../../../public/images/slider-image-1.jpeg"
import Img4 from "../../../../public/images/slider-image-2.jpeg"
import Img5 from "../../../../public/images/slider-image-3.jpeg"
import { Category } from '@/types/product'

export default function CategoriesSwiper({ categories }: { categories: Category[] }) {
  return <>
    <div className="container mx-auto w-[80%]">

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 1000 }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 7,
          },
        }}
      >
        {categories.map((category) => {
          return <SwiperSlide key={category._id}>
            <img src={category.image} alt="categories imge" className='w-full h-[150px] object-cover' />
            <p>{category.name}</p>
          </SwiperSlide>
        })}



      </Swiper>
    </div>


  </>
}
