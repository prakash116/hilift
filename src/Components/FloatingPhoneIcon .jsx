import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';

const FloatingPhoneIcon = () => {
  const phoneNumber = '8795901180';
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRinging, setIsRinging] = useState(false);

  const supportOptions = [
    { label: 'Sales', number: '8795901180' },
    { label: 'Support', number: '8795901183' },
    { label: 'Emergency', number: '9876543210' }
  ];

  const ringAnimation = {
    scale: [1, 1.1, 1],
    rotate: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'mirror'
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {/* Expanded panel - now appears to the left of the button */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-16 bottom-0 bg-white rounded-xl shadow-xl overflow-hidden w-64"
          >
            <div className="bg-green-600 p-3 text-white flex justify-between items-center">
              <h3 className="font-semibold">Contact Support</h3>
              <button 
                onClick={() => setIsExpanded(false)}
                className="p-1 rounded-full hover:bg-green-700 transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="p-4">
              {supportOptions.map((option, index) => (
                <motion.a
                  key={index}
                  href={`tel:${option.number}`}
                  whileHover={{ x: -5 }}
                  className="flex items-center py-2 px-3 mb-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-green-600 mr-3 text-lg"><RiCustomerService2Fill /></span>
                  <div className="flex-1">
                    <p className="font-medium text-black">{option.label}</p>
                    <p className="text-sm text-gray-600">{option.number}</p>
                  </div>
                </motion.a>
              ))}
              
              <div className="mt-4 pt-3 border-t border-gray-200 text-center text-sm text-gray-500">
                <p>24/7 Support Available</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isRinging ? ringAnimation : { opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="relative"
        onHoverStart={() => setIsRinging(true)}
        onHoverEnd={() => setIsRinging(false)}
      >
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white ${
            isRinging ? 'bg-red-500' : 'bg-gradient-to-br from-green-500 to-green-600'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaPhoneAlt className="text-xl" />
          
          {isRinging && (
            <motion.span
              className="absolute inset-0 border-2 border-red-500 rounded-full"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          )}
        </motion.button>

        {/* Pulsing notification dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border border-white"
        />
      </motion.div>
    </div>
  );
};

export default FloatingPhoneIcon;