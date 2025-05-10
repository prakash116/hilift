import React, { useState } from 'react';
import { motion } from 'framer-motion';

function LiftEnquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    liftType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      liftType: ''
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: { scale: 1.03 }
  };

  const liftTypes = [
    "Passenger Elevator",
    "Freight Elevator",
    "Home Elevator",
    "Hospital Elevator",
    "MRL Elevator",
    "Goods Lift",
    "Dumbwaiter"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Enquiry Form */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Lift Enquiry Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Client Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Client Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="liftType" className="block text-sm font-medium text-gray-700 mb-1">
                  Lift Type
                </label>
                <select
                  id="liftType"
                  name="liftType"
                  value={formData.liftType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="">Select Lift Type</option>
                  {liftTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </motion.div>

              <motion.button
                type="submit"
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Submit Enquiry
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Box */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden p-6"
          >
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            
            <div className="space-y-6">
              <motion.div 
                variants={itemVariants}
                whileHover="hover"
                className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg transition-all"
              >
                <div className="bg-blue-500 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover="hover"
                className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg transition-all"
              >
                <div className="bg-green-500 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">WhatsApp</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover="hover"
                className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg transition-all"
              >
                <div className="bg-pink-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Instagram</h3>
                  <p className="text-gray-300">@liftsolutions</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover="hover"
                className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg transition-all"
              >
                <div className="bg-black p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Twitter/X</h3>
                  <p className="text-gray-300">@liftsolutions</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default LiftEnquiry;