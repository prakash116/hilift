import React, { useRef } from "react";
import Main from "../Main";
import { motion, useInView } from "framer-motion";
import StatsSection from "../StatesSections";

function Home() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const LiftInfo = [
    {
      id: 1,
      img: "/hilift/Images/PREMIUMELEVATORS.jpeg",
      title: "PREMIUM ELEVATORS",
      content:
        "Luxury elevators with high-end finishes, smart controls, and ultra-smooth operation.",
    },
    {
      id: 2,
      img: "/hilift/Images/PLATINUM MAINTENANCE.jpeg",
      title: "PLATINUM MAINTENANCE",
      content: "24/7 priority support with IoT-powered predictive maintenance.",
    },
    {
      id: 3,
      img: "/hilift/Images/certificate.jpg",
      title: "GLOBAL CERTIFICATION",
      content: "Full compliance with international safety standards.",
    },
    {
      id: 4,
      img: "/hilift/Images/support.png",
      title: "BESPOKE SOLUTIONS",
      content: "Custom elevators with designer cabins and AI integration.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Main />

      <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-gray-100"
          >
            Our Premium Lift Services
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {LiftInfo.map((lift) => (
              <motion.div
                key={lift.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden bg-white p-4"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={lift.img}
                      alt={lift.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                <div className="p-6 flex flex-col flex-grow">
                  <motion.h3
                    className="text-xl font-semibold text-gray-800 mb-3"
                    whileHover={{ color: "#3b82f6" }}
                  >
                    {lift.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 mb-6 flex-grow"
                    whileHover={{ scale: 1.01 }}
                  >
                    {lift.content}
                  </motion.p>

                  <div className="mt-auto">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#1d4ed8",
                      }}
                      whileTap={{
                        scale: 0.98,
                        backgroundColor: "#1e40af",
                      }}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <div className="pb-10 px-3">
      <StatsSection/>
      </div>
    </div>
  );
}

export default Home;
