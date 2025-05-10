import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Sidebar from "./MobileSidebar";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/home" },
    { name: "Lift", to: "/lift" },
    { name: "Accessories", to: "/accessories" },
    { name: "Repair & AMC", to: "/repair" },
    { name: "Contact Us", to: "/contact" },
    { name: "About Us", to: "/about" },
  ];

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

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
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
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      rotate: [-2, 2, -2],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="p-1 text-base-300 bg-base-content shadow-sm relative"
    >
      <div className="md:px-4 flex justify-between mx-auto">
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <NavLink
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <motion.img
              src="/hilift/Images/Hi-Lift_logo.png"
              alt="Hi-Lift Logo"
              className="h-6 w-auto md:h-10 drop-shadow-sm dark:drop-shadow-accent"
              whileHover={{ scale: 1.1 }}
            />
          </NavLink>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="items-stretch hidden space-x-3 gap-1 md:flex"
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex"
            >
              <NavLink
                rel="noopener noreferrer"
                to={item.to}
                className="flex items-center px-4"
              >
                {item.name}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
  onClick={() => setSidebarOpen(!sidebarOpen)}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="flex justify-end p-4 md:hidden"
  aria-label={sidebarOpen ? "Close menu" : "Open menu"}
>
  {sidebarOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )}
</motion.button>
      </div>

      {/* Use the standalone Sidebar component */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
      />
    </motion.header>
  );
}

export default Header;