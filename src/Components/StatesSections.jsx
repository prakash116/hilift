import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FiArrowRight, FiGlobe, FiUsers, FiTool, FiClock } from "react-icons/fi";

const StatsSection = ({ 
  title = "Our Pan-India Coverage",
  subtitle = "Trusted by thousands of buildings",
  buttonText = "Explore Our Network",
  buttonLink = "/network",
  stats = [
    { value: "25+", label: "Cities Covered", icon: <FiGlobe className="text-blue-500" /> },
    { value: "500+", label: "Certified Technicians", icon: <FiUsers className="text-blue-500" /> },
    { value: "10K+", label: "Lifts Serviced", icon: <FiTool className="text-blue-500" /> },
    { value: "24/7", label: "Emergency Support", icon: <FiClock className="text-blue-500" /> }
  ],
  backgroundPattern = true
}) => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Decorative background elements */}
      {backgroundPattern && (
        <>
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-400 filter blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-blue-300 filter blur-3xl"></div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/Images/elevator-pattern.svg')] bg-repeat opacity-20"></div>
          </div>
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animated gradient border */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
          className="relative bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-20"></div>
          
          <div className="relative py-8 px-6 sm:py-12 sm:px-8 lg:py-16 lg:px-12 lg:flex lg:items-center lg:justify-between">
            <motion.div variants={item} className="text-center lg:text-left mb-6 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                <span className="block">{title}</span>
                <span className="block text-blue-200 mt-2 text-lg sm:text-xl">{subtitle}</span>
              </h2>
            </motion.div>
            
            <motion.div variants={item} className="flex justify-center lg:justify-end">
              <NavLink to={buttonLink}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border border-transparent text-base sm:text-lg font-medium rounded-full shadow-sm text-blue-700 bg-white hover:bg-blue-50 transition-all duration-300"
                >
                  {buttonText}
                  <FiArrowRight className="ml-2 -mr-1" />
                </motion.div>
              </NavLink>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats cards with floating animation - 2 columns on mobile */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
          className="mt-8 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-5 sm:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background element */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-blue-100 opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              
              {/* Icon with floating animation - smaller on mobile */}
              <motion.div
                animate={{
                  y: [0, -3, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 3 + index,
                    ease: "easeInOut"
                  }
                }}
                className="w-10 h-10 sm:w-12 sm:h-12 mb-4 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xl sm:text-2xl"
              >
                {stat.icon}
              </motion.div>
              
              <div className="relative">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base font-medium text-gray-700">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional decorative element - hidden on smallest screens */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 sm:mt-14 text-center hidden xs:block"
        >
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium">
            <svg className="animate-pulse h-2 w-2 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Nationwide coverage with local expertise
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;