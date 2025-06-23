import React, { useRef, useState } from "react";
import Main from "../Main";
import { motion, useInView, AnimatePresence } from "framer-motion";
import WorkingProcess from "../OurWork";

function Home() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [selectedLift, setSelectedLift] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const LiftInfo = [
    {
      id: 1,
      img: "/hilift/Images/PREMIUMELEVATORS.jpeg",
      title: "PREMIUM ELEVATORS",
      content: "Luxury elevators with high-end finishes, smart controls, and ultra-smooth operation.",
      details: "Our premium elevators redefine vertical transportation with bespoke designs, whisper-quiet operation, and cutting-edge technology.",
      features: [
        {
          title: "AI-Powered Control",
          description: "Intelligent destination dispatch learns user patterns for optimal efficiency",
          icon: "🤖"
        },
        {
          title: "Luxury Materials",
          description: "Choose from Italian marble, brushed metals, or designer wood finishes",
          icon: "💎"
        },
        {
          title: "Mood Lighting",
          description: "Dynamic LED lighting adjusts to time of day and user preferences",
          icon: "💡"
        },
        {
          title: "Safety Systems",
          description: "Multiple redundant safety mechanisms with real-time monitoring",
          icon: "🛡️"
        }
      ],
      stats: [
        { value: "99.9%", label: "Uptime Reliability" },
        { value: "0.5s", label: "Leveling Accuracy" },
        { value: "<45dB", label: "Noise Level" }
      ]
    },
    {
      id: 2,
      img: "/hilift/Images/PLATINUM MAINTENANCE.jpeg",
      title: "PLATINUM MAINTENANCE",
      content: "24/7 priority support with IoT-powered predictive maintenance.",
      details: "Our Platinum Maintenance program ensures your elevators operate at peak performance with minimal downtime through advanced monitoring.",
      features: [
        {
          title: "Predictive Alerts",
          description: "Get notified of potential issues before they occur",
          icon: "🔮"
        },
        {
          title: "24/7 Monitoring",
          description: "Dedicated team watching your systems around the clock",
          icon: "👁️"
        },
        {
          title: "Rapid Response",
          description: "Guaranteed 4-hour emergency service window",
          icon: "⚡"
        },
        {
          title: "Digital Reports",
          description: "Comprehensive monthly performance analytics",
          icon: "📊"
        }
      ],
      stats: [
        { value: "4h", label: "Max Response Time" },
        { value: "95%", label: "Remote Resolution" },
        { value: "24/7", label: "Support Availability" }
      ]
    },
    {
      id: 3,
      img: "/hilift/Images/certificate.jpg",
      title: "GLOBAL CERTIFICATION",
      content: "Full compliance with international safety standards.",
      details: "All our elevators meet or exceed global safety standards with rigorous testing and quality control processes.",
      features: [
        {
          title: "EN 81-20/50",
          description: "Compliant with latest European safety standards",
          icon: "🇪🇺"
        },
        {
          title: "ASME A17.1",
          description: "Certified to North American elevator standards",
          icon: "🇺🇸"
        },
        {
          title: "ISO 9001",
          description: "Quality management system certification",
          icon: "🏅"
        },
        {
          title: "Seismic Rated",
          description: "Optional earthquake-resistant designs",
          icon: "🌍"
        }
      ],
      stats: [
        { value: "100+", label: "Countries Certified" },
        { value: "0", label: "Safety Incidents" },
        { value: "5★", label: "Safety Rating" }
      ]
    },
    {
      id: 4,
      img: "/hilift/Images/support.png",
      title: "BESPOKE SOLUTIONS",
      content: "Custom elevators with designer cabins and AI integration.",
      details: "Create the elevator of your dreams with our bespoke design service, tailored to your exact specifications and aesthetic preferences.",
      features: [
        {
          title: "3D Design",
          description: "Virtual reality walkthroughs before construction",
          icon: "👓"
        },
        {
          title: "Material Library",
          description: "Thousands of finish options to choose from",
          icon: "🎨"
        },
        {
          title: "Brand Integration",
          description: "Custom logos, colors, and styling available",
          icon: "🏷️"
        },
        {
          title: "Signature Scents",
          description: "Optional custom fragrance diffusion system",
          icon: "🌸"
        }
      ],
      stats: [
        { value: "∞", label: "Design Options" },
        { value: "8w", label: "Avg. Design Time" },
        { value: "100%", label: "Client Satisfaction" }
      ]
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.3 }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-x-hidden">
      <Main />

      {/* Floating bubbles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              opacity: 0.1,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content section */}
      <section ref={sectionRef} className="py-16 px-4 sm:py-20 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.p 
              variants={titleVariants}
              className="text-blue-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base tracking-widest"
            >
              ELEVATING EXPERIENCES
            </motion.p>
            <motion.h2
              variants={titleVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-3 sm:mb-4"
            >
              Our Premium Lift Services
            </motion.h2>
            <motion.div
              variants={titleVariants}
              className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {LiftInfo.map((lift) => (
              <motion.div
                key={lift.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden flex flex-col h-full border border-gray-700/50 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-10" />
                  <div className="relative w-full aspect-video overflow-hidden">
                    <img
                      src={lift.img}
                      alt={lift.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <motion.h3
                    className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2 sm:mb-3"
                    whileHover={{ 
                      backgroundImage: "linear-gradient(to right, #60a5fa, #22d3ee)"
                    }}
                  >
                    {lift.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 mb-4 sm:mb-6 flex-grow text-sm sm:text-base"
                    whileHover={{ scale: 1.01 }}
                  >
                    {lift.content}
                  </motion.p>

                  <div className="mt-auto">
                    <motion.button
                      whileHover={{
                        scale: 1.03,
                        backgroundImage: "linear-gradient(to right, #2563eb, #0284c7)",
                        boxShadow: "0 0 15px rgba(37, 99, 235, 0.5)"
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      onClick={() => {
                        setSelectedLift(lift);
                        setActiveFeature(0);
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative z-10 flex items-center justify-center">
                        Explore Features
                        <motion.span 
                          className="ml-2"
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut"
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal/Popup */}
      <AnimatePresence>
        {selectedLift && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
              onClick={() => setSelectedLift(null)}
            />
            
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              className="fixed inset-0 m-auto z-50 max-w-6xl w-[95%] h-[90vh] max-h-[800px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 flex flex-col"
            >
              <button 
                onClick={() => setSelectedLift(null)}
                className="absolute top-4 right-4 z-50 text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 rounded-full p-2 transition-colors backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative h-40 sm:h-48 md:h-56 w-full overflow-hidden">
                <img
                  src={selectedLift.img}
                  alt={selectedLift.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {selectedLift.title}
                  </h2>
                  <p className="text-blue-200 font-medium mt-1">{selectedLift.content}</p>
                </div>
              </div>

              <div className="flex-grow overflow-y-auto p-6 sm:p-8">
                <div className="max-w-4xl mx-auto">
                  <motion.p 
                    className="text-lg text-gray-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedLift.details}
                  </motion.p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                    {/* Features Section */}
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedLift.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            variants={featureItemVariants}
                            className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${activeFeature === index ? 'bg-gray-700/50 border border-cyan-400/30' : 'bg-gray-800/50 hover:bg-gray-700/30'}`}
                            onClick={() => setActiveFeature(index)}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-start">
                              <span className="text-2xl mr-3">{feature.icon}</span>
                              <div>
                                <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                                <p className="text-gray-300 text-sm">{feature.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Stats Section */}
                    <div>
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
                        Performance Stats
                      </h3>
                      <div className="space-y-4">
                        {selectedLift.stats.map((stat, i) => (
                          <motion.div
                            key={i}
                            custom={i}
                            variants={statItemVariants}
                            className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50"
                          >
                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                              {stat.value}
                            </div>
                            <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Active Feature Detail */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 mb-8"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{selectedLift.features[activeFeature].icon}</span>
                      <h4 className="text-xl font-bold text-white">
                        {selectedLift.features[activeFeature].title}
                      </h4>
                    </div>
                    <p className="text-gray-300">
                      {selectedLift.features[activeFeature].description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div>
        <WorkingProcess/>
      </div>
    </div>
  );
}

export default Home;