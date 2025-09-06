import ItemCard from "./itemCard";
export default function ItemGrid() {
    return (
        <>  
        <div className="w-full max-w-[1166px] mx-auto flex justify-center items-center">
            {/* Items Grid */}
            <div className="grid grid-cols-3 gap-20 justify-items-center justify-center p-10 [@media(max-width:1337px)]:grid-cols-2 [@media(max-width:771px)]:grid-cols-1  [@media(max-width:1335px)]:gap-3">
                <ItemCard ItemName = "Lungo Coffee" ItemPrice="Rs.200" ItemImage = "/MenuItems/LungoCoffee.jpg"/>
                <ItemCard ItemName = "Iced Coffee" ItemPrice="Rs.150" ItemImage = "/MenuItems/IcedCoffee.jpg"/>
                <ItemCard ItemName = "Filter Coffee" ItemPrice="Rs.250" ItemImage = "/MenuItems/FilterCoffee.jpg"/>
                <ItemCard ItemName = "Mocha Coffee" ItemPrice="Rs.350" ItemImage = "/MenuItems/MochaCoffee.jpg"/>
                <ItemCard ItemName = "Cappuccino " ItemPrice="Rs.450" ItemImage = "/MenuItems/Cappuccino.jpg"/>
                <ItemCard ItemName = "Macchiato " ItemPrice="Rs.400" ItemImage = "/MenuItems/Macchiato.jpg"/>
            </div>
        </div>
        </>
    );
}