import Image from "next/image";
import ItemGrid from "./ItemsGrid";


export default function ProductExplorer() {
  return (
    <>
      <section className="flex flex-col justify-center w-screen min-h-screen  bg-[url(/MenuItems/Background.jpg)] bg-no-repeat bg-center bg-cover overflow-auto">
        <h1 className='font-poppins font-bold text-[64px] text-center [@media(max-width:267px)]:text-[25px]'>What kind of coffee we serve for you</h1>
        <p className="font-poppins font-medium text-center text-[28px] ">Checkout our menu items</p>
        <ItemGrid/>
      </section>
    </>
  );
}
