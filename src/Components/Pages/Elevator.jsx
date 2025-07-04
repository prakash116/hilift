import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiftEnquiry from "../LiftEnquiry";

const Elevator = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedLift, setSelectedLift] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    liftModel: ""
  });

  const handleGetQuote = (liftType) => {
    setSelectedLift(liftType);
    setShowQuoteForm(true);
    setFormData(prev => ({
      ...prev,
      liftModel: liftType.name
    }));
  };

  const closeQuoteForm = () => {
    setShowQuoteForm(false);
    setTimeout(() => setSelectedLift(null), 300);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Close the form after submission
    closeQuoteForm();
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      liftModel: ""
    });
  };

  const LiftTypesArray = [
    {
      id: "PT-100",
      name: "Passenger Elevator",
      img: "/hilift/Images/LiftType/Passenger Elevator3.jpg",
      capacities: [
        "6-person",
        "8-person",
        "10-person",
        "13-person",
        "16-person",
        "20-person",
      ],
      standardModels: [
        {
          code: "PT-600",
          capacity: "6-person (450kg)",
          speed: "1.0 m/s",
          stops: "2-10",
          priceRange: "$18,000-$35,000",
        },
        {
          code: "PT-1000",
          capacity: "10-person (750kg)",
          speed: "1.5 m/s",
          stops: "2-15",
          priceRange: "$25,000-$50,000",
        },
      ],
      features: [
        "Smooth ride",
        "Energy efficient",
        "ADA compliant options",
        "Touchless controls",
      ],
    },
    {
      id: "FT-200",
      name: "Freight Elevator",
      img: "/hilift/Images/LiftType/Freight Elevator1.jpeg",
      capacities: ["1000kg", "2000kg", "3000kg", "5000kg", "10000kg"],
      standardModels: [
        {
          code: "FT-2000",
          capacity: "2000kg",
          doorType: "Manual collapsible gate",
          platformSize: "1.5m × 2m",
          priceRange: "$22,000-$45,000",
        },
      ],
      features: [
        "Heavy-duty construction",
        "Industrial flooring",
        "Wide door options",
        "Overload protection",
      ],
    },
    {
      id: "HT-300",
      name: "Home Elevator",
      img: "/hilift/Images/LiftType/Home Elevator.jpeg",
      capacities: ["2-person", "3-person", "4-person"],
      standardModels: [
        {
          code: "HT-250",
          capacity: "2-person (250kg)",
          type: "Hydraulic",
          travel: "Up to 4 floors",
          priceRange: "$20,000-$35,000",
        },
        {
          code: "HT-400",
          capacity: "4-person (400kg)",
          type: "Traction",
          travel: "Up to 6 floors",
          priceRange: "$28,000-$50,000",
        },
      ],
      features: [
        "Compact design",
        "Quiet operation",
        "Custom finishes",
        "Battery backup",
      ],
    },
    {
      id: "MT-400",
      name: "Hospital Elevator",
      img: "/hilift/Images/LiftType/Hospital Elevator.jpg",
      capacities: ["8-person", "10-person", "12-person"],
      standardModels: [
        {
          code: "MT-1000",
          capacity: "10-person + stretcher",
          cabinSize: "1.6m × 2.7m",
          doorWidth: "1.1m",
          priceRange: "$55,000-$120,000",
        },
      ],
      features: [
        "Gentle acceleration",
        "Bacteria-resistant surfaces",
        "Emergency power",
        "Doctor control",
      ],
    },
    {
      id: "MR-500",
      name: "Machine Room-Less Elevator",
      img: "/hilift/Images/LiftType/Machine Room-Less Elevator.jpg",
      capacities: ["6-person", "8-person", "10-person", "13-person"],
      standardModels: [
        {
          code: "MR-800",
          capacity: "8-person (630kg)",
          speed: "1.0 m/s",
          heightLimit: "30 floors",
          priceRange: "$30,000-$65,000",
        },
      ],
      features: [
        "Space saving",
        "Energy efficient",
        "Reduced construction cost",
        "IoT monitoring",
      ],
    },
    {
      id: "GT-600",
      name: "Goods Lift",
      img: "/hilift/Images/LiftType/Goods Lift3.jpeg",
      capacities: ["500kg", "1000kg", "1500kg"],
      standardModels: [
        {
          code: "GT-1000",
          capacity: "1000kg",
          control: "Key operated",
          platform: "Stainless steel",
          priceRange: "$15,000-$30,000",
        },
      ],
      features: [
        "Basic operation",
        "Durable construction",
        "Cost effective",
        "Low maintenance",
      ],
    },
    {
      id: "DW-700",
      name: "Dumbwaiter",
      img: "/hilift/Images/LiftType/Dumbwaiter2.jpeg",
      capacities: ["2-person", "4-person"],
      standardModels: [
        {
          code: "DW-25",
          capacity: "2-person/25kg",
          stops: "2-6",
          priceRange: "$8,000-$15,000",
        },
        {
          code: "DW-50",
          capacity: "4-person/50kg",
          stops: "2-8",
          priceRange: "$12,000-$20,000",
        },
      ],
      features: [
        "Compact size",
        "Food-safe materials",
        "Automatic doors",
        "Silent operation",
      ],
    },
  ];

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen py-8 relative">
      <div className="w-[95%] mx-auto px-4 pb-5 md:pb-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-6"
        >
          Our Elevator Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
        >
          Premium vertical transportation solutions tailored to your needs
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6"
        >
          {LiftTypesArray.map((liftType, index) => (
            <motion.div
              key={liftType.id}
              variants={cardVariants}
              whileHover="hover"
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden ${
                expandedCard === liftType.id ? "ring-2 ring-blue-500" : ""
              }`}
              style={{
                height: expandedCard === liftType.id ? "auto" : "28rem",
              }}
            >
              <div
                className={`flex flex-col lg:flex-row ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                } h-full`}
              >
                <motion.div
                  className="lg:w-1/2 h-64 lg:h-full bg-white p-4"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <img
                    src={liftType.img}
                    alt={liftType.name}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <div className="lg:w-1/2 p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {liftType.id}
                      </span>
                      <motion.h2
                        className="text-2xl font-bold mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {liftType.name}
                      </motion.h2>
                    </div>
                    <motion.button
                      onClick={() => toggleExpand(liftType.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                      aria-label={
                        expandedCard === liftType.id ? "Collapse" : "Expand"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform ${
                          expandedCard === liftType.id ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.button>
                  </div>

                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {liftType.capacities.map((capacity) => (
                        <motion.span
                          key={capacity}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs font-medium"
                        >
                          {capacity}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="mt-4 flex-grow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="font-semibold text-lg">Key Features</h3>
                    <ul className="mt-2 space-y-2">
                      {liftType.features.slice(0, 3).map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start"
                          whileHover={{ x: 5 }}
                        >
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <AnimatePresence>
                    {expandedCard === liftType.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 overflow-hidden"
                      >
                        <div className="border-t pt-4">
                          <h3 className="font-semibold text-lg mb-2">
                            Standard Models
                          </h3>
                          <div className="space-y-4">
                            {liftType.standardModels.map((model, i) => (
                              <motion.div
                                key={i}
                                className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <h4 className="font-medium">{model.code}</h4>
                                <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                                  <div>
                                    <span className="text-gray-500 dark:text-gray-400">
                                      Capacity:
                                    </span>
                                    <span className="ml-2">
                                      {model.capacity}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 dark:text-gray-400">
                                      Price:
                                    </span>
                                    <span className="ml-2">
                                      {model.priceRange}
                                    </span>
                                  </div>
                                  {model.speed && (
                                    <div>
                                      <span className="text-gray-500 dark:text-gray-400">
                                        Speed:
                                      </span>
                                      <span className="ml-2">
                                        {model.speed}
                                      </span>
                                    </div>
                                  )}
                                  {model.doorType && (
                                    <div>
                                      <span className="text-gray-500 dark:text-gray-400">
                                        Door:
                                      </span>
                                      <span className="ml-2">
                                        {model.doorType}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    className="mt-6 flex justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      onClick={() => toggleExpand(liftType.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-600 dark:text-blue-400 font-medium"
                    >
                      {expandedCard === liftType.id
                        ? "Show Less"
                        : "View Details"}
                    </motion.button>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "#1d4ed8",
                        boxShadow: "0 5px 15px rgba(29, 78, 216, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleGetQuote(liftType)}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg transition-all 
                                relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center">
                        Get Quote
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 rounded-lg"></span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <LiftEnquiry/>

      {/* Quote Form Popup */}
      <AnimatePresence>
        {showQuoteForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeQuoteForm}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full 
                        max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeQuoteForm}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 
                          dark:hover:bg-gray-700 transition-colors"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-6">
                <motion.h2 
                  className="text-2xl font-bold mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Request a Quote
                </motion.h2>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  For {selectedLift?.name}
                </motion.p>

                <form onSubmit={handleSubmit}>
                  <motion.div
                    variants={formItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                    className="mb-4"
                  >
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                    />
                  </motion.div>

                  <motion.div
                    variants={formItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.35 }}
                    className="mb-4"
                  >
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                    />
                  </motion.div>

                  <motion.div
                    variants={formItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                    className="mb-4"
                  >
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                    />
                  </motion.div>

                  <motion.div
                    variants={formItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.45 }}
                    className="mb-4"
                  >
                    <label htmlFor="liftModel" className="block mb-2 font-medium">
                      Elevator Model
                    </label>
                    <input
                      type="text"
                      id="liftModel"
                      name="liftModel"
                      value={formData.liftModel}
                      onChange={handleInputChange}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                                bg-gray-100 dark:bg-gray-600 cursor-not-allowed"
                    />
                  </motion.div>

                  <motion.div
                    variants={formItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                    className="mb-6"
                  >
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg 
                              transition-colors shadow-lg"
                    variants={formItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.55 }}
                  >
                    Submit Request
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Elevator;