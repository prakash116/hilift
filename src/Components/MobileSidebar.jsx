import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FiHome, 
  FiSettings, 
  FiTool, 
  FiMail, 
  FiInfo, 
  FiUser, 
  FiLogIn,
  FiX
} from "react-icons/fi";

const Sidebar = ({ isOpen, onClose }) => {
  // Navigation items with icons
  const navItems = [
    { path: "/home", name: "Home", icon: <FiHome /> },
    { path: "/lift", name: "Lift", icon: <FiSettings /> },
    { path: "/accessories", name: "Accessories", icon: <FiTool /> },
    { path: "/repair", name: "Repair & AMC", icon: <FiTool /> },
    { path: "/contact", name: "Contact Us", icon: <FiMail /> },
    { path: "/about", name: "About Us", icon: <FiInfo /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-xl"
          >
            <div className="flex flex-col h-full p-4">
              <div className="flex justify-between items-center p-2 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                <button 
                  onClick={onClose} 
                  className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              <nav className="flex-1 overflow-y-auto mt-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.path}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-4 border-t border-gray-200">
                  <Link
                    to="/employee/login"
                    onClick={onClose}
                    className="flex items-center space-x-3 px-4 py-3 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition-all"
                  >
                    <FiUser />
                    <span>Employee Login</span>
                    <FiLogIn className="ml-auto" />
                  </Link>
                </div>
              </nav>
              
              <div className="mt-auto p-4 border-t border-gray-200 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Elevator Solutions
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;