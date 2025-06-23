import React from 'react';
import { motion } from 'framer-motion';

function TechnicalSupport() {
  const supportItems = [
    {
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years experience",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      animation: {
        rotate: [0, 5, -5, 0],
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4,
          ease: "easeInOut"
        }
      }
    },
    {
      title: "Professional Service",
      description: "Guaranteed satisfaction with every job",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "text-green-600",
      bgColor: "bg-green-50",
      animation: {
        y: [0, -5, 0],
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut"
        }
      }
    },
    {
      title: "Highly Recommended",
      description: "90% of clients refer us to others",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      animation: {
        scale: [1, 1.05, 1],
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3.5,
          ease: "easeInOut"
        }
      }
    },
    {
      title: "Positive Reviews",
      description: "4.9/5 average customer rating",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      animation: {
        rotate: [0, 3, -3, 0],
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 5,
          ease: "easeInOut"
        }
      }
    },
    {
      title: "Fast Response",
      description: "24/7 emergency service available",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "text-red-600",
      bgColor: "bg-red-50",
      animation: {
        x: [0, 3, -3, 0],
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4,
          ease: "easeInOut"
        }
      }
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-400 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-blue-300 filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-blue-600">Technical Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Why thousands of clients trust our technical support team
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`${item.bgColor} p-4 sm:p-6 rounded-xl shadow-lg flex flex-col items-center text-center border border-transparent hover:border-gray-200 transition-all`}
            >
              <motion.div
                animate={item.animation}
                className={`${item.color} mb-3 sm:mb-5 p-2 sm:p-3 rounded-full bg-white shadow-sm`}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Creative floating elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-200 opacity-20 filter blur-xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="absolute -top-10 right-0 w-32 h-32 rounded-full bg-yellow-200 opacity-20 filter blur-xl"
        />
      </div>
    </div>
  );
}

export default TechnicalSupport;