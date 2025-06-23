import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiX, FiUser, FiPhone, FiMail, FiChevronDown } from 'react-icons/fi';
import { FaBuilding, FaHardHat, FaHome } from 'react-icons/fa';
import { GiElevator } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const popupVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const projectTypeOptions = [
  { value: 'residential', label: 'Residential Building', icon: <FaHome /> },
  { value: 'commercial', label: 'Commercial Complex', icon: <FaBuilding /> },
  { value: 'industrial', label: 'Industrial Facility', icon: <FaHardHat /> },
  { value: 'other', label: 'Other Project', icon: <GiElevator /> }
];

function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [showProjectTypes, setShowProjectTypes] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setFormData(prev => ({ ...prev, projectType: project.value }));
    setShowProjectTypes(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    setShowPopup(false);
    setActiveStep(1);
    setSelectedProject(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  const nextStep = () => setActiveStep(prev => prev + 1);
  const prevStep = () => setActiveStep(prev => prev - 1);
  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate('/explore-services')
  };

  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/Images/elevator-pattern.svg')] bg-repeat opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 py-24 md:py-10 flex flex-col md:flex-row items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Elevate Your Building's{" "}
              <span className="text-yellow-300">Performance</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl mb-8 opacity-90">
              India's most trusted elevator solutions with IoT-enabled smart
              maintenance
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                onClick={() => setShowPopup(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-300 z-10 text-blue-900 font-bold px-8 py-3 rounded-lg shadow-lg transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
              
              <motion.button 
                onClick={handleButtonClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white z-10 hover:bg-white hover:text-blue-900 font-medium px-8 py-3 rounded-lg transition-all"
              >
                Explore Services <FiArrowRight className="inline ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:w-1/2 relative"
          >
            <img
              src="/hilift/Images/1342.jpg"
              alt="Modern Elevator"
              className="w-full max-w-lg mx-auto rounded-lg shadow-2xl border-8 border-white transform"
            />
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                },
              }}
              className="absolute -bottom-6 -right-6 bg-white text-blue-900 p-4 rounded-lg shadow-lg border-l-4 border-yellow-400 hidden md:block"
            >
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Emergency Support</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated floating elements */}
        <motion.div
          animate={{
            x: [0, 10, 0],
            transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          }}
          className="absolute top-1/4 left-10 opacity-30 hidden lg:block"
        >
          <div className="w-16 h-16 rounded-full bg-yellow-400 blur-xl"></div>
        </motion.div>
      </section>

      {/* Enhanced Responsive Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-start justify-center p-4 z-50 backdrop-blur-sm overflow-y-auto">
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md md:max-w-lg lg:max-w-xl relative border-4 border-blue-500 my-8"
            >
              {/* Floating decorative elements */}
              <motion.div 
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                  transition: { repeat: Infinity, duration: 8, ease: "easeInOut" }
                }}
                className="absolute -top-8 -left-8 w-24 h-24 bg-yellow-400 rounded-full opacity-20"
              />
              <motion.div 
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                  transition: { repeat: Infinity, duration: 10, ease: "easeInOut", delay: 0.5 }
                }}
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400 rounded-full opacity-20"
              />

              {/* Main popup content */}
              <div className="relative z-10">
                {/* Header with animated gradient */}
                <div className="relative h-4 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600 bg-[length:200%_auto] animate-gradient-flow">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Close button - positioned for better visibility */}
                  <button 
                    onClick={() => setShowPopup(false)}
                    className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 transition-colors z-20"
                  >
                    <FiX className="text-gray-500 text-xl" />
                  </button>

                  {/* Step indicator */}
                  <div className="flex justify-center mb-8">
                    {[1, 2].map((step) => (
                      <div key={step} className="flex items-center">
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${activeStep === step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                        >
                          {step}
                        </div>
                        {step < 2 && (
                          <div className="w-12 h-1 bg-gray-200 mx-2"></div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Form content */}
                  {activeStep === 1 ? (
                    <motion.div
                      variants={popupVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <motion.div variants={itemVariants}>
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
                          Let's Elevate Your Project
                        </h2>
                        <p className="text-center text-gray-600 mb-6">
                          Complete this quick form to schedule your free consultation
                        </p>
                      </motion.div>

                      <motion.div variants={itemVariants} className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FiUser className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800 placeholder-gray-400"
                          required
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FiMail className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800 placeholder-gray-400"
                          required
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FiPhone className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone Number"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800 placeholder-gray-400"
                          required
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="relative">
                        <button
                          type="button"
                          onClick={() => setShowProjectTypes(!showProjectTypes)}
                          className="w-full flex items-center justify-between pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-left text-gray-800"
                        >
                          <div className="flex items-center">
                            <FaBuilding className="text-gray-400 absolute left-3" />
                            <span>{selectedProject ? selectedProject.label : 'Select Project Type'}</span>
                          </div>
                          <FiChevronDown className={`transition-transform ${showProjectTypes ? 'rotate-180' : ''}`} />
                        </button>

                        {showProjectTypes && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 border border-gray-200 rounded-lg overflow-hidden shadow-lg"
                          >
                            {projectTypeOptions.map((project) => (
                              <div
                                key={project.value}
                                onClick={() => handleProjectSelect(project)}
                                className="p-3 hover:bg-blue-50 cursor-pointer flex items-center gap-3 transition-colors text-gray-800"
                              >
                                <span className="text-blue-600">{project.icon}</span>
                                <span>{project.label}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <button
                          onClick={nextStep}
                          disabled={!formData.name || !formData.email || !formData.phone}
                          className={`w-full py-3 px-6 rounded-xl font-bold text-white transition-all ${!formData.name || !formData.email || !formData.phone ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'}`}
                        >
                          Continue
                        </button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      variants={popupVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <motion.div variants={itemVariants}>
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                          Almost There!
                        </h2>
                        <p className="text-center text-gray-600 mb-6">
                          Tell us more about your project needs
                        </p>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Describe your project, building type, number of floors, and any special requirements..."
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800 placeholder-gray-400"
                        ></textarea>
                      </motion.div>

                      <motion.div variants={itemVariants} className="flex gap-4">
                        <button
                          onClick={prevStep}
                          className="flex-1 py-3 px-6 rounded-xl font-bold text-blue-600 border border-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="flex-1 py-3 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl transition-all"
                        >
                          Schedule Consultation
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* Animated elevator in footer */}
                <div className="relative h-16 overflow-hidden bg-gray-50">
                  <motion.div
                    animate={{
                      y: [0, -30, 0],
                      transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                    }}
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-4"
                  >
                    <GiElevator className="text-blue-600 text-3xl" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HeroSection;