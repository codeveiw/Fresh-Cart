"use client"
import { Swiper,SwiperSlide } from 'swiper/react'
import "swiper/css"
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Img1 from "../../../../public/images/grocery-banner-2.jpeg"
import Img2 from "../../../../public/images/grocery-banner.png"
import Img3 from "../../../../public/images/slider-image-1.jpeg"
import Img4 from "../../../../public/images/slider-image-2.jpeg"
import Img5 from "../../../../public/images/slider-image-3.jpeg"


export default function MainSlider() {
  return <>
      <div className='container mx-auto w-full md:w-[80%] flex flex-col md:flex-row my-6 px-4 md:px-0'>
       <div className="w-full md:w-3/4 mb-4 md:mb-0">
       
           <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay:2000
      }}
    >
      <SwiperSlide><Image src={Img1} alt='' className='w-full h-[300px] md:h-[400px] object-cover object-center'/></SwiperSlide>
      <SwiperSlide><Image src={Img4} alt='' className='w-full h-[300px] md:h-[400px] object-cover object-center'/></SwiperSlide>
      <SwiperSlide><Image src={Img5} alt='' className='w-full h-[300px] md:h-[400px] object-cover object-center'/></SwiperSlide>
      

     </Swiper>
       
       </div>
       <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-2 md:gap-0">
        <Image src={Img2} alt='' className='w-1/2 md:w-full h-[150px] md:h-[200px] object-cover object-center'/>
        <Image src={Img4} alt='' className='w-1/2 md:w-full h-[150px] md:h-[200px] object-cover object-center'/>
       </div>
    </div>
  
  </>
}

