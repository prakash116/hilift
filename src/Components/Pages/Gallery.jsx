import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ElevatorGallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Modern Passenger Elevator",
      category: "Commercial",
      image: "/hilift/Images/1342.jpg",
      description:
        "Sleek design with energy-efficient technology for high-traffic buildings",
    },
    {
      id: 2,
      title: "Hospital Elevator",
      category: "Medical",
      image: "/Images/gallery/hospital-elevator.jpg",
      description:
        "Extra-wide cabins with smooth operation for patient transport",
    },
    {
      id: 3,
      title: "Smart Home Elevator",
      category: "Residential",
      image: "/Images/gallery/home-elevator.jpg",
      description: "Compact IoT-enabled lifts perfect for modern homes",
    },
    {
      id: 4,
      title: "Industrial Freight Elevator",
      category: "Industrial",
      image: "/Images/gallery/freight-elevator.jpg",
      description: "Heavy-duty lifts with 5-ton capacity for warehouses",
    },
    {
      id: 5,
      title: "Glass Panoramic Elevator",
      category: "Commercial",
      image: "/Images/gallery/glass-elevator.jpg",
      description: "Architectural showpiece with 360° visibility",
    },
    {
      id: 6,
      title: "Machine Room-Less Elevator",
      category: "Commercial",
      image: "/Images/gallery/mrl-elevator.jpg",
      description: "Space-saving solution with reduced energy consumption",
    },
  ];

  const categories = [
    "All",
    ...new Set(galleryItems.map((item) => item.category)),
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [direction, setDirection] = useState(0);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const navigateImages = (newDirection) => {
    setDirection(newDirection);
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    let nextIndex;

    if (newDirection > 0) {
      nextIndex = (currentIndex + 1) % galleryItems.length;
    } else {
      nextIndex =
        (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }

    setSelectedImage(galleryItems[nextIndex]);
  };

  // Animation variants
  const galleryItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
      },
    },
  };

  const modalVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }),
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Gallery Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Elevator Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our premium elevator installations across India
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={galleryItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover="hover"
              onClick={() => setSelectedImage(item)}
              className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer group"
            >
              <div className="relative overflow-hidden h-60">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence custom={direction}>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
              >
                <FiX size={28} />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateImages(-1)}
                className="absolute left-4 md:left-8 text-white hover:text-gray-300 z-50 p-2"
              >
                <FiChevronLeft size={32} />
              </button>
              <button
                onClick={() => navigateImages(1)}
                className="absolute right-4 md:right-8 text-white hover:text-gray-300 z-50 p-2"
              >
                <FiChevronRight size={32} />
              </button>

              {/* Image Content */}
              <motion.div
                key={selectedImage.id}
                custom={direction}
                variants={modalVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative max-w-4xl w-full"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain max-h-[80vh]"
                  />
                </div>
                <div className="mt-4 text-white text-center">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-2">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300">{selectedImage.description}</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ElevatorGallery;
