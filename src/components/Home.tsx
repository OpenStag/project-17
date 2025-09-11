import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full font-sans overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Home/hero.jpg" // You'll need to add this image to your public folder
          alt="Coffee Background"
          fill
          className="object-cover brightness-50"
          priority
        />
</div>

{/* Logo */}
<div className="absolute top-6 left-6 z-20 flex items-center">
  <Image 
    src="/Home/logo.jpg" 
    alt="Love Coffee Logo" 
    width={80} 
    height={80} 
    className="rounded-lg shadow-lg"
    priority
  />
</div>

{/* Top Right Navigation */}
      <nav className="absolute top-6 right-8 z-20 flex gap-8 text-white">
        <a href="#" className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300 relative">
          Home
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-300"></div>
        </a>
        <a href="#" className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300">
          About Us
        </a>
        <a href="#" className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300">
          Our Menu
        </a>
        <a href="" className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300">
          Contact Us
        </a>
      </nav>

      {/* Main Content */}
    <div className="absolute inset-0 z-20 flex items-center justify-center">
  <div className="px-4 max-w-6xl text-left " >
    {/* Main Heading */}
    <h1 className="text-white font-black text-6xl leading-tight → 1.25">
      GOOD COFFEE WILL ALWAYS<br />
      FIND THE AUDIENCE
    </h1>

    {/* Buy Now Button */}
    <button className="mt-8 inline-flex items-center px-8 py-4 text-xl font-semibold
     text-gray-900 bg-white rounded-full
      hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
      Buy Now
    </button>
  </div>
</div>


   
     
    </div>
  );
}