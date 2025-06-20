import React, { useState, useEffect } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const liftAccessories = {
    "Cabin Accessories": [
      {
        name: "Cabin fan",
        image: "/hilift/A/Cabin Fan.jpeg",
        description: "High-performance ventilation system for elevator cabins ensuring proper air circulation",
        features: ["Energy efficient", "Quiet operation", "Adjustable speed"],
        priceRange: "$150-$300",
      },
      {
        name: "Handrails",
        image: "/hilift/A/Handel.jpeg",
        description: "Sturdy stainless steel or aluminum handrails for passenger safety and support",
        features: ["Anti-slip surface", "Custom lengths", "Easy installation"],
        priceRange: "$200-$500",
      },
      {
        name: "Mirror panel",
        image: "/hilift/A/Mirror panel.jpeg",
        description: "Tempered glass mirrors that create an illusion of spaciousness in the cabin",
        features: ["Safety glass", "Custom sizes", "Scratch resistant"],
        priceRange: "$250-$600",
      },
      {
        name: "False ceiling with LED lights",
        image: "/hilift/A/False ceiling with LED lights.png",
        description: "Modern lighting solutions with energy-efficient LEDs for better illumination",
        features: ["Multiple color options", "Dimmable", "Long lifespan"],
        priceRange: "$400-$800",
      },
      {
        name: "Floor tiles / anti-skid flooring",
        image: "/hilift/A/Floor tiles.jpeg",
        description: "Durable and slip-resistant flooring options in various designs and materials",
        features: ["Easy maintenance", "Wear resistant", "Custom designs"],
        priceRange: "$300-$700",
      },
      {
        name: "Voice annunciator system",
        image: "/hilift/A/Voice annunciator system.jpeg",
        description: "Audio floor announcement system for visually impaired users",
        features: ["Multiple languages", "Adjustable volume", "Clear audio"],
        priceRange: "$350-$650",
      },
      {
        name: "Cabin display (LCD or LED)",
        image: "/hilift/A/Cabin display (LCD or LED).jpg",
        description: "Digital display showing current floor and direction of travel",
        features: ["High visibility", "Energy saving", "Custom messages"],
        priceRange: "$500-$900",
      },
    ],
    "Control & Display Systems": [
      {
        name: "COP (Car Operating Panel)",
        image: "/hilift/A/COP (Car Operating Panel).jpeg",
        description: "Elevator control panel inside the cabin with floor selection buttons",
        features: ["Tactile buttons", "Backlit display", "Durable construction"],
        priceRange: "$450-$850",
      },
      {
        name: "LOP (Landing Operating Panel)",
        image: "/hilift/A/LOP (Landing Operating Panel).jpeg",
        description: "Hall call buttons at each floor for summoning the elevator",
        features: ["Weather resistant", "ADA compliant", "LED indicators"],
        priceRange: "$400-$750",
      },
      {
        name: "Digital/LED/LCD display",
        image: "/hilift/A/Digital-LED-LCD display.jpeg",
        description: "Modern floor indicators showing elevator position and direction",
        features: ["Large digits", "Energy efficient", "Multiple display options"],
        priceRange: "$600-$1200",
      },
      {
        name: "Touch or button-based control panel",
        image: "/hilift/A/Touch or button-based control panel.jpeg",
        description: "Advanced control interfaces with touch-sensitive or tactile buttons",
        features: ["Intuitive interface", "Custom programming", "Access control"],
        priceRange: "$700-$1500",
      },
      {
        name: "Access control system (card reader, biometric)",
        image: "/hilift/A/Access control system (card reader, biometric).jpeg",
        description: "Security systems for restricted access to specific floors",
        features: ["RFID compatible", "Biometric options", "Audit trail"],
        priceRange: "$1000-$2500",
      },
    ],
    "Door Accessories": [
      {
        name: "Automatic doors (telescopic/center opening)",
        image: "/hilift/A/Automatic doors (telescopic-center opening).jpeg",
        description: "Smooth operating door systems with various opening configurations",
        features: ["Fast operation", "Safety sensors", "Low noise"],
        priceRange: "$2000-$5000",
      },
      {
        name: "Manual collapsible door",
        image: "/hilift/A/Manual collapsible door.jpeg",
        description: "Traditional manual doors for elevator cabins",
        features: ["Durable construction", "Easy operation", "Safety latches"],
        priceRange: "$800-$2000",
      },
      {
        name: "Vision panel / glass doors",
        image: "/hilift/A/Vision panel-glass doors.jpeg",
        description: "Transparent doors or panels allowing visibility into the elevator",
        features: ["Tempered glass", "Frosted options", "Scratch resistant"],
        priceRange: "$1500-$3500",
      },
      {
        name: "Door sensors (infrared or mechanical)",
        image: "/hilift/A/Door sensors (infrared or mechanical).jpeg",
        description: "Safety devices that prevent doors from closing on obstructions",
        features: ["Reliable detection", "Easy adjustment", "Dual beam"],
        priceRange: "$300-$700",
      },
      {
        name: "Door header motor and controller",
        image: "/hilift/A/Door header motor and controller.jpeg",
        description: "Precision components for smooth door operation",
        features: ["Variable speed", "Soft start/stop", "Low maintenance"],
        priceRange: "$1200-$2800",
      },
    ],
    "Safety Accessories": [
      {
        name: "Overload indicator",
        image: "/hilift/A/Overload indicator.jpeg",
        description: "System that detects and alerts when elevator exceeds capacity",
        features: ["Accurate measurement", "Visual/audio alarm", "Auto shutdown"],
        priceRange: "$600-$1200",
      },
      {
        name: "Emergency alarm and intercom",
        image: "/hilift/A/Emergency alarm and intercom.jpeg",
        description: "Communication system for emergencies",
        features: ["Two-way communication", "Battery backup", "Auto dial"],
        priceRange: "$500-$1000",
      },
      {
        name: "Emergency stop switch",
        image: "/hilift/A/Emergency stop switch.jpeg",
        description: "Safety mechanism to immediately halt elevator operation",
        features: ["Mushroom head", "Locking mechanism", "Bright color"],
        priceRange: "$150-$300",
      },
      {
        name: "Auto-rescue device (ARD)",
        image: "/hilift/A/Auto-rescue device (ARD).jpeg",
        description: "System that automatically moves elevator to nearest floor during power failure",
        features: ["Battery backup", "Smooth operation", "Manual override"],
        priceRange: "$1500-$3000",
      },
      {
        name: "Fireman switch",
        image: "/hilift/A/Fireman switch.jpeg",
        description: "Special control mode for fire emergency service",
        features: ["Key operated", "Priority override", "Visual indicator"],
        priceRange: "$400-$800",
      },
      {
        name: "Buffer spring/oil buffer",
        image: "/hilift/A/Buffer spring-oil buffer.jpeg",
        description: "Shock-absorbing devices at the elevator pit",
        features: ["Energy absorption", "Durable construction", "Maintenance free"],
        priceRange: "$800-$2000",
      },
      {
        name: "Governor and safety gear",
        image: "/hilift/A/Governor and safety gear.jpeg",
        description: "Overspeed protection system for elevator cars",
        features: ["Precision mechanism", "Reliable triggering", "Easy inspection"],
        priceRange: "$2500-$5000",
      },
    ],
    "Electrical Accessories": [
      {
        name: "Control panel",
        image: "/hilift/A/Control panel.jpeg",
        description: "Main control unit managing elevator operation",
        features: ["Microprocessor based", "Fault diagnostics", "Energy saving"],
        priceRange: "$3000-$8000",
      },
      {
        name: "UPS or ARD system",
        image: "/hilift/A/UPS or ARD system.jpeg",
        description: "Uninterruptible power supply for emergency operation",
        features: ["Seamless switchover", "Long battery life", "Automatic testing"],
        priceRange: "$2000-$5000",
      },
      {
        name: "Inverter or VVVF drive",
        image: "/hilift/A/Inverter or VVVF drive.jpeg",
        description: "Variable voltage variable frequency drive for smooth operation",
        features: ["Energy efficient", "Soft acceleration", "Compact design"],
        priceRange: "$2500-$6000",
      },
      {
        name: "Main cable and traveling cable",
        image: "/hilift/A/Main cable and traveling cable.jpeg",
        description: "Power and signal transmission cables for elevator operation",
        features: ["Flexible construction", "Durable jacket", "EMI shielded"],
        priceRange: "$800-$2000",
      },
    ],
    "Shaft & Pit Equipment": [
      {
        name: "Guide rails",
        image: "/hilift/A/Guide rails.jpeg",
        description: "Precision rails that guide the elevator car's movement",
        features: ["High strength steel", "Precision machined", "Corrosion resistant"],
        priceRange: "$1500-$4000",
      },
      {
        name: "Counterweight frame",
        image: "/hilift/A/Counterweight frame.jpeg",
        description: "Balancing system to reduce motor load",
        features: ["Precise balancing", "Durable construction", "Adjustable weights"],
        priceRange: "$2000-$5000",
      },
      {
        name: "Limit switches",
        image: "/hilift/A/Limit switches.jpeg",
        description: "Safety devices that prevent overtravel at shaft ends",
        features: ["Positive operation", "Durable contacts", "Easy adjustment"],
        priceRange: "$300-$700",
      },
      {
        name: "Pit ladder",
        image: "/hilift/A/Pit ladder.jpeg",
        description: "Access ladder for elevator pit maintenance",
        features: ["Anti-slip steps", "Corrosion resistant", "Foldable design"],
        priceRange: "$500-$1200",
      },
      {
        name: "Shaft light",
        image: "/hilift/A/Shaft light.jpeg",
        description: "Illumination system for elevator shaft",
        features: ["Explosion proof", "Long lifespan", "Motion activated"],
        priceRange: "$200-$500",
      },
    ],
    Miscellaneous: [
      {
        name: "Floor position indicator",
        image: "/hilift/A/Floor position indicator.jpeg",
        description: "Displays elevator position in the hoistway",
        features: ["Large display", "Energy efficient", "Multiple styles"],
        priceRange: "$400-$900",
      },
      {
        name: "Braille button panel",
        image: "/hilift/A/Braille button panel.jpeg",
        description: "Tactile buttons for visually impaired users",
        features: ["ADA compliant", "Durable markings", "Backlit buttons"],
        priceRange: "$300-$700",
      },
      {
        name: "Landing bell",
        image: "/hilift/A/Landing bell.jpeg",
        description: "Audible signal indicating elevator arrival",
        features: ["Adjustable volume", "Pleasant tone", "Durable construction"],
        priceRange: "$150-$350",
      },
      {
        name: "Maintenance tools kit",
        image: "/hilift/A/Maintenance tools kit.jpeg",
        description: "Specialized tools for elevator servicing",
        features: ["Complete set", "Durable tools", "Portable case"],
        priceRange: "$500-$1200",
      },
    ],
  };

  // Filter accessories based on search term
  const filteredAccessories = searchTerm
    ? Object.entries(liftAccessories).reduce((acc, [category, items]) => {
        const filteredItems = items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredItems.length > 0) {
          acc[category] = filteredItems;
        }
        return acc;
      }, {})
    : liftAccessories;

  // Check if any results exist
  const hasSearchResults = Object.keys(filteredAccessories).length > 0;
  const activeCategoryHasItems = filteredAccessories[activeCategory]?.length > 0;

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
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 },
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
    const submitButton = e.target.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
      
      setTimeout(() => {
        submitButton.innerHTML = `
          <svg class="w-5 h-5 mx-auto text-white animate-check" viewBox="0 0 24 24" fill="none">
            <path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="ml-2">Sent Successfully</span>
        `;
        
        setTimeout(() => {
          alert(`Thank you for your interest in ${selectedAccessory.name}!\nOur team will contact you within 24 hours.`);
          setSelectedAccessory(null);
          setFormData({
            name: "",
            email: "",
            phone: "",
            quantity: 1,
            message: "",
            company: "",
          });
        }, 1000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Floating Quick Access */}
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-4 py-2 z-40 flex items-center space-x-2"
          >
            {Object.keys(liftAccessories).map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {category.split(" ")[0]}
              </button>
            ))}
          </motion.div>
        )}

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12 px-6 shadow-xl"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/elevator-pattern.png')] bg-repeat opacity-30"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              Elevator Accessories & Components
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl mb-8"
            >
              Premium quality accessories to enhance functionality, safety and aesthetics
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative max-w-md mx-auto"
            >
              <input
                type="text"
                placeholder="Search accessories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 rounded-full border-1 focus:ring-2 focus:ring-blue-200 text-gray-900 shadow-md"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Navigation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:w-1/4"
          >
            <div className="bg-white rounded-xl shadow-lg p-4 sticky top-4 border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Categories
              </h3>
              <ul className="space-y-2">
                {Object.keys(searchTerm ? filteredAccessories : liftAccessories).map((category) => (
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
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center ${
                        activeCategory === category
                          ? "bg-blue-50 text-blue-600 font-medium border border-blue-100"
                          : "hover:bg-gray-50 text-gray-700 border border-transparent"
                      }`}
                    >
                      <span className="flex-grow">{category}</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {(searchTerm ? filteredAccessories : liftAccessories)[category].length}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            {/* Search Results Info */}
            {searchTerm && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 mb-6 rounded-lg ${
                  hasSearchResults
                    ? "bg-yellow-50 border-l-4 border-yellow-400"
                    : "bg-red-50 border-l-4 border-red-400"
                }`}
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className={`h-5 w-5 ${
                        hasSearchResults ? "text-yellow-400" : "text-red-400"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    {hasSearchResults ? (
                      <p className="text-sm text-yellow-700">
                        Showing {Object.values(filteredAccessories).reduce(
                          (sum, items) => sum + items.length,
                          0
                        )}{" "}
                        results for "<span className="font-medium">{searchTerm}</span>"
                        <button
                          onClick={() => setSearchTerm("")}
                          className="ml-2 text-yellow-700 hover:text-yellow-800 font-medium"
                        >
                          Clear search
                        </button>
                      </p>
                    ) : (
                      <p className="text-sm text-red-700">
                        No results found for "<span className="font-medium">{searchTerm}</span>".
                        Please try different keywords.
                        <button
                          onClick={() => setSearchTerm("")}
                          className="ml-2 text-red-700 hover:text-red-800 font-medium"
                        >
                          Clear search
                        </button>
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Main Content */}
            {searchTerm && !hasSearchResults ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white rounded-xl shadow-lg"
              >
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No products found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  We couldn't find any accessories matching "{searchTerm}".
                  Try different keywords.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => setSearchTerm("")}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Clear search
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <motion.h3
                      className="text-2xl font-bold text-gray-800 flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      {activeCategory}
                    </motion.h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {filteredAccessories[activeCategory]?.length || 0} products
                    </span>
                  </div>

                  {activeCategoryHasItems ? (
                    <motion.ul
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {filteredAccessories[activeCategory].map((item, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          whileHover="hover"
                          className="flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm h-full transform transition-all duration-300 hover:shadow-md"
                        >
                          <div className="h-48 bg-gray-100 overflow-hidden relative">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                              <span className="text-sm font-medium text-white">{item.priceRange}</span>
                            </div>
                          </div>
                          <div className="p-4 flex flex-col flex-grow">
                            <div className="flex-grow">
                              <h4 className="font-semibold text-lg mb-2 text-gray-800">{item.name}</h4>
                              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                              <div className="mt-4">
                                <h5 className="text-xs font-semibold text-gray-500 uppercase mb-1">Key Features</h5>
                                <ul className="space-y-1">
                                  {item.features.slice(0, 3).map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                      <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                      <span className="text-sm text-gray-700">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="mt-4 flex space-x-2">
                              <motion.button
                                onClick={() => setSelectedAccessory(item)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-grow bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                              >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Request Quote
                              </motion.button>
                              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  ) : (
                    <div className="text-center py-12">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h3 className="mt-2 text-lg font-medium text-gray-900">No products in this category</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        There are currently no products matching your criteria in this category.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Additional Info */}
            <AnimatePresence>
              {activeCategory && activeCategoryHasItems && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        About {activeCategory}
                      </h4>
                      <p className="text-gray-700">
                        Our {activeCategory.toLowerCase()} are manufactured to meet international safety standards and designed for optimal performance and durability. All products come with a 2-year warranty and technical support. Contact us for custom solutions tailored to your specific requirements.
                      </p>
                    </div>
                  </div>
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

                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-lg"></div>
                  <img
                    src={selectedAccessory.image}
                    alt={selectedAccessory.name}
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-bold text-lg">{selectedAccessory.name}</h4>
                    <p className="text-white/90 text-sm line-clamp-2">{selectedAccessory.description}</p>
                  </div>
                </div>

                <div className="mb-6 bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedAccessory.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-blue-100">
                    <p className="text-sm font-medium text-blue-700">Price Range: <span className="font-bold">{selectedAccessory.priceRange}</span></p>
                  </div>
                </div>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Company"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="you@example.com"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Quantity <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
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
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Delivery Timeframe
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>Standard (2-4 weeks)</option>
                        <option>Express (1-2 weeks)</option>
                        <option>Urgent (3-5 days)</option>
                      </select>
                    </div>
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
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
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