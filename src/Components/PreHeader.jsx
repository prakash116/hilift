import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function PreHeader() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const marqueeVariants = {
    animate: {
      x: ["100%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  const preHeader = {
  name: "Employee",
  route1: "About",
  route2: "Gallery",
  note: "✨ Special offer: Get 15% off on annual maintenance contracts this month! ✨ &nbsp;&nbsp;|&nbsp;&nbsp; 🚀 New elevator models now available with smart technology! 🚀 &nbsp;&nbsp;|&nbsp;&nbsp; ⏰ 24/7 emergency service available ⏰",
  contact: "8795901180, 8795901183", // Fixed typo (was "contect")
  email: "prakashmanig000@gmail.com"
};

  // Custom MotionNavLink component
  const MotionNavLink = ({ to, children, className, isActive }) => (
    <motion.div
      whileHover={{ scale: 1.05, color: "#2563eb" }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink
        to={to}
        className={className({ isActive })}
      >
        {children}
      </NavLink>
    </motion.div>
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gray-100 text-sm text-gray-700 py-1 px-4 overflow-hidden border-b hidden md:block"
    >
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Section - Navigation Links */}
        <motion.div
          variants={itemVariants}
          className="flex space-x-4 whitespace-nowrap"
        >
          <MotionNavLink
            to="/employee/login"
            className={({ isActive }) =>
              `hover:text-blue-600 transition-colors ${
                isActive ? "text-blue-600 font-medium" : ""
              }`
            }
          >
            {preHeader.name}
          </MotionNavLink>
          <MotionNavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-blue-600 transition-colors ${
                isActive ? "text-blue-600 font-medium" : ""
              }`
            }
          >
           {preHeader.route1}
          </MotionNavLink>
          <MotionNavLink
            to="/gallery"
            className={({ isActive }) =>
              `hover:text-blue-600 transition-colors ${
                isActive ? "text-blue-600 font-medium" : ""
              }`
            }
          >
           {preHeader.route2}
          </MotionNavLink>
        </motion.div>

        {/* Middle Section - Marquee Text */}
        <motion.div
          variants={itemVariants}
          className="flex-1 min-w-0 max-w-1/3 mx-4 overflow-hidden"
        >
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            className="whitespace-nowrap"
          >
            <p className="inline-block">
              {preHeader.note}
            </p>
          </motion.div>
        </motion.div>

        {/* Right Section - Contact Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row sm:space-x-4 whitespace-nowrap"
        >
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="transition-colors"
          >
            Any Query:{" "}
            <span className="font-semibold text-indigo-950 hover:text-blue-600 cursor-pointer">
              {preHeader.contact}
            </span>
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="transition-colors"
          >
            Email:{" "}
            <span className="font-semibold text-indigo-950 hover:text-blue-600 cursor-pointer">
              {preHeader.email}
            </span>
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PreHeader;