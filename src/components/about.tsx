export default function About() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#b6a3a3] text-white px-6 py-12">
      
      {/* Left Side - Video */}
      <div className="flex-1 flex justify-center">
        <iframe
          className="w-full max-w-[535px] h-[300px] md:h-[315px] rounded-xl shadow-lg"
          src="https://www.youtube-nocookie.com/embed/Nu8kIIL-CDA?autoplay=1&mute=1&controls=0&loop=1&playlist=Nu8kIIL-CDA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      {/* Right Side - Text */}
      <div className="flex-1 mt-8 md:mt-0 md:ml-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#242121]">
          Best Coffee House In Your Hometown
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-4 text-[#584040]">
          Our heritage lies not just in tea, but in a time when rolling hills
          of Ceylon bloomed with coffee. In the 1800s, Sri Lanka—then Ceylon—
          rivaled Brazil in global coffee exports, until a blight devastated
          the plantations.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#584040]">
          Nearly lost, Ceylon Coffee is now reborn—in the highland farms of
          Kandy, Nuwara Eliya, and Badulla—cultivated by smallholder farmers
          embracing specialty arabica, restoring a legacy one bean at a time.
        </p>
      </div>
    </div>
  );
}
