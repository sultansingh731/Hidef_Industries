import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Quote, User, Building2 } from 'lucide-react';

const TestimonialsFAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Smooth scroll handler
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
        setIsMobileMenuOpen(false); // Close mobile menu after navigation
      }
    };


  const testimonials = [
    {
      name: "Rajesh Sharma",
      position: "Plant Manager",
      company: "Steel Dynamics India Pvt Ltd",
      rating: 5,
      text: "HiDef's SILRAM 98.5 has significantly improved our furnace lining performance. We've seen a 30% increase in campaign life and reduced maintenance costs. Their technical support team is exceptional.",
      location: "Mumbai, Maharashtra"
    },
    {
      name: "Priya Gupta",
      position: "Technical Director",
      company: "Rajasthan Steel Works",
      rating: 5,
      text: "The custom blend solutions from HiDef perfectly match our specific furnace requirements. Their LRM products have enhanced our refractory performance beyond expectations.",
      location: "Jaipur, Rajasthan"
    },
    {
      name: "Amit Patel",
      position: "Operations Head",
      company: "Gujarat Iron & Steel Co.",
      rating: 5,
      text: "Consistent quality, reliable supply chain, and excellent customer service. HiDef Industries has been our trusted partner for over 3 years. Their products never disappoint.",
      location: "Ahmedabad, Gujarat"
    },
    {
      name: "Dr. Suresh Kumar",
      position: "Chief Metallurgist",
      company: "National Steel Corporation",
      rating: 5,
      text: "HiDef's high-grade ramming mass has improved our furnace thermal efficiency by 15%. Their technical expertise and product innovation are truly commendable.",
      location: "Hyderabad, Telangana"
    },
    {
      name: "Vikash Singh",
      position: "Procurement Manager",
      company: "Eastern Steel Mills",
      rating: 5,
      text: "From order processing to delivery, HiDef maintains the highest standards. Their SiC and alumina-based products have consistently met our quality specifications.",
      location: "Kolkata, West Bengal"
    },
    {
      name: "Meera Reddy",
      position: "Quality Control Head",
      company: "South India Steels",
      rating: 5,
      text: "The technical documentation and quality certificates provided by HiDef are comprehensive. Their products have helped us achieve zero furnace failures in the last 18 months.",
      location: "Chennai, Tamil Nadu"
    }
  ];

  const faqs = [
    {
      question: "What is ramming mass and how does it benefit steel production?",
      answer: "Ramming mass is a refractory material used to line induction furnaces in steel production. Our premium ramming mass provides superior thermal insulation, extends furnace life, reduces energy consumption, and ensures consistent steel quality. It forms a protective barrier between the molten metal and furnace structure, preventing heat loss and contamination."
    },
    {
      question: "What makes HiDef's SILRAM 98.5 superior to other products?",
      answer: "SILRAM 98.5 contains 98.5% silicon carbide content, offering exceptional thermal conductivity, chemical resistance, and thermal shock resistance. It provides 30-40% longer campaign life compared to standard products, reduced maintenance costs, faster heat-up times, and superior corrosion resistance against molten metals and slags."
    },
    {
      question: "Can you provide custom blends for specific furnace requirements?",
      answer: "Yes, we specialize in custom formulations based on your furnace type, operating temperature, tonnage capacity, and specific metallurgical requirements. Our technical team analyzes your needs and develops tailored solutions including particle size distribution, chemical composition, and thermal properties optimized for your operations."
    },
    {
      question: "What technical support do you provide after product delivery?",
      answer: "We offer comprehensive technical support including installation guidance, application techniques, troubleshooting assistance, performance monitoring, regular quality assessments, and furnace optimization recommendations. Our technical experts are available for on-site consultations and training sessions."
    },
    {
      question: "What are the typical delivery timeframes for your products?",
      answer: "Standard products like SILRAM 98.5 and LRM are typically delivered within 7-10 days across India. Custom blends require 15-20 days for formulation and testing. We maintain strategic inventory locations to ensure faster delivery to major steel production hubs. Urgent requirements can be expedited based on availability."
    },
    {
      question: "How do you ensure consistent product quality across batches?",
      answer: "We maintain rigorous quality control with ISO-certified processes, automated batch monitoring systems, comprehensive raw material testing, in-process quality checks, final product certification, and third-party laboratory validation. Each batch comes with detailed quality certificates and technical data sheets."
    },
    {
      question: "What packaging and storage recommendations do you provide?",
      answer: "Our products are supplied in moisture-resistant packaging (25kg/50kg bags or bulk containers). Store in dry, covered areas away from direct moisture, maintain temperature below 40°C, use within 12 months of manufacture for optimal performance, and follow FIFO (First In, First Out) inventory management."
    },
    {
      question: "Do you supply internationally or only within India?",
      answer: "Currently, we primarily serve the Indian market with strong presence across major steel production states. We are expanding to international markets and can accommodate export orders with appropriate lead times. Please contact us for specific international requirements and shipping arrangements."
    },
    {
      question: "What certifications and compliance standards do your products meet?",
      answer: "Our products comply with IS standards, BIS certifications, ISO 9001:2015 quality management, environmental compliance certifications, and customer-specific quality standards. We provide detailed technical data sheets, chemical analysis reports, and thermal property certifications with every shipment."
    },
    {
      question: "How do I determine the right product for my furnace application?",
      answer: "Our technical team evaluates factors including furnace type (induction/arc), operating temperature range, furnace capacity, metal grades processed, current lining performance, and maintenance schedules. Contact us with your furnace specifications for personalized product recommendations and application guidance."
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-orange-500 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Testimonials Section */}
      {/* <section className="py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white relative">
            Client Testimonials
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover why leading steel manufacturers across India trust HiDef Industries for their premium ramming mass and industrial mineral needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black/60 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 relative"
              >
                <Quote className="w-8 h-8 text-orange-500 mb-4 opacity-50" />
                
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex items-center mb-2">
                    <User className="w-4 h-4 text-orange-500 mr-2" />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-orange-400">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-400">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span>{testimonial.company}</span>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-black/50 p-6 rounded-xl border border-gray-700 inline-block">
              <h3 className="text-xl font-semibold mb-2 text-orange-500">Join Our Satisfied Clients</h3>
              <p className="text-gray-300 mb-4">Ready to experience premium quality ramming mass solutions?</p>
              <button 
             onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Get Quote Today
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section 
          className="py-20 bg-white-900"
          style={{
            background:
              "var(--search-input_background, linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%))",
          }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-black relative">
            Frequently Asked Questions
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-center text-black mb-12 max-w-2xl mx-auto">
            Get answers to common questions about our premium ramming mass products, technical specifications, and services.
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 rounded-xl overflow-hidden hover:border-orange-500 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-black/70 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-white pr-4 leading-relaxed">
                    {faq.question}
                  </h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFAQ === index && (
                  <div className="px-6 pb-5 animate-fadeIn">
                    <div className="border-t border-gray-600 pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-black p-8 rounded-xl border border-black-700">
              <h3 className="text-2xl font-semibold mb-3 text-white">Still Have Questions?</h3>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Our technical experts are ready to help you find the perfect ramming mass solution for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Contact Technical Team
                </button>
                <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                  Request Product Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsFAQ;