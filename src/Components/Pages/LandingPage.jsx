import { motion } from "framer-motion";
import { FiArrowRight, FiCheck, FiPhone, FiMail } from "react-icons/fi";
import Testimonials from "../Testimonials";
import StatsSection from "../StatesSections";
import CTA from "../CTA";
import HeroSection from "../HeroSection";
const LandingPage = () => {
  // Data
  const features = [
    {
      icon: "⏱️",
      title: "24/7 Emergency Service",
      desc: "2-hour response time in metro cities",
    },
    {
      icon: "🏗️",
      title: "Material Quality",
      desc: "Premium-grade materials built to last for decades",
    },
    {
      icon: "📈",
      title: "Predictive Maintenance",
      desc: "AI-driven monitoring reduces downtime by 40%",
    },
    {
      icon: "🏆",
      title: "5-Star Rated",
      desc: "98% customer satisfaction since 2010",
    },
  ];

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-gray-50">
      {/* --- Hero Section --- */}
      <HeroSection/>

      {/* --- Features --- */}
      <section className="py-10 px-10 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Why Choose <span className="text-blue-600">Hi-Lift?</span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Comprehensive elevator solutions tailored for Indian
              infrastructure
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Services --- */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our <span className="text-yellow-300">Services</span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl opacity-90 max-w-2xl mx-auto"
            >
              End-to-end elevator solutions from installation to emergency
              repair
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white bg-opacity-10 text-blue-900 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:border-opacity-40 transition-all"
            >
              <div className="flex items-center text-blue-900 mb-6">
                <div className="bg-yellow-400 p-3 rounded-lg mr-4">
                  <FiCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold">Installation</h3>
              </div>
              <p className="mb-6 opacity-90">
                Professional installation of all elevator types with 5-year
                warranty
              </p>
              <ul className="space-y-3">
                {[
                  "Passenger Elevators",
                  "Freight Elevators",
                  "Home Lifts",
                  "Hospital Lifts",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <FiCheck className="mr-2 text-yellow-300" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 2 - Highlighted */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative bg-white text-blue-900 rounded-xl shadow-2xl transform scale-105 z-10"
            >
              <div className="absolute bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-bold text-sm left-1/2 -translate-x-1/2 -top-4 sm:left-auto sm:right-[-14px] sm:translate-x-0">
                Most Popular
              </div>

              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                    <FiCheck size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">AMC Plans</h3>
                </div>
                <p className="mb-6">
                  Comprehensive maintenance contracts with IoT monitoring
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Platinum (24 visits/year)",
                    "Gold (12 visits/year)",
                    "Silver (6 visits/year)",
                    "Bronze (4 visits/year)",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <FiCheck className="mr-2 text-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white bg-opacity-10 text-blue-900 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:border-opacity-40 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-yellow-400 text-blue-900 p-3 rounded-lg mr-4">
                  <FiCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold">Repairs</h3>
              </div>
              <p className="mb-6 opacity-90">
                24/7 emergency repair services with guaranteed response times
              </p>
              <ul className="space-y-3">
                {[
                  "Door Mechanism",
                  "Control System",
                  "Hydraulic",
                  "Traction",
                  "Emergency Rescue",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <FiCheck className="mr-2 text-yellow-300" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />
      <StatsSection />

      {/* --- CTA --- */}
      <CTA />
    </div>
  );
};

export default LandingPage;
