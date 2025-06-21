import { motion } from "framer-motion";
import { useState } from "react";
import { FiX, FiCheckCircle, FiUser, FiPhone, FiMail, FiHome } from "react-icons/fi";

const FreeConsultation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 500
      }
    },
    exit: { opacity: 0, y: -50 }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-xl flex items-center"
      >
        <FiPhone className="mr-2" />
        Free Consultation
        <motion.span 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="ml-2 w-3 h-3 bg-green-400 rounded-full"
        />
      </motion.button>

      {/* Modal */}
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-md w-full overflow-hidden shadow-2xl relative"
          >
            {!isSubmitted ? (
              <>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <FiX size={24} />
                </button>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
                  <h3 className="text-2xl font-bold">Free Elevator Consultation</h3>
                  <p className="opacity-90">Get expert advice for your project</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <FiUser />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        required
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <FiPhone />
                      </div>
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        required
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <FiMail />
                      </div>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <FiHome />
                      </div>
                      <select 
                        required
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                      >
                        <option value="">Select Project Type</option>
                        <option>Residential Building</option>
                        <option>Commercial Complex</option>
                        <option>Hospital</option>
                        <option>Hotel</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                    >
                      Request Consultation
                    </motion.button>
                  </div>
                </form>
              </>
            ) : (
              <div className="p-8 text-center">
                <FiCheckCircle className="mx-auto text-green-500 text-5xl mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">Our expert will contact you within 24 hours.</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
                >
                  Close
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default FreeConsultation;