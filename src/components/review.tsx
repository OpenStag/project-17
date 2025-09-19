"use client";
import { useState } from "react";

export default function Review() {
  const reviews = [
    {
      name: "Anne perera",
      rating: 4,
      review:
        "Good atmosphere. A nice place to hang out with friends. Would recommend if you are a coffee lover.",
    },
    {
      name: "Emma seek",
      rating: 4,
      review:
        "Wow what an amazing coffee place… employees are best… perfect service. The view is gorgeous… calm place.",
    },
    {
      name: "Jack peter",
      rating: 2,
      review:
        "Disappointing coffee experience… a lack of microfoam… pricier option… little value for money.",
    },
    {
      name: "Sarah miller",
      rating: 5,
      review:
        "Great place to relax with friends. Good variety of drinks and snacks, friendly staff!",
    },
    {
      name: "David lee",
      rating: 5,
      review:
        "Absolutely love this coffee shop! Perfect ambiance and amazing lattes. Highly recommended.",
    },
    {
      name: "Sophia brown",
      rating: 5,
      review:
        "Best coffee spot in town! Cozy atmosphere and the desserts are delicious.",
    },
    // ❌ Removed extra reviews (only 6 kept)
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const renderStars = (count: number) => {
    return (
      <div className="flex justify-center">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < count ? "text-yellow-400 text-lg" : "text-gray-300 text-lg"}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const nextSlide = () => {
    if (currentIndex < reviews.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-gray-200 py-12">
      {/* Title */}
      <h2 className="text-center text-3xl font-extrabold mb-10 text-black">
        OUR HAPPY CUSTOMER
      </h2>

      {/* Slider Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Reviews */}
        <div className="flex gap-6 overflow-hidden justify-center">
          {reviews.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 w-80 text-center flex-shrink-0"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-2xl">👤</span>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
              <div className="my-2">{renderStars(item.rating)}</div>
              <p className="text-sm text-gray-600 italic">“{item.review}”</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons BELOW */}
<div className="flex justify-center mt-6 gap-4">
  <button
    onClick={prevSlide}
    disabled={currentIndex === 0}
    className="px-2 py-1 text-gray-600 text-lg rounded-full hover:text-black disabled:opacity-30"
  >
    ⬅
  </button>
  <button
    onClick={nextSlide}
    disabled={currentIndex >= reviews.length - 3}
    className="px-2 py-1 text-gray-600 text-lg rounded-full hover:text-black disabled:opacity-30"
  >
    ➡
  </button>
</div>


        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: reviews.length - 2 }).map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-indigo-600" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
