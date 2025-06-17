import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Feedback() {
    
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

  return (
    <div>
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
    </div>
  );
}

export default Feedback;
