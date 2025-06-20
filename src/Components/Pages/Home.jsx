import React, { useRef } from "react";
import Main from "../Main";
import { motion, useInView } from "framer-motion";
import WorkingProcess from "../OurWork";

function Home() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const LiftInfo = [
    {
      id: 1,
      img: "/hilift/Images/PREMIUMELEVATORS.jpeg",
      title: "PREMIUM ELEVATORS",
      content: "Luxury elevators with high-end finishes, smart controls, and ultra-smooth operation."
    },
    {
      id: 2,
      img: "/hilift/Images/PLATINUM MAINTENANCE.jpeg",
      title: "PLATINUM MAINTENANCE",
      content: "24/7 priority support with IoT-powered predictive maintenance."
    },
    {
      id: 3,
      img: "/hilift/Images/certificate.jpg",
      title: "GLOBAL CERTIFICATION",
      content: "Full compliance with international safety standards."
    },
    {
      id: 4,
      img: "/hilift/Images/support.png",
      title: "BESPOKE SOLUTIONS",
      content: "Custom elevators with designer cabins and AI integration."
    },
  ];

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
    hidden: {
      opacity: 0,
      y: 80,
    },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-x-hidden">
      <Main />

      {/* Subtle decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              opacity: 0.1,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <section ref={sectionRef} className="py-16 px-4 sm:py-20 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.p 
              variants={titleVariants}
              className="text-blue-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base"
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
                className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden flex flex-col h-full border border-gray-700/50 backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
                  <div className="relative w-full aspect-video overflow-hidden">
                    <img
                      src={lift.img}
                      alt={lift.title}
                      className="w-full h-full object-cover"
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
                        boxShadow: "0 0 10px rgba(37, 99, 235, 0.4)"
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base"
                    >
                      Learn More
                      <span className="ml-2">→</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <div>
        <WorkingProcess/>
      </div>
    </div>
  );
}

export default Home;