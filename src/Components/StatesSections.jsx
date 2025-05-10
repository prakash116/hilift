// Updated StatsSection.js with props
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const StatsSection = ({ 
  title = "Our Pan-India Coverage",
  subtitle = "Trusted by thousands of buildings",
  buttonText = "Our Network",
  buttonLink = "/network",
  stats = [
    { value: "25+", label: "Cities Covered" },
    { value: "500+", label: "Technicians" },
    { value: "10K+", label: "Lifts Serviced" },
    { value: "24/7", label: "Emergency Support" }
  ]
}) => {
  return (
    <div className="mt-16">
      <div className="bg-blue-700 rounded-xl shadow-xl overflow-hidden">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">{title}</span>
            <span className="block text-blue-200">{subtitle}</span>
          </h2>
          <NavLink to={buttonLink}>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  {buttonText}
                </motion.div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
            <div className="mt-2 text-sm font-medium text-gray-500">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;