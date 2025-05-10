import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Main = () => {
  const slides = [
    {
      id: 1,
      title: "Premium Elevators",
      description: "Custom-designed luxury elevators with cutting-edge technology",
      bgImage: "/hilift/Images/3256.jpg",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Smart Solutions",
      description: "IoT-enabled predictive maintenance for uninterrupted service",
      bgImage: "/hilift/Images/imgl.jpg",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Global Standards",
      description: "Certified compliance with international safety regulations",
      bgImage: "/hilift/Images/3654.jpg",
      textColor: "text-white",
    },
    {
      id: 4,
      title: "Bespoke Designs",
      description: "Tailor-made solutions for your architectural vision",
      bgImage: "/hilift/Images/p.png",
      textColor: "text-gray-800",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const slideInterval = useRef(null);

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const dotVariants = {
    initial: { scale: 0.8 },
    active: { 
      scale: 1.2,
      width: '1.5rem',
      backgroundColor: 'rgba(255,255,255,1)'
    },
    inactive: {
      scale: 1,
      width: '0.75rem',
      backgroundColor: 'rgba(255,255,255,0.5)'
    }
  };

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    startSlideTimer();
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    startSlideTimer();
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    startSlideTimer();
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slides[currentSlide].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className={`absolute w-full h-full flex items-center justify-center ${slides[currentSlide].textColor}`}
          style={{
            backgroundImage: `url(${slides[currentSlide].bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="text-center max-w-2xl mx-auto px-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              {slides[currentSlide].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            variants={dotVariants}
            initial="initial"
            animate={currentSlide === index ? "active" : "inactive"}
            className="h-3 rounded-full bg-white"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full z-10"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.5)' }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full z-10"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.5)' }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Main;