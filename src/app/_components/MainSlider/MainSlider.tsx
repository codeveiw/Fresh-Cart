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
      <div className='container mx-auto w-[80%] flex my-6'>
       <div className="w-3/4">
       
           <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay:2000
      }}
    >
      <SwiperSlide><Image src={Img1} alt='' className='w-full h-[400px] object-center'/></SwiperSlide>
      <SwiperSlide><Image src={Img4} alt='' className='w-full h-[400px] object-center'/></SwiperSlide>
      <SwiperSlide><Image src={Img5} alt='' className='w-full h-[400px] object-center'/></SwiperSlide>
      

     </Swiper>
       
       </div>
       <div className="w-1/4 ">
        <Image src={Img2} alt='' className='w-full h-[200px] object-center'/>
        <Image src={Img4} alt='' className='w-full h-[200px] object-center'/>
       </div>
    </div>
  
  </>
}

