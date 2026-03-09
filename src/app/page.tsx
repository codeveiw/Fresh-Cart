import Image from "next/image";
import MainSlider from "./_components/MainSlider/MainSlider";
import CategoriesSlider from "./_components/CategoriesSlider/CategoriesSlider"
import Categories from "./Categories/page";
import AllProduct from "./_components/AllProduct/AllProduct";

export default function Home() {
  return <>
 <MainSlider/>
 <CategoriesSlider/>
 <AllProduct/>
  </>
}
