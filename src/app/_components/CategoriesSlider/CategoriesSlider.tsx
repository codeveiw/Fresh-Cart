import React from 'react'
import CategoriesSwiper from '../CategoriesSwiper/CategoriesSwiper'

export default async function CategoriesSlider() {
    let res =await fetch("https://ecommerce.routemisr.com/api/v1/categories")
    let {data} = await res.json()
    console.log(data)
  return (
    <div>
      <CategoriesSwiper categories ={data}/>
    </div>
  )
}
