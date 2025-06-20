import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { 
  FiHome,
  FiLayers,
  FiPackage,
  FiTool,
  FiMail,
  FiInfo,
  FiAward,
  FiShield
} from "react-icons/fi";
import { FiX, FiMenu, FiChevronRight } from "react-icons/fi";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: "Home", to: "/home", icon: <FiHome className="text-blue-300" /> },
    { name: "Lift", to: "/lift", icon: <FiLayers className="text-blue-300" /> },
    { name: "Accessories", to: "/accessories", icon: <FiPackage className="text-blue-300" /> },
    { name: "Repair & AMC", to: "/repair", icon: <FiTool className="text-blue-300" /> },
    { name: "Contact Us", to: "/contact", icon: <FiMail className="text-blue-300" /> },
    { name: "About Us", to: "/about", icon: <FiInfo className="text-blue-300" /> },
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

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const Sidebar = () => {
    return (
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-72 bg-gradient-to-b from-blue-900 to-blue-800 z-50 shadow-2xl"
          >
            <div className="flex flex-col h-full p-4">
              {/* Header with close button */}
              <div className="flex justify-between items-center p-4 border-b border-blue-700">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    to="/"
                    aria-label="Back to homepage"
                    className="flex items-center"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <img
                      src="/hilift/Images/Hi-Lift_logo.png"
                      alt="Logo"
                      className="h-8 w-auto drop-shadow-lg"
                    />
                  </NavLink>
                </motion.div>
                <motion.button 
                  onClick={() => setSidebarOpen(false)} 
                  className="p-2 text-blue-200 hover:text-white rounded-full hover:bg-blue-700"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </motion.button>
              </div>
              
              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto mt-6">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.to}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      onHoverStart={() => setHoveredItem(item.to)}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setSidebarOpen(false)}
                        className="flex items-center justify-between px-4 py-3 text-blue-100 hover:text-white hover:bg-blue-700 rounded-lg transition-all group relative"
                      >
                        <div className="flex items-center space-x-3">
                          <motion.span 
                            className="text-lg group-hover:scale-110 transition-transform"
                            whileHover={{ rotate: 10 }}
                          >
                            {item.icon}
                          </motion.span>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <motion.div
                          animate={{
                            opacity: hoveredItem === item.to ? 1 : 0.7,
                            x: hoveredItem === item.to ? 0 : -5
                          }}
                          transition={{ type: 'spring', stiffness: 500 }}
                          className="text-blue-300"
                        >
                          <FiChevronRight />
                        </motion.div>
                        {hoveredItem === item.to && (
                          <motion.div 
                            className="absolute inset-0 border-2 border-blue-400 rounded-lg pointer-events-none"
                            layoutId="sidebarHover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              {/* Footer */}
              <motion.div 
                className="mt-auto p-4 border-t border-blue-700 text-center text-sm text-blue-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div 
                  className="flex justify-center mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiAward className="text-yellow-400 mr-2" />
                  <FiShield className="text-green-400" />
                </motion.div>
                <p>Elevating your experience since 2023</p>
                <motion.p 
                  className="mt-1"
                  whileHover={{ scale: 1.02 }}
                >
                  © {new Date().getFullYear()} All Rights Reserved
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="p-1 text-base-300 bg-base-content shadow-sm sticky top-0 z-30"
      >
        <div className="md:px-4 flex justify-between items-center mx-auto max-w-7xl">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="flex items-center"
          >
            <NavLink
              to="/"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <motion.img
                src="/hilift/Images/Hi-Lift_logo.png"
                alt="Logo"
                className="h-6 w-auto md:h-10 drop-shadow-sm dark:drop-shadow-accent"
                whileHover={{ scale: 1.1 }}
              />
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
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
                className="flex relative"
                onHoverStart={() => setHoveredItem(item.to)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <NavLink
                  rel="noopener noreferrer"
                  to={item.to}
                  className={({ isActive }) => 
                    `flex items-center px-4 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'hover:bg-blue-100 hover:text-blue-800'
                    }`
                  }
                >
                  <motion.span 
                    className="mr-2"
                    whileHover={{ rotate: 10 }}
                  >
                    {item.icon}
                  </motion.span>
                  {item.name}
                  {hoveredItem === item.to && (
                    <motion.span 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                      layoutId="navHover"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile menu button */}
          <motion.button
            onClick={handleMenuClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex justify-end p-4 md:hidden"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </motion.header>
      
      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black backdrop-blur-sm z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Sidebar */}
      <Sidebar />
    </>
  );
}

export default Header;