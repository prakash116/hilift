import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      bio: "20+ years in elevator industry with expertise in modernization and safety standards.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Technical Director",
      bio: "Specialized in high-speed elevator systems and IoT integration for smart buildings.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Head of Maintenance",
      bio: "Developed our predictive maintenance protocols that reduce downtime by 40%.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Customer Success",
      bio: "Leads our 24/7 support team ensuring 98% customer satisfaction ratings.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const values = [
    {
      title: "Safety First",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      description:
        "We never compromise on safety standards in all our operations.",
    },
    {
      title: "Reliability",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      description: "Count on us for timely service and dependable solutions.",
    },
    {
      title: "Innovation",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      description: "Continuously improving our technology and methods.",
    },
    {
      title: "Customer Focus",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      description: "Your satisfaction drives everything we do.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            Elevating Standards Since 2012
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
            India's most trusted lift maintenance and repair service with
            pan-India coverage
          </p>
        </motion.div>

        {/* About Section - Fixed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white p-6 sm:p-8 rounded-xl shadow-lg z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2012 by industry veteran Rajesh Kumar, LiftCare began
                with a simple mission: to revolutionize elevator maintenance in
                India through superior service and innovative technology.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of five technicians has grown into
                a nationwide network of over 500 certified professionals serving
                residential, commercial, and institutional clients across 25+
                cities.
              </p>
              <p className="text-gray-600">
                Today, we maintain more than 10,000 lifts across India with our
                proprietary predictive maintenance system that reduces downtime
                by 40% compared to traditional methods.
              </p>
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-blue-400 rounded-xl -z-10 hidden sm:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-6 sm:p-8 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
                Why Choose Us?
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-blue-200 mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">
                    24/7 emergency response with 2-hour guarantee in metro
                    cities
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-blue-200 mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">
                    Only OEM-approved spare parts used in all repairs
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-blue-200 mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">
                    Advanced IoT monitoring available for proactive maintenance
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-blue-200 mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">
                    98% customer satisfaction rating for 5 consecutive years
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-5 sm:p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-blue-600 mb-3 sm:mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative pb-[120%] overflow-hidden">
                  <motion.img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={member.image}
                    alt={member.name}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm sm:text-base mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
