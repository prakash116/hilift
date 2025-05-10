import React, { useState } from "react";
import { motion } from "framer-motion";
import StatsSection from "../StatesSections";

const liftServices = [
  {
    id: 1,
    title: "Basic Lift Repair",
    description:
      "Troubleshooting and fixing minor lift issues including door problems, button malfunctions, and minor electrical faults.",
    coverage: "Single-time service",
    benefits: ["24/7 support", "Genuine parts", "Expert technicians"],
    priceRange: "₹5,000 - ₹15,000",
  },
  {
    id: 2,
    title: "Comprehensive Lift Repair",
    description:
      "Complete overhaul and repair of major lift components including motor, control system, and mechanical parts.",
    coverage: "Single-time service with 30-day warranty",
    benefits: [
      "Detailed inspection report",
      "Safety certification",
      "Priority service",
    ],
    priceRange: "₹20,000 - ₹50,000",
  },
  {
    id: 3,
    title: "Emergency Lift Repair",
    description:
      "Immediate response for stuck lifts or critical failures with guaranteed 2-hour response time in metro cities.",
    coverage: "24/7 emergency service",
    benefits: [
      "Fastest response",
      "Trained rescue team",
      "Temporary fixes included",
    ],
    priceRange: "₹15,000 - ₹35,000",
  },
  {
    id: 4,
    title: "Silver AMC Plan",
    description:
      "Annual Maintenance Contract with quarterly inspections and basic repairs included.",
    coverage: "All India coverage",
    benefits: [
      "4 inspections/year",
      "Basic repairs included",
      "Discount on parts",
    ],
    priceRange: "₹25,000 - ₹40,000/year",
  },
  {
    id: 5,
    title: "Gold AMC Plan",
    description:
      "Premium maintenance contract with monthly inspections and comprehensive coverage.",
    coverage: "Pan-India with 24-hour response",
    benefits: [
      "12 inspections/year",
      "All repairs included",
      "Emergency support",
      "Free modernization consultation",
    ],
    priceRange: "₹50,000 - ₹80,000/year",
  },
  {
    id: 6,
    title: "Platinum AMC Plan",
    description:
      "Elite maintenance package with bi-monthly inspections and complete system coverage.",
    coverage: "Nationwide with 2-hour emergency response",
    benefits: [
      "24 inspections/year",
      "Full system coverage",
      "Dedicated account manager",
      "Advanced predictive maintenance",
    ],
    priceRange: "₹1,00,000 - ₹1,50,000/year",
  },
];

const RepairAMC = () => {
  const [activeTab, setActiveTab] = useState("repair");
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    buildingType: "",
    floors: "",
    liftAge: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you for your inquiry, ${formData.name}! We'll contact you shortly.`
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      serviceType: "",
      buildingType: "",
      floors: "",
      liftAge: "",
      message: "",
    });
    setSelectedService(null);
  };

  const filteredServices = liftServices.filter((service) =>
    activeTab === "repair"
      ? service.title.includes("Repair")
      : service.title.includes("AMC")
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Lift Maintenance Solutions
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Comprehensive repair and AMC services across India
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab("repair")}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === "repair"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Repair Services
            </button>
            <button
              onClick={() => setActiveTab("amc")}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === "amc"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              AMC Plans
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300"
              onClick={() => setSelectedService(service)}
            >
              <div
                className={`p-6 ${
                  selectedService?.id === service.id
                    ? "bg-blue-50 border-l-4 border-blue-500"
                    : ""
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md ${
                      activeTab === "repair"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {service.priceRange}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-500">{service.description}</p>
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-900">
                    Coverage:
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    {service.coverage}
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">
                    Benefits:
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-2 text-sm text-gray-700">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-50 to-gray-50 shadow-xl rounded-lg overflow-hidden border border-gray-200"
        >
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900">
                {selectedService
                  ? `Enquire About ${selectedService.title}`
                  : "Get a Free Consultation"}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form below and our expert will contact you within
                24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  >
                    <option value="">Select service type</option>
                    <option value="repair">Lift Repair</option>
                    <option value="amc">Annual Maintenance Contract</option>
                    <option value="modernization">Lift Modernization</option>
                    <option value="inspection">Safety Inspection</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-900"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="buildingType"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Building Type
                  </label>
                  <select
                    id="buildingType"
                    name="buildingType"
                    value={formData.buildingType}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  >
                    <option value="">Select building type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="hospital">Hospital</option>
                    <option value="hotel">Hotel</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="floors"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Number of Floors
                  </label>
                  <input
                    type="number"
                    name="floors"
                    id="floors"
                    value={formData.floors}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="liftAge"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Lift Age (years)
                  </label>
                  <input
                    type="number"
                    name="liftAge"
                    id="liftAge"
                    value={formData.liftAge}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  placeholder="Describe your lift issues or specific requirements..."
                />
              </div>

              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Submit Enquiry
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Stats Section */}
      <StatsSection/>
      </div>
    </div>
  );
};

export default RepairAMC;
