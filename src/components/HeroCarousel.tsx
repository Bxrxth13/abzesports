import { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/images/hero/abzposter.jpg',
    '/images/hero/abzposters.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      className="
        relative w-full bg-black overflow-hidden
        py-[var(--sec-y-mobile)] md:py-0
        md:min-h-[50vh] lg:min-h-[60vh]
      "
    >
      <div className="relative w-full">
        <div
            key={currentIndex}
            className="relative w-full sm:aspect-[16/9] overflow-hidden"
          >
            {/* MOBILE: natural height → no letterboxing; DESKTOP: cover inside aspect */}
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="
                block w-full h-auto
                sm:absolute sm:inset-0 sm:w-full sm:h-full
                sm:object-cover sm:object-top
              "
            />
        </div>

        {/* Indicators: inline below image on mobile; overlaid on sm+ */}
        <div
          className="
            mt-2 flex justify-center items-center gap-2
            sm:mt-0 sm:absolute sm:inset-x-0 sm:bottom-4 sm:z-20
          "
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 h-3 bg-red-600 border-2 border-red-400'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80 border-2 border-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
