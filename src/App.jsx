import { Toaster } from "react-hot-toast";
import "./App.css";
import React from "react";
import Header from "./Components/Header";
import PreHeader from "./Components/PreHeader";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import { useState, useEffect } from "react";
import Elevator from "./Components/Pages/Elevator";
import LiftEnquiry from "./Components/LiftEnquiry";
import TechnicalSupport from "./Components/TechnicalSupport";
import Accessories from "./Components/Pages/Accessories";
import RepairAMC from "./Components/Pages/RepairAMC";
import OurNetwork from "./Components/OurNetwork";
import ContactUs from "./Components/Pages/Contact";
import AboutUs from "./Components/Pages/AboutUs";
import LandingPage from "./Components/Pages/LandingPage";
import ElevatorGallery from "./Components/Pages/Gallery";
import { Routes, Route, useLocation, HashRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import EmployeeLogin from "./Components/Employee/EmployeeLogin";
import EmployeeDashboard from "./Components/Employee/EmployeeDashboard";
import FloatingPhoneIcon from "./Components/FloatingPhoneIcon ";

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
        <motion.div
          key="loading-animation"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-white text-4xl font-bold"
        >
          <div className="flex items-center space-x-4">
            <motion.div
              key="loading-dot"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-10 h-10 bg-white rounded-full"
            />
            <span>Elevate Your Experience</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HashRouter>
        <ScrollToTop />
        <AnimatePresence>
          {/* Fixed Header Container */}
          <div className="fixed top-0 left-0 right-0 z-50">
            {/* PreHeader - only shown on larger screens */}
            <motion.div
              key="pre-header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block bg-white shadow-md"
            >
              <PreHeader />
            </motion.div>
            
            {/* Header - shown on all devices */}
            <div className="bg-white shadow-md">
              <Header />
            </div>
          </div>
          
          {/* Main content with padding to account for fixed header */}
          <motion.main
            key="main-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-grow pt-15 md:pt-20" // Adjusted padding for mobile and desktop
          >
            <Routes>
              <Route path="/" element={
                <motion.div
                  key="landing-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <LandingPage />
                </motion.div>
              } />
              <Route path="/home" element={
                <motion.div
                  key="home-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              } />
              <Route path="/lift" element={
                <motion.div
                  key="lift-page"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Elevator />
                </motion.div>
              } />
              <Route path="/accessories" element={
                <motion.div
                  key="accessories-page"
                  initial={{ scale: 0.98 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Accessories />
                </motion.div>
              } />
              <Route path="/repair" element={
                <motion.div
                  key="repair-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <RepairAMC />
                </motion.div>
              } />
              <Route path="/contact" element={
                <motion.div
                  key="contact-page"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <ContactUs />
                </motion.div>
              } />
              <Route path="/about" element={
                <motion.div
                  key="about-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <AboutUs />
                </motion.div>
              } />
              <Route path="/liftenquiry" element={
                <motion.div
                  key="enquiry-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <LiftEnquiry />
                </motion.div>
              } />
              <Route path="/network" element={
                <motion.div
                  key="network-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <OurNetwork />
                </motion.div>
              } />
              <Route path="/gallery" element={
                <motion.div
                  key="gallery-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <ElevatorGallery />
                </motion.div>
              } />
              <Route path="/employee/login" element={
                <motion.div
                  key="employee-login"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <EmployeeLogin/>
                </motion.div>
              } />
              <Route path="/employee/dashboard" element={
                <motion.div
                  key="employee-dashboard"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <EmployeeDashboard/>
                </motion.div>
              } />
            </Routes>
          </motion.main>

          {/* Technical Support with floating animation */}
          <motion.div
            key="tech-support"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <TechnicalSupport />
          </motion.div>

          {/* Footer with subtle entrance */}
          <motion.footer
            key="app-footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FloatingPhoneIcon/>
            <Footer />
          </motion.footer>
        </AnimatePresence>
      </HashRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
            color: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          },
          duration: 4000,
        }}
      />
    </div>
  );
}

export default App;