import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorkingProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      title: "Consultation & Planning",
      content: "Our experts meet with you to understand your requirements, building specifications, and design preferences to create a customized elevator solution.",
      icon: "📐",
      color: "from-purple-500 to-blue-500",
      accent: "bg-blue-500"
    },
    {
      title: "Engineering Design",
      content: "Our engineering team creates precise technical drawings and 3D models, ensuring compliance with all safety standards and architectural requirements.",
      icon: "🖥️",
      color: "from-blue-500 to-teal-500",
      accent: "bg-teal-500"
    },
    {
      title: "Precision Manufacturing",
      content: "Using premium materials and cutting-edge technology, we craft each component with precision in our state-of-the-art manufacturing facility.",
      icon: "🏭",
      color: "from-teal-500 to-green-500",
      accent: "bg-green-500"
    },
    {
      title: "Quality Assurance",
      content: "Every component undergoes rigorous testing to ensure flawless operation, durability, and adherence to international quality standards.",
      icon: "🔍",
      color: "from-green-500 to-yellow-500",
      accent: "bg-yellow-500"
    },
    {
      title: "Professional Installation",
      content: "Our certified technicians install your elevator with minimal disruption, ensuring perfect integration with your building's infrastructure.",
      icon: "🛠️",
      color: "from-yellow-500 to-orange-500",
      accent: "bg-orange-500"
    },
    {
      title: "After-Sales Service",
      content: "We provide comprehensive maintenance packages and 24/7 support to keep your elevator operating at peak performance.",
      icon: "📞",
      color: "from-orange-500 to-red-500",
      accent: "bg-red-500"
    }
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

  const stepItemVariants = {
    hidden: { opacity: 0, y: -20 },
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
      scale: 1.03,
      backgroundColor: "rgba(16, 185, 129, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  const contentVariants = {
    enter: { 
      opacity: 0, 
      y: 20,
    },
    center: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 } 
    }
  };

  return (
    <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p 
            variants={stepItemVariants}
            className="text-cyan-400 font-medium mb-3 tracking-widest text-xs sm:text-sm uppercase"
          >
            Crafting Vertical Mobility
          </motion.p>
          <motion.h2 
            variants={stepItemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4"
          >
            Our Working Process
          </motion.h2>
          <motion.div
            variants={stepItemVariants}
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Process Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Process Steps Column */}
          <div className="lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4">
              {processSteps.map((step, index) => (
                <motion.button
                  key={index}
                  variants={stepItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover="hover"
                  onClick={() => setActiveStep(index)}
                  className={`px-4 py-3 md:px-6 md:py-4 rounded-lg md:rounded-xl flex flex-col items-center text-center lg:flex-row lg:text-left transition-all ${
                    activeStep === index ? 
                    'bg-gradient-to-r from-gray-800/80 to-gray-900/80 shadow-lg border-t-2 lg:border-l-4 border-cyan-400' : 
                    'bg-gray-800/50 hover:bg-gray-800/70'
                  }`}
                >
                  <motion.span 
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base mb-2 lg:mb-0 lg:mr-4 ${
                      activeStep === index ? 
                      'bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-md' : 
                      'bg-gray-700 text-gray-300'
                    }`}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {index + 1}
                  </motion.span>
                  
                  <span className={`text-xs sm:text-sm md:text-base font-medium ${
                    activeStep === index ? 'text-cyan-300' : 'text-gray-300'
                  }`}>
                    {step.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content Display Column */}
          <div className="lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`relative bg-gradient-to-br ${processSteps[activeStep].color}/10 backdrop-blur-sm md:backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-700/30 shadow-lg md:shadow-xl h-full`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-white to-gray-200 flex items-center justify-center text-3xl md:text-4xl shadow-md mr-4 md:mr-6">
                      {processSteps[activeStep].icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                      {processSteps[activeStep].title}
                    </h3>
                  </div>

                  <p className="text-gray-200 text-sm md:text-base lg:text-lg mb-6 leading-relaxed flex-1">
                    {processSteps[activeStep].content}
                  </p>

                  <div className="bg-gray-900/30 rounded-lg md:rounded-xl p-4 md:p-5 border border-gray-700/30 mb-6">
                    <h4 className="text-cyan-300 font-medium mb-2 md:mb-3 text-sm md:text-base">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {[
                        "Certified quality materials",
                        "Energy efficient solutions",
                        "Customizable designs",
                        "24/7 monitoring available"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-300 text-xs md:text-sm lg:text-base">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 md:mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="flex justify-between items-center">
                      <div className="text-xs md:text-sm text-gray-400">
                        Step {activeStep + 1} of {processSteps.length}
                      </div>
                      <div className="flex space-x-2">
                        {processSteps.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveStep(i)}
                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                              activeStep === i ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;