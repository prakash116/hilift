import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const liftServices = [
  {
    id: 1,
    title: "Basic Lift Repair",
    description: "Troubleshooting and fixing minor lift issues including door problems, button malfunctions, and minor electrical faults.",
    coverage: "Single-time service",
    benefits: ["24/7 support", "Genuine parts", "Expert technicians"],
    priceRange: "₹5,000 - ₹15,000",
    icon: "🔧",
    color: "bg-red-100 text-red-800"
  },
  {
    id: 2,
    title: "Comprehensive Lift Repair",
    description: "Complete overhaul and repair of major lift components including motor, control system, and mechanical parts.",
    coverage: "Single-time service with 30-day warranty",
    benefits: ["Detailed inspection report", "Safety certification", "Priority service"],
    priceRange: "₹20,000 - ₹50,000",
    icon: "🛠️",
    color: "bg-orange-100 text-orange-800"
  },
  {
    id: 3,
    title: "Emergency Lift Repair",
    description: "Immediate response for stuck lifts or critical failures with guaranteed 2-hour response time in metro cities.",
    coverage: "24/7 emergency service",
    benefits: ["Fastest response", "Trained rescue team", "Temporary fixes included"],
    priceRange: "₹15,000 - ₹35,000",
    icon: "🚨",
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    id: 4,
    title: "Silver AMC Plan",
    description: "Annual Maintenance Contract with quarterly inspections and basic repairs included.",
    coverage: "All India coverage",
    benefits: ["4 inspections/year", "Basic repairs included", "Discount on parts"],
    priceRange: "₹25,000 - ₹40,000/year",
    icon: "🥈",
    color: "bg-gray-100 text-gray-800"
  },
  {
    id: 5,
    title: "Gold AMC Plan",
    description: "Premium maintenance contract with monthly inspections and comprehensive coverage.",
    coverage: "Pan-India with 24-hour response",
    benefits: ["12 inspections/year", "All repairs included", "Emergency support", "Free modernization consultation"],
    priceRange: "₹50,000 - ₹80,000/year",
    icon: "🥇",
    color: "bg-amber-100 text-amber-800"
  },
  {
    id: 6,
    title: "Platinum AMC Plan",
    description: "Elite maintenance package with bi-monthly inspections and complete system coverage.",
    coverage: "Nationwide with 2-hour emergency response",
    benefits: ["24 inspections/year", "Full system coverage", "Dedicated account manager", "Advanced predictive maintenance"],
    priceRange: "₹1,00,000 - ₹1,50,000/year",
    icon: "💎",
    color: "bg-blue-100 text-blue-800"
  },
];

const RepairAMC = () => {
  const [activeTab, setActiveTab] = useState("repair");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredServices = liftServices.filter((service) =>
    activeTab === "repair"
      ? service.title.includes("Repair")
      : service.title.includes("AMC")
  );

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-8 sm:py-12 px-4 overflow-x-hidden">
      {/* Container with max-width and proper centering */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 px-2"
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
            whileHover={{ scale: 1.01 }}
          >
            Elevate Your <span className="text-blue-600">Lift</span> Experience
          </motion.h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Precision-engineered lift solutions for seamless vertical transportation
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <div className="inline-flex rounded-md shadow-sm overflow-hidden border border-gray-200">
              <button
                onClick={() => setActiveTab("repair")}
                className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === "repair" 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Repair Services
              </button>
              <button
                onClick={() => setActiveTab("amc")}
                className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === "amc" 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                AMC Plans
              </button>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              className="flex flex-col"
            >
              {/* Service Card */}
              <div className={`relative rounded-xl shadow-md border border-gray-100 bg-white flex flex-col h-full transition-all duration-200 hover:shadow-lg`}>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  {/* Card Header */}
                  <div className="flex items-start">
                    <div className={`text-2xl p-2 rounded-lg ${service.color} bg-opacity-30`}>
                      {service.icon}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      <p className="mt-1 text-xs sm:text-sm font-medium text-gray-500">
                        {service.priceRange}
                      </p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-gray-600">
                    {service.description}
                  </p>
                  
                  {/* Coverage */}
                  <div className="mt-3 flex items-center text-xs text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.coverage}
                  </div>
                  
                  {/* Benefits */}
                  <div className="mt-3 flex-grow">
                    <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                      Benefits
                    </h4>
                    <ul className="mt-1 space-y-1">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2 text-xs sm:text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Button */}
                  <div className="mt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openModal(service)}
                      className="w-full px-3 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-200 flex items-center justify-center"
                    >
                      Get this plan
                      <svg className="ml-1 -mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal/Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`text-3xl p-3 rounded-lg ${selectedService?.color} bg-opacity-30 mr-4`}>
                    {selectedService?.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{selectedService?.title}</h2>
                    <p className="text-sm font-medium text-blue-600">{selectedService?.priceRange}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Description</h3>
                    <p className="mt-1 text-sm text-gray-600">{selectedService?.description}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Coverage</h3>
                    <p className="mt-1 text-sm text-gray-600">{selectedService?.coverage}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Benefits</h3>
                    <ul className="mt-2 space-y-2">
                      {selectedService?.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2 text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact Information</h3>
                  <form className="space-y-3">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                      <textarea
                        id="message"
                        rows={3}
                        className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="Any specific requirements..."
                      />
                    </div>
                  </form>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RepairAMC;