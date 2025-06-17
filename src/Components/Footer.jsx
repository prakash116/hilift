import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BsTwitterX,
  BsEnvelopeFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const socialLinks = [
    { icon: <FiFacebook size={20} />, name: "Facebook", url: "#" },
    { icon: <BsTwitterX size={18} />, name: "Twitter", url: "#" },
    { icon: <FiInstagram size={20} />, name: "Instagram", url: "#" },
    { icon: <FiLinkedin size={20} />, name: "LinkedIn", url: "#" },
    { icon: <FiYoutube size={20} />, name: "YouTube", url: "#" },
    { icon: <FaWhatsapp size={20} />, name: "WhatsApp", url: "#" },
  ];

  const quickLinks = [
    { name: "Home", url: "#" },
    { name: "About Us", url: "#" },
    { name: "Services", url: "#" },
    { name: "Projects", url: "#" },
    { name: "Blog", url: "#" },
    { name: "Contact", url: "#" },
  ];

  const services = [
    { name: "Lift Installation", url: "#" },
    { name: "Maintenance", url: "#" },
    { name: "Repairs", url: "#" },
    { name: "Modernization", url: "#" },
    { name: "Emergency Service", url: "#" },
    { name: "Consultation", url: "#" },
  ];

  return (
    <div ref={ref} className="bg-base-content text-gray-700">
      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-current w-full h-16"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      <motion.footer
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 pt-12 pb-6 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center">
                <img
                  src="/hilift/Images/Hi-Lift_logo.png"
                  alt="Hi-Lift Logo"
                  className="h-10 w-auto mr-3 drop-shadow-sm dark:drop-shadow-white transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="">
                Elevating your experience with premium lift solutions across
                India.
              </p>

              <div className="space-y-3 grid grid-cols-2 md:grid-cols-1">
                <div className="flex items-start space-x-3">
                  <BsTelephoneFill className="flex-shrink-0 mt-1 text-blue-500" />
                  <div>
                    <p className="text-gray-900">24/7 Support</p>
                    <p className="font-medium">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BsEnvelopeFill className="flex-shrink-0 mt-1 text-blue-400" />
                  <div>
                    <p className="text-gray-900">Email Us</p>
                    <p className="font-medium">info@hi-lift.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="flex-shrink-0 mt-1 text-blue-400" />
                  <div>
                    <p className="text-gray-900">Headquarters</p>
                    <p className="font-medium">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-lg font-bold text-black uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-3 grid grid-cols-2 md:grid-cols-1">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.url}
                      className="text-gray-900 hover:text-blue-400 transition-colors duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-lg font-bold text-black uppercase tracking-wider">
                Our Services
              </h3>
              <ul className="space-y-3 grid grid-cols-2 md:grid-cols-1">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={service.url}
                      className="text-gray-900 hover:text-purple-400 transition-colors duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {service.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-lg font-bold text-black uppercase tracking-wider">
                Newsletter
              </h3>
              <p className="text-gray-900">
                Subscribe to get updates on our latest offers and services.
              </p>

             

              <div className="pt-4">
                <h4 className="text-lg font-bold text-black uppercase tracking-wider mb-3">
                  Follow Us
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      aria-label={social.name}
                      className="bg-gray-300 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gray-800 my-6"
          ></motion.div>

          {/* Bottom Footer */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-between items-center pt-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-sm mb-4 md:mb-0"
            >
              © {new Date().getFullYear()} Hi-Lift. All rights reserved.
            </motion.p>

            <motion.div variants={itemVariants} className="flex space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Sitemap
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}

export default Footer;
