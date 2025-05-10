import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import StatsSection from "../StatesSections";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Data
  const features = [
    {
      icon: "⏱️",
      title: "24/7 Emergency Service",
      desc: "2-hour response time in metro cities",
    },
    {
      icon: "🛠️",
      title: "OEM-Certified Technicians",
      desc: "Skilled professionals with 10+ years experience",
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

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Apartment Owner",
      quote:
        "Hi-Lift's AMC saved us 30% on maintenance costs while improving reliability.",
    },
    {
      name: "Priya Mehta",
      role: "Hospital Admin",
      quote:
        "Their 24/7 emergency service is a lifesaver for our critical care elevators.",
    },
    {
      name: "Vikram Patel",
      role: "Mall Manager",
      quote:
        "The IoT monitoring system predicts issues before they occur - revolutionary!",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Lifts Serviced" },
    { value: "25+", label: "Cities Covered" },
    { value: "500+", label: "Technicians" },
    { value: "98%", label: "Satisfaction Rate" },
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
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/Images/elevator-pattern.svg')] bg-repeat opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 py-24 md:py-10 flex flex-col md:flex-row items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Elevate Your Building's{" "}
              <span className="text-yellow-300">Performance</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl mb-8 opacity-90">
              India's most trusted elevator solutions with IoT-enabled smart
              maintenance
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
                Get Free Consultation
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-medium px-8 py-3 rounded-lg transition-all">
                Explore Services <FiArrowRight className="inline ml-2" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:w-1/2 relative"
          >
            <img
              src="/hilift/Images/1342.jpg"
              alt="Modern Elevator"
              className="w-full max-w-lg mx-auto rounded-lg shadow-2xl border-8 border-white transform"
            />
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                },
              }}
              className="absolute -bottom-6 -right-6 bg-white text-blue-900 p-4 rounded-lg shadow-lg border-l-4 border-yellow-400 hidden md:block"
            >
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Emergency Support</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated floating elements */}
        <motion.div
          animate={{
            x: [0, 10, 0],
            transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          }}
          className="absolute top-1/4 left-10 opacity-30 hidden lg:block"
        >
          <div className="w-16 h-16 rounded-full bg-yellow-400 blur-xl"></div>
        </motion.div>
      </section>

      {/* --- Trust Badges --- */}
      {/* <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-8 bg-white shadow-sm"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {["otis", "schindler", "kone", "mitsubishi", "hyundai"].map(
              (brand) => (
                <motion.img
                  key={brand}
                  whileHover={{ scale: 1.1 }}
                  src={`/Images/brands/${brand}.svg`}
                  alt={`${brand} partner`}
                  className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all"
                />
              )
            )}
          </div>
        </div>
      </motion.section> */}

      {/* --- Features --- */}
      <section className="py-20 bg-gray-50">
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
                <NavLink to="/repair">
                <button className="w-full bg-yellow-300 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all">
                  View Plans
                </button>
                </NavLink>
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
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-bold text-sm">
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
                <NavLink to="/repair">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all">
                  View Plans
                </button>
                </NavLink>
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
                <NavLink to="/repair">
                <button className="w-full bg-yellow-300 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all">
                  View Plans
                </button>
                </NavLink>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Stats --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: i * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-20 bg-gray-50">
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
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              What Our <span className="text-blue-600">Clients Say</span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Trusted by 500+ buildings across India
            </motion.p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: `-${activeTestimonial * 100}%` }}
                transition={{ type: "spring", damping: 20 }}
                className="flex"
              >
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
                      <div className="text-5xl text-gray-200 mb-6">"</div>
                      <p className="text-xl md:text-2xl text-gray-700 mb-8">
                        {testimonial.quote}
                      </p>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-blue-600">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === activeTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Elevate Your Property?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Get a free consultation with our elevator experts today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
                <FiPhone className="inline mr-2" /> Call Now: 1800-123-4567
              </button>
              <button className="border-2 border-white hover:bg-blue-700 font-medium px-8 py-4 rounded-lg transition-all">
                <FiMail className="inline mr-2" /> Email Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Contact Form --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get in <span className="text-blue-600">Touch</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Have questions about our services? Our team is ready to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">1800-123-4567 (Toll Free)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@hi-lift.com</p>
                    <p className="text-gray-600">support@hi-lift.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Head Office</h3>
                    <p className="text-gray-600">
                      Hi-Lift Towers, 123 Tech Park
                    </p>
                    <p className="text-gray-600">
                      Mumbai, Maharashtra - 400001
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-bold text-gray-900 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: <FaFacebook size={20} />, name: "Facebook" },
                      { icon: <FaInstagram size={20} />, name: "Instagram" },
                      { icon: <FaLinkedin size={20} />, name: "LinkedIn" },
                      { icon: <FaWhatsapp size={20} />, name: "WhatsApp" },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        aria-label={social.name}
                        className="bg-gray-100 hover:bg-blue-100 text-blue-600 p-3 rounded-full transition-colors"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg transition-all"
                >
                  Submit Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="pb-10 px-3">
      <StatsSection/>
      </div>
    </div>
  );
};

export default LandingPage;
