import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Number increment animation component
const AnimatedNumber = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const start = 0;
    const end = parseInt(value.replace('+', ''));
    const incrementTime = (duration / end) * 10;

    let current = start;
    const timer = setInterval(() => {
      current += 1;
      setCurrentValue(current);
      if (current >= end) {
        clearInterval(timer);
        setCurrentValue(value);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{currentValue}{value.includes('+') && '+'}</span>;
};

const OurNetwork = () => {
  const cities = [
    { name: "Delhi", technicians: 120, serviceCenters: 5 },
    { name: "Noida", technicians: 85, serviceCenters: 3 },
    { name: "Gurgaon", technicians: 75, serviceCenters: 3 },
    { name: "Faridabad", technicians: 45, serviceCenters: 2 },
    { name: "Ghaziabad", technicians: 38, serviceCenters: 2 },
  ];

  const stateCoverage = [
    { state: "Delhi NCR", coverage: "100%" },
    { state: "Haryana", coverage: "95%" },
    { state: "Uttar Pradesh", coverage: "90%" },
    { state: "Rajasthan", coverage: "85%" },
    { state: "Punjab", coverage: "80%" },
  ];

  const stats = [
    {
      id: 1,
      name: "Cities Covered",
      value: "25+",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Service Centers",
      value: "20+",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      color: "bg-green-500",
    },
    {
      id: 3,
      name: "Certified Technicians",
      value: "500+",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      color: "bg-yellow-500",
    },
    {
      id: 4,
      name: "Avg. Response Time",
      value: "2.5 hrs",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "bg-red-500",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with creative animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          {/* Floating animated elements */}
          <motion.div
            className="absolute -top-8 -left-8 w-16 h-16 bg-blue-100 rounded-full opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -5, 5, 0],
              y: [0, -5, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 w-20 h-20 bg-yellow-100 rounded-full opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 5, -5, 0],
              y: [0, 5, -5, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.h2 
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4 relative z-10"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Our Nationwide Network
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Serving across India with the largest team of certified lift
            technicians
          </motion.p>
        </motion.div>

        {/* Stats Cards with number animation and creative design */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white overflow-hidden shadow rounded-xl border border-gray-100 relative"
            >
              {/* Animated background element */}
              <motion.div
                className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full opacity-10 ${stat.color}`}
                animate={{ 
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="relative z-10 p-6">
                <div className="flex items-center">
                  <motion.div 
                    className={`flex-shrink-0 ${stat.color} rounded-xl p-3 shadow-md`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <motion.dd 
                      className="flex items-baseline"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.name.includes("Response") ? (
                          stat.value
                        ) : (
                          <AnimatedNumber value={stat.value} />
                        )}
                      </div>
                    </motion.dd>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated City Coverage Table with creative design */}
        <motion.div 
          className="bg-white shadow-lg overflow-hidden sm:rounded-2xl mb-16 border border-gray-200"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Table header with gradient */}
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-gray-50">
            <motion.h3 
              className="text-lg leading-6 font-medium text-gray-900 flex items-center"
              whileHover={{ scale: 1.01 }}
            >
              <svg
                className="h-5 w-5 text-blue-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Major Cities Coverage
            </motion.h3>
            <p className="mt-1 text-sm text-gray-600">
              Our technician strength and service centers in key cities
            </p>
          </div>
          <div className="px-4 py-5 sm:p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {["City", "Technicians", "Service Centers", "Response Time"].map((header, idx) => (
                      <motion.th
                        key={idx}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.05 }}
                      >
                        {header}
                      </motion.th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <AnimatePresence>
                    {cities.map((city, index) => (
                      <motion.tr
                        key={city.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{
                          backgroundColor: "rgba(59, 130, 246, 0.05)",
                        }}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center"
                          >
                            <motion.div 
                              className="flex-shrink-0 h-5 w-5 text-blue-500"
                              animate={{ rotate: [0, 360] }}
                              transition={{ 
                                delay: 1 + index * 0.2,
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear"
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </motion.div>
                            <span className="ml-2">{city.name}</span>
                          </motion.div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <div className="w-2/4 bg-gray-200 rounded-full h-2.5 mr-2">
                              <motion.div
                                className="bg-blue-600 h-2.5 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${(city.technicians / 120) * 100}%` }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                              />
                            </div>
                            <AnimatedNumber value={city.technicians.toString()} />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                          >
                            <AnimatedNumber value={city.serviceCenters.toString()} />
                          </motion.div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <motion.span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              city.technicians > 80
                                ? "bg-green-100 text-green-800"
                                : city.technicians > 50
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                          >
                            {city.technicians > 80
                              ? "<2 hours"
                              : city.technicians > 50
                              ? "<4 hours"
                              : "<6 hours"}
                          </motion.span>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* State Coverage with creative design and animations */}
        <motion.div
          className="bg-white shadow-lg overflow-hidden sm:rounded-2xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Header with gradient */}
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-gray-50">
            <motion.h3 
              className="text-lg leading-6 font-medium text-gray-900 flex items-center"
              whileHover={{ scale: 1.01 }}
            >
              <svg
                className="h-5 w-5 text-blue-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              State-wise Coverage
            </motion.h3>
            <p className="mt-1 text-sm text-gray-600">
              Our service availability across Indian states
            </p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {stateCoverage.map((state, index) => (
                  <motion.div
                    key={state.state}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    }}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden"
                  >
                    {/* Animated background elements */}
                    <motion.div
                      className={`absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-10 ${
                        state.coverage === "100%"
                          ? "bg-green-500"
                          : state.coverage >= "90%"
                          ? "bg-blue-500"
                          : state.coverage >= "80%"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className={`absolute -left-8 -bottom-8 w-20 h-20 rounded-full opacity-10 ${
                        state.coverage === "100%"
                          ? "bg-green-500"
                          : state.coverage >= "90%"
                          ? "bg-blue-500"
                          : state.coverage >= "80%"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{ 
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-medium text-gray-900">
                          {state.state}
                        </h4>
                        <motion.span
                          className={`px-3 py-1 text-sm font-semibold rounded-full ${
                            state.coverage === "100%"
                              ? "bg-green-100 text-green-800"
                              : state.coverage >= "90%"
                              ? "bg-blue-100 text-blue-800"
                              : state.coverage >= "80%"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {state.coverage}
                        </motion.span>
                      </div>
                      <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div
                            className={`h-3 rounded-full ${
                              state.coverage === "100%"
                                ? "bg-green-500"
                                : state.coverage >= "90%"
                                ? "bg-blue-500"
                                : state.coverage >= "80%"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: state.coverage }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Floating animated elements in the background */}
        <motion.div
          className="fixed -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-10 pointer-events-none"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="fixed -top-40 -right-40 w-80 h-80 bg-yellow-100 rounded-full opacity-10 pointer-events-none"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default OurNetwork;