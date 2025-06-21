import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX, FiStar } from 'react-icons/fi';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const modalVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 10,
    transition: {
      duration: 0.2
    }
  }
};

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Apartment Owner",
      quote: "Hi-Lift's AMC saved us 30% on maintenance costs while improving reliability. Their team is always responsive and professional.",
      rating: 5,
      highlight: "Cost Savings",
      image: "/hilift/Images/Testimonial/Rahul.jpg"
    },
    {
      id: 2,
      name: "Priya Mehta",
      role: "Hospital Administrator",
      quote: "Their 24/7 emergency service is a lifesaver for our critical care elevators. We've had zero downtime since switching to Hi-Lift.",
      rating: 5,
      highlight: "Zero Downtime",
      image: "/hilift/Images/Testimonial/Priya.jpg"
    },
    {
      id: 3,
      name: "Vikram Patel",
      role: "Mall Operations Manager",
      quote: "The IoT monitoring system predicts issues before they occur - revolutionary! Our customer complaints have reduced by 40%.",
      rating: 4,
      highlight: "Smart Technology",
      image: "/hilift/Images/Testimonial/VIkram.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    quote: '',
    rating: 0,
    hoverRating: 0,
    isSubmitting: false,
    submitSuccess: false
  });

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const StarRating = ({ rating, interactive = false, onRate, onHover, onLeave }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i} className="cursor-pointer">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => interactive && onRate(ratingValue)}
              className="hidden"
            />
            <FiStar
              className={`w-6 h-6 ${interactive ? 'cursor-pointer' : ''} ${
                ratingValue <= (formData.hoverRating || formData.rating)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
              onMouseEnter={() => interactive && onHover(ratingValue)}
              onMouseLeave={() => interactive && onLeave()}
            />
          </label>
        );
      })}
    </div>
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleRatingHover = (rating) => {
    setFormData(prev => ({ ...prev, hoverRating: rating }));
  };

  const handleRatingLeave = () => {
    setFormData(prev => ({ ...prev, hoverRating: 0 }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData(prev => ({ ...prev, isSubmitting: true }));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setFormData(prev => ({
      ...prev,
      isSubmitting: false,
      submitSuccess: true
    }));
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsFormOpen(false);
      setFormData({
        name: '',
        email: '',
        role: '',
        quote: '',
        rating: 0,
        hoverRating: 0,
        isSubmitting: false,
        submitSuccess: false
      });
    }, 3000);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-400 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-yellow-300 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            What our clients say about working with Hi-Lift
          </motion.p>
        </motion.div>

        {/* Desktop/Tablet Grid View (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg relative flex flex-col"
            >
              <div className="p-6 pt-10 flex-grow">
                <div className="flex items-start mb-4">
                  <div className="mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-blue-600 text-sm font-medium mb-1">{testimonial.role}</p>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
                
                <motion.p 
                  className="text-gray-700 mb-6 italic relative pl-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="absolute top-0 left-0 text-3xl text-blue-100 leading-none">"</span>
                  {testimonial.quote}
                </motion.p>
                
                <div className="flex justify-between items-center mt-auto">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                    {testimonial.highlight}
                  </span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Client
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel (visible only on mobile) */}
        <div className="md:hidden relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6"
          >
            <div className="flex items-start mb-4">
              <div className="mr-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{testimonials[activeIndex].name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-1">{testimonials[activeIndex].role}</p>
                <StarRating rating={testimonials[activeIndex].rating} />
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 italic relative pl-4">
              <span className="absolute top-0 left-0 text-3xl text-blue-100 leading-none">"</span>
              {testimonials[activeIndex].quote}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                {testimonials[activeIndex].highlight}
              </span>
              <div className="flex items-center text-gray-400 text-xs">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified Client
              </div>
            </div>
          </motion.div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-blue-600 hover:bg-blue-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-blue-600 hover:bg-blue-50 transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 items-center"
        >
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">
                  {i === 4 ? '500+' : i}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-600">Happy Clients</span>
          </div>
          
          <div className="hidden sm:block h-6 w-px bg-gray-300"></div>
          
          <div className="flex items-center">
            <div className="mr-3 flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">97% Satisfaction Rate</span>
          </div>

          <div className="hidden sm:block h-6 w-px bg-gray-300"></div>

          <div className="flex items-center">
            <div className="mr-3 flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">10+ Years Experience</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFormOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Share Your Experience
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
          <p className="mt-3 text-xs text-gray-500">Join our growing list of satisfied clients</p>
        </motion.div>
      </div>

      {/* Testimonial Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <FiX className="w-6 h-6" />
              </button>

              {formData.submitSuccess ? (
                <div className="p-8 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your testimonial has been submitted. We appreciate your feedback!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Share Your Experience</h3>
                    <p className="text-gray-600 mt-2">We'd love to hear your feedback</p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Role/Position
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="E.g. Apartment Owner, Facility Manager"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Rating <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center">
                        <StarRating 
                          rating={formData.rating}
                          interactive={true}
                          onRate={handleRatingClick}
                          onHover={handleRatingHover}
                          onLeave={handleRatingLeave}
                        />
                        <span className="ml-2 text-sm text-gray-500">
                          {formData.rating > 0 ? `${formData.rating} star${formData.rating !== 1 ? 's' : ''}` : 'Select stars'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="quote" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Experience <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="quote"
                        name="quote"
                        value={formData.quote}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us about your experience with Hi-Lift..."
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formData.isSubmitting}
                        className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors ${
                          formData.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {formData.isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          'Submit Testimonial'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Testimonials;