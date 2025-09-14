import HomeComponent from  "@/components/Home";
import ProductExplorer from "@/components/productExplorer";
import About from "@/components/about";
import Image from "next/image";


export default function Home() {
  return (
   <>
   
    {/* <ProductExplorer/>   */}
    <HomeComponent/>
       {/* <About/>   */}
    <About/>
    <ProductExplorer/>
    
   </>
  );
}
