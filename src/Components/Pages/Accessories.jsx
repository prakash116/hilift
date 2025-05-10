import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Accessories() {
  const [activeCategory, setActiveCategory] = useState("Cabin Accessories");
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: 1,
    message: "",
    company: "",
  });

  const liftAccessories = {
    "Cabin Accessories": [
      {
        name: "Cabin fan",
        image: "/images/cabin-fan.jpg",
        description:
          "High-performance ventilation system for elevator cabins ensuring proper air circulation",
      },
      {
        name: "Handrails",
        image: "/images/handrails.jpg",
        description:
          "Sturdy stainless steel or aluminum handrails for passenger safety and support",
      },
      {
        name: "Mirror panel",
        image: "/images/mirror-panel.jpg",
        description:
          "Tempered glass mirrors that create an illusion of spaciousness in the cabin",
      },
      {
        name: "False ceiling with LED lights",
        image: "/images/led-ceiling.jpg",
        description:
          "Modern lighting solutions with energy-efficient LEDs for better illumination",
      },
      {
        name: "Floor tiles / anti-skid flooring",
        image: "/images/elevator-flooring.jpg",
        description:
          "Durable and slip-resistant flooring options in various designs and materials",
      },
      {
        name: "Voice annunciator system",
        image: "/images/voice-annunciator.jpg",
        description:
          "Audio floor announcement system for visually impaired users",
      },
      {
        name: "Cabin display (LCD or LED)",
        image: "/images/cabin-display.jpg",
        description:
          "Digital display showing current floor and direction of travel",
      },
    ],
    "Control & Display Systems": [
      {
        name: "COP (Car Operating Panel)",
        image: "/images/cop-panel.jpg",
        description:
          "Elevator control panel inside the cabin with floor selection buttons",
      },
      {
        name: "LOP (Landing Operating Panel)",
        image: "/images/lop-panel.jpg",
        description:
          "Hall call buttons at each floor for summoning the elevator",
      },
      {
        name: "Digital/LED/LCD display",
        image: "/images/digital-display.jpg",
        description:
          "Modern floor indicators showing elevator position and direction",
      },
      {
        name: "Touch or button-based control panel",
        image: "/images/touch-panel.jpg",
        description:
          "Advanced control interfaces with touch-sensitive or tactile buttons",
      },
      {
        name: "Access control system (card reader, biometric)",
        image: "/images/access-control.jpg",
        description:
          "Security systems for restricted access to specific floors",
      },
    ],
    "Door Accessories": [
      {
        name: "Automatic doors (telescopic/center opening)",
        image: "/images/automatic-doors.jpg",
        description:
          "Smooth operating door systems with various opening configurations",
      },
      {
        name: "Manual collapsible door",
        image: "/images/collapsible-door.jpg",
        description: "Traditional manual doors for elevator cabins",
      },
      {
        name: "Vision panel / glass doors",
        image: "/images/glass-doors.jpg",
        description:
          "Transparent doors or panels allowing visibility into the elevator",
      },
      {
        name: "Door sensors (infrared or mechanical)",
        image: "/images/door-sensors.jpg",
        description:
          "Safety devices that prevent doors from closing on obstructions",
      },
      {
        name: "Door header motor and controller",
        image: "/images/door-motor.jpg",
        description: "Precision components for smooth door operation",
      },
    ],
    "Safety Accessories": [
      {
        name: "Overload indicator",
        image: "/images/overload-indicator.jpg",
        description:
          "System that detects and alerts when elevator exceeds capacity",
      },
      {
        name: "Emergency alarm and intercom",
        image: "/images/emergency-intercom.jpg",
        description: "Communication system for emergencies",
      },
      {
        name: "Emergency stop switch",
        image: "/images/emergency-stop.jpg",
        description: "Safety mechanism to immediately halt elevator operation",
      },
      {
        name: "Auto-rescue device (ARD)",
        image: "/images/auto-rescue.jpg",
        description:
          "System that automatically moves elevator to nearest floor during power failure",
      },
      {
        name: "Fireman switch",
        image: "/images/fireman-switch.jpg",
        description: "Special control mode for fire emergency service",
      },
      {
        name: "Buffer spring/oil buffer",
        image: "/images/elevator-buffer.jpg",
        description: "Shock-absorbing devices at the elevator pit",
      },
      {
        name: "Governor and safety gear",
        image: "/images/governor.jpg",
        description: "Overspeed protection system for elevator cars",
      },
    ],
    "Electrical Accessories": [
      {
        name: "Control panel",
        image: "/images/control-panel.jpg",
        description: "Main control unit managing elevator operation",
      },
      {
        name: "UPS or ARD system",
        image: "/images/ups-system.jpg",
        description: "Uninterruptible power supply for emergency operation",
      },
      {
        name: "Inverter or VVVF drive",
        image: "/images/inverter-drive.jpg",
        description:
          "Variable voltage variable frequency drive for smooth operation",
      },
      {
        name: "Main cable and traveling cable",
        image: "/images/traveling-cable.jpg",
        description:
          "Power and signal transmission cables for elevator operation",
      },
    ],
    "Shaft & Pit Equipment": [
      {
        name: "Guide rails",
        image: "/images/guide-rails.jpg",
        description: "Precision rails that guide the elevator car's movement",
      },
      {
        name: "Counterweight frame",
        image: "/images/counterweight.jpg",
        description: "Balancing system to reduce motor load",
      },
      {
        name: "Limit switches",
        image: "/images/limit-switches.jpg",
        description: "Safety devices that prevent overtravel at shaft ends",
      },
      {
        name: "Pit ladder",
        image: "/images/pit-ladder.jpg",
        description: "Access ladder for elevator pit maintenance",
      },
      {
        name: "Shaft light",
        image: "/images/shaft-light.jpg",
        description: "Illumination system for elevator shaft",
      },
    ],
    Miscellaneous: [
      {
        name: "Floor position indicator",
        image: "/images/position-indicator.jpg",
        description: "Displays elevator position in the hoistway",
      },
      {
        name: "Braille button panel",
        image: "/images/braille-panel.jpg",
        description: "Tactile buttons for visually impaired users",
      },
      {
        name: "Landing bell",
        image: "/images/landing-bell.jpg",
        description: "Audible signal indicating elevator arrival",
      },
      {
        name: "Maintenance tools kit",
        image: "/images/tools-kit.jpg",
        description: "Specialized tools for elevator servicing",
      },
    ],
  };

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
    hidden: { y: 20, opacity: 0 },
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
      y: -3,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    },
  };

  const categoryVariants = {
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
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", {
      accessory: selectedAccessory,
      ...formData,
    });
    alert(
      `Thank you for your interest in ${selectedAccessory.name}!\nOur team will contact you within 24 hours.`
    );
    setSelectedAccessory(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      quantity: 1,
      message: "",
      company: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">


        <div >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-800"
        >
          Elevator Accessories & Components
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto"
        >
          Premium quality accessories to enhance functionality, safety and
          aesthetics
        </motion.p>
        </div>


        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Navigation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:w-1/4"
          >
            <div className="bg-gray-200 rounded-xl shadow-md p-4 sticky top-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Categories
              </h3>
              <ul className="space-y-2">
                {Object.keys(liftAccessories).map((category) => (
                  <motion.li
                    key={category}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => {
                        setActiveCategory(category);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === category
                          ? "bg-blue-100 text-blue-600 font-medium"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {category}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              variants={categoryVariants}
              className="bg-gray-200 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <motion.h3
                  className="text-2xl font-bold mb-6 text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {activeCategory}
                </motion.h3>

                <motion.ul
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {liftAccessories[activeCategory].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      whileHover="hover"
                      className="flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm h-full"
                    >
                      <div className="h-48 bg-gray-100 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <div className="flex-grow">
                          <h4 className="font-semibold text-lg mb-2 text-gray-800">
                            {item.name}
                          </h4>
                          <p className="text-gray-600 text-sm mb-4">
                            {item.description}
                          </p>
                        </div>
                        <motion.button
                          onClick={() => setSelectedAccessory(item)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors mt-auto"
                        >
                          Request Quote
                        </motion.button>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            {/* Additional Info */}
            <AnimatePresence>
              {activeCategory && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 bg-blue-50 rounded-xl p-6"
                >
                  <h4 className="font-semibold text-blue-800 mb-2">
                    About {activeCategory}
                  </h4>
                  <p className="text-gray-700">
                    Our {activeCategory.toLowerCase()} are manufactured to meet
                    international safety standards and designed for optimal
                    performance and durability. All products come with a 2-year
                    warranty and technical support. Contact us for custom
                    solutions tailored to your specific requirements.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Purchase Form Modal */}
      <AnimatePresence>
        {selectedAccessory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Request Quote for {selectedAccessory.name}
                  </h3>
                  <button
                    onClick={() => setSelectedAccessory(null)}
                    className="text-gray-500 hover:text-gray-700"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mb-4">
                  <img
                    src={selectedAccessory.image}
                    alt={selectedAccessory.name}
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                  <p className="text-gray-600 text-sm">
                    {selectedAccessory.description}
                  </p>
                </div>

                <motion.form
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Any special requirements or specifications"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, backgroundColor: "#1e40af" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                    >
                      Submit Enquiry
                    </motion.button>
                  </div>
                </motion.form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accessories;