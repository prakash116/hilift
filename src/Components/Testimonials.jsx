import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
  
  // For desktop, we'll show 3 testimonials, for tablet 2, and for mobile 1 in carousel
  const itemsPerPage = {
    desktop: 3,
    tablet: 2,
    mobile: 1
  };

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

  // Star rating component
  const StarRating = ({ rating }) => (
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 md:w-5 md:h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

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
          {testimonials.slice(0, itemsPerPage.desktop).map((testimonial, i) => (
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
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition-colors hover:shadow-xl transform hover:-translate-y-1">
            Share Your Experience
          </button>
          <p className="mt-3 text-xs text-gray-500">Join our growing list of satisfied clients</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;