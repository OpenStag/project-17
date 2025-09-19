import HomeComponent from  "@/components/Home";
import ProductExplorer from "@/components/productExplorer";
import About from "@/components/about";
import Image from "next/image";
import Review from "@/components/review";


export default function Home() {
  return (
   <>
   
    {/* <ProductExplorer/>   */}
    <HomeComponent/>
       {/* <About/>   */}
    <About/>
    <ProductExplorer/>

    <Review />
    

}
