import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const ExploreServices = () => {
  const [currentFloor, setCurrentFloor] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const controls = useAnimation();
  
  const services = [
    {
      title: "Residential Elevators",
      description: "Smooth, quiet lifts for your home with customizable designs to match any decor.",
      icon: "🏡",
      color: "from-indigo-500 via-purple-600 to-blue-600",
      features: ["Custom finishes", "Whisper-quiet", "Smart home integration"]
    },
    {
      title: "Commercial Solutions",
      description: "High-capacity elevators engineered for office buildings and busy businesses.",
      icon: "🏢",
      color: "from-amber-500 via-orange-600 to-red-600",
      features: ["High capacity", "Energy efficient", "24/7 reliability"]
    },
    {
      title: "Accessibility Lifts",
      description: "ADA-compliant solutions ensuring universal access for all abilities.",
      icon: "♿",
      color: "from-emerald-500 via-teal-600 to-green-600",
      features: ["ADA compliant", "Wheelchair access", "Safety first"]
    },
    {
      title: "Maintenance Plans",
      description: "Comprehensive 24/7 support and preventive maintenance packages.",
      icon: "🔧",
      color: "from-blue-500 via-cyan-600 to-sky-600",
      features: ["24/7 support", "Predictive maintenance", "Rapid response"]
    },
    {
      title: "Modernization",
      description: "Cutting-edge upgrades bringing your existing elevator into the future.",
      icon: "🔄",
      color: "from-rose-500 via-pink-600 to-fuchsia-600",
      features: ["Smart controls", "Energy savings", "Modern aesthetics"]
    }
  ];

  const handleFloorSelect = async (floor) => {
    if (!isMoving && floor !== currentFloor) {
      setIsMoving(true);
      
      // Animation sequence
      await controls.start({
        y: [0, -10, 0],
        transition: { duration: 0.3 }
      });
      
      setTimeout(() => {
        setCurrentFloor(floor);
        setIsMoving(false);
      }, 800);
    }
  };

  // Responsive adjustments
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white bg-opacity-5"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
              Elevate
            </span> Your Expectations
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover Hi-Lift's innovative vertical transportation solutions that combine cutting-edge technology with elegant design.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row bg-white bg-opacity-5 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white border-opacity-10"
        >
          {/* Elevator Display - Left Side */}
          <div className={`flex-1 p-6 md:p-10 flex flex-col justify-center relative min-h-[400px] md:min-h-[500px] bg-gradient-to-br ${services[currentFloor].color} transition-all duration-1000`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFloor}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center md:text-left"
              >
                <motion.div 
                  className="text-6xl md:text-7xl mb-6 inline-block"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {services[currentFloor].icon}
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white drop-shadow-lg">
                  {services[currentFloor].title}
                </h3>
                <p className="text-lg md:text-xl text-white text-opacity-90 mb-6 leading-relaxed max-w-2xl mx-auto md:mx-0">
                  {services[currentFloor].description}
                </p>
                
                <div className="mb-8 flex flex-wrap justify-center md:justify-start gap-2 max-w-lg mx-auto md:mx-0">
                  {services[currentFloor].features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="px-3 py-1.5 bg-white bg-opacity-20 rounded-full text-sm text-black"
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 border-2 border-white border-opacity-30 hover:border-opacity-50 shadow-lg flex items-center mx-auto md:mx-0"
                >
                  Explore Service
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </AnimatePresence>
            
            {/* Elevator Shaft (Desktop only) */}
            {!isMobile && (
              <div className="hidden lg:block absolute right-6 top-0 bottom-0 w-20 bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white via-opacity-5 to-transparent bg-[length:100%_40px]"></div>
                <motion.div 
                  className="w-16 h-28 bg-white rounded-lg absolute left-1/2 -translate-x-1/2 mt-4 shadow-lg overflow-hidden"
                  animate={{ y: `${currentFloor * 20}%` }}
                  transition={{ type: "spring", damping: 10, stiffness: 100 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 rounded-lg flex flex-col items-center justify-center p-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold shadow-inner">
                      {currentFloor + 1}
                    </div>
                    <div className="mt-2 w-full flex justify-center gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-gray-400"></div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
          
          {/* Floor Buttons - Right Side */}
          <div className="lg:w-24 bg-gray-900 bg-opacity-80 backdrop-blur-md flex lg:flex-col justify-around p-4 border-t lg:border-t-0 lg:border-l border-white border-opacity-10">
            {services.map((service, index) => (
              <motion.button
                key={index}
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full font-bold text-cyan-500 flex items-center justify-center relative transition-all duration-300 ${
                  currentFloor === index 
                    ? 'bg-white text-gray-900 shadow-lg shadow-white/30' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                onClick={() => handleFloorSelect(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                disabled={isMoving}
                animate={controls}
              >
                {index + 1}
                {isMoving && currentFloor === index && (
                  <motion.span 
                    className="absolute w-3 h-3 bg-white rounded-full -top-1 -right-1"
                    animate={{ 
                      scale: [1, 1.5, 1], 
                      opacity: [1, 0.5, 1],
                      boxShadow: ["0 0 0 0 rgba(255,255,255,0.7)", "0 0 0 10px rgba(255,255,255,0)"]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Mobile elevator indicator */}
        {isMobile && (
          <motion.div 
            className="mt-6 mx-auto w-full max-w-xs h-2 bg-gray-700 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
              animate={{ 
                width: ['0%', '100%', '0%'],
                x: ['0%', '0%', '100%']
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExploreServices;