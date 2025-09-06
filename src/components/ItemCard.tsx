import Image from "next/image";
import Link from "next/link";

type ItemCardProps = {
  ItemName: string;
  ItemPrice :string
  ItemImage: string;
};

export default function ItemCard(props: ItemCardProps) {
  return (
    <>
        {/* Item Card Container */}
        <div className="w-[340px] h-[400px] bg-[#D9D9D9] rounded-[25px] box-border shadow-xl/30 hover:scale-105 transition-transform duration-300 ease-in-out p-0 m-0">

            {/* Item Image */}
            <Image className="rounded-[25px] object-cover w-full h-[285px]"
            src={props.ItemImage}
            alt=""
            height={285}
            width={452}
             />

            {/* Item Name */}
            <h2 className="text-black font-bold font-poppins p-2 text-[2rem]">{props.ItemName}</h2>

            {/* Item Price and Order Now Button Container */}
            <div className="flex box-border justify-between items-center px-3">
                <span className="text-[#815454] font-poppins">{props.ItemPrice}</span>
                <Link className="text-black font-bold font-poppins bg-[#815454] rounded-[25px] p-1 hover:bg-[#663f3f] " href="#">Order Now</Link>
            </div>
        </div>
    </>
  )
}