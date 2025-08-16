/* The above code is a React component for a website called HiDef Industries. It includes sections for
Home, About, Services, Process, Products, Testimonials, FAQ, and Contact. */

// import React, { useState, useEffect } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Building,
//   Wrench,
//   Headphones,
//   Settings,
//   BarChart3,
//   TrendingUp,
//   Factory,
//   Menu,
//   X,
//   ChevronDown,
//   ChevronUp,
//   Star,
//   Quote,
//   CheckCircle,
//   ArrowRight,
//   Clock,
// } from "lucide-react";

// // Import the TestimonialsFAQ component
// import TestimonialsFAQ from './Testimonials'; // Adjust the path if your file is in a different directory

// const HiDefIndustries = () => {
//   const [activeSection, setActiveSection] = useState("home");
//   const [isVisible, setIsVisible] = useState({});
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [expandedService, setExpandedService] = useState(null);
//   const [expandedFAQ, setExpandedFAQ] = useState(null);
//   const [hasAnimated, setHasAnimated] = useState({});
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     service: "",
//     message: "",
//   });

//   // Smooth scroll handler
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setActiveSection(sectionId);
//       setIsMobileMenuOpen(false); // Close mobile menu after navigation
//     }
//   };

//   // Form handler
//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     if (formData.name && formData.email) {
//       // Format the message for WhatsApp
//       const whatsappMessage = `Hello HiDef Industries!

// *New Service Inquiry*

// *Name:* ${formData.name}
// *Email:* ${formData.email}
// *Service Required:* ${formData.service || "Not specified"}

// *Message:*
// ${formData.message || "No additional message provided"}

// ---
// Sent from HiDef Industries Website`;

//       // WhatsApp number (without + symbol)
//       const whatsappNumber = "917073964398";

//       // Create WhatsApp URL
//       const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//         whatsappMessage
//       )}`;

//       // Open WhatsApp in new tab
//       window.open(whatsappUrl, "_blank");

//       // Clear form after sending
//       setFormData({ name: "", email: "", service: "", message: "" });

//       // Show success message
//       alert("Redirecting to WhatsApp! Your message has been prepared.");
//     } else {
//       alert("Please fill in the required fields (Name and Email).");
//     }
//   };

//   // Intersection Observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
//             // Trigger counter animations for stats section
//             if (entry.target.id === "about" && !hasAnimated.stats) {
//               setHasAnimated((prev) => ({ ...prev, stats: true }));
//             }
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
//     );

//     const sections = document.querySelectorAll("section");
//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, [hasAnimated.stats]);

//   const services = [
//     {
//       icon: <Factory className="w-12 h-12 text-orange-500 mb-4" />,
//       title: "High-Purity Ramming Mass Supply",
//       description:
//         "Premium ramming mass with customized blends available for specific furnace requirements and applications.",
//       subsections: [
//         {
//           title: "Product Range",
//           content: [
//             "HiDef SILRAM 98.5 - Main lining for induction furnaces",
//             "HiDef LRM - Specialized ladle ramming mass",
//             "HiDef Nali Top - Nali & top capping silica mix",
//             "Custom silica blends for specific applications",
//           ],
//         },
//         {
//           title: "Quality Standards",
//           content: [
//             "High-purity materials sourced from premium suppliers",
//             "Consistent particle size distribution",
//             "Optimized chemical composition for maximum performance",
//             "Rigorous quality testing at every production stage",
//           ],
//         },
//         {
//           title: "Customization Options",
//           content: [
//             "Furnace capacity-specific formulations",
//             "Temperature range optimizations",
//             "Custom packaging and delivery schedules",
//             "Specialized blends for unique steel grades",
//           ],
//         },
//       ],
//     },
//     {
//       icon: <Settings className="w-12 h-12 text-orange-500 mb-4" />,
//       title: "On-Site Engineer Assistance",
//       description:
//         "Hands-on engineers assist with lining setup, furnace start-up, and performance optimization.",
//       subsections: [
//         {
//           title: "Installation Support",
//           content: [
//             "Expert guidance on proper ramming mass application",
//             "Lining thickness optimization based on furnace design",
//             "Quality checks during installation process",
//             "Training for your technical team",
//           ],
//         },
//         {
//           title: "Start-up Assistance",
//           content: [
//             "Controlled heating and curing procedures",
//             "Performance monitoring during first melts",
//             "Optimization of operating parameters",
//             "Troubleshooting initial operational issues",
//           ],
//         },
//         {
//           title: "Performance Optimization",
//           content: [
//             "Regular performance assessments",
//             "Recommendations for improved efficiency",
//             "Maintenance scheduling and planning",
//             "Cost-benefit analysis and reporting",
//           ],
//         },
//       ],
//     },
//     {
//       icon: <Wrench className="w-12 h-12 text-orange-500 mb-4" />,
//       title: "Customized Material Recommendations",
//       description:
//         "Expert recommendations based on furnace type, tonnage, and specific operational requirements.",
//       subsections: [
//         {
//           title: "Furnace Analysis",
//           content: [
//             "Detailed assessment of furnace specifications",
//             "Operating temperature and cycle analysis",
//             "Steel grade and production requirements evaluation",
//             "Environmental and safety considerations",
//           ],
//         },
//         {
//           title: "Material Selection",
//           content: [
//             "Optimal ramming mass grade selection",
//             "Backup and emergency material planning",
//             "Cost-effective material combinations",
//             "Inventory management recommendations",
//           ],
//         },
//         {
//           title: "Performance Predictions",
//           content: [
//             "Expected lining life calculations",
//             "Thermal efficiency improvements",
//             "Maintenance interval planning",
//             "ROI analysis and cost projections",
//           ],
//         },
//       ],
//     },
//     {
//       icon: <Headphones className="w-12 h-12 text-orange-500 mb-4" />,
//       title: "Technical Guidance",
//       description:
//         "Comprehensive technical support for application methods, maintenance, and troubleshooting.",
//       subsections: [
//         {
//           title: "Application Methods",
//           content: [
//             "Pneumatic ramming techniques",
//             "Manual application best practices",
//             "Moisture content optimization",
//             "Compaction and finishing procedures",
//           ],
//         },
//         {
//           title: "Maintenance Protocols",
//           content: [
//             "Regular inspection schedules",
//             "Preventive maintenance procedures",
//             "Repair and patching techniques",
//             "Performance monitoring methods",
//           ],
//         },
//         {
//           title: "Troubleshooting Support",
//           content: [
//             "Common issue identification and solutions",
//             "Emergency repair procedures",
//             "Performance degradation analysis",
//             "24/7 technical helpline support",
//           ],
//         },
//       ],
//     },
//     {
//       icon: <BarChart3 className="w-12 h-12 text-orange-500 mb-4" />,
//       title: "Post-Sale Support",
//       description:
//         "Performance monitoring and ongoing support to ensure optimal furnace operation (available on request).",
//       subsections: [
//         {
//           title: "Performance Monitoring",
//           content: [
//             "Regular performance evaluations",
//             "Lining life tracking and analysis",
//             "Efficiency optimization recommendations",
//             "Comparative performance reporting",
//             "Product performance guarantees",
//             "Replacement support for defective materials",
//             "Service agreements and maintenance contracts",
//             "Long-term partnership programs",
//           ],
//         },
//         {
//           title: "Ongoing Support",
//           content: [
//             "Periodic site visits by technical experts",
//             "Remote consultation and guidance",
//             "Training programs for operational staff",
//             "Technical documentation and resources",
//           ],
//         },
//         {
//           title: "Warranty & Service",
//           content: [
//             "Product performance guarantees",
//             "Replacement support for defective materials",
//             "Service agreements and maintenance contracts",
//             "Long-term partnership programs",
//           ],
//         },
//       ],
//     },
//     {
//       icon: <TrendingUp className="w-12 h-12 text-orange-500 mb-4" />,
//       title: "Quality Assurance",
//       description:
//         "Consistent product quality backed by rigorous testing and quality control processes.",
//       subsections: [
//         {
//           title: "Testing Procedures",
//           content: [
//             "Chemical composition analysis",
//             "Physical property testing",
//             "Thermal performance evaluation",
//             "Batch-to-batch consistency checks",
//           ],
//         },
//         {
//           title: "Quality Control",
//           content: [
//             "Raw material inspection and certification",
//             "In-process quality monitoring",
//             "Final product testing and approval",
//             "Packaging and storage quality standards",
//           ],
//         },
//         {
//           title: "Certifications",
//           content: [
//             "ISO quality management systems",
//             "Industry standard compliance",
//             "Third-party testing and validation",
//             "Continuous improvement processes",
//           ],
//         },
//       ],
//     },
//   ];

//   const products = [
//     {
//       title: "HiDef – SILRAM 98.5",
//       subtitle: "High Quality Premixed Boron Oxide Silica Ramming Mass",
//       description: "Main lining for Induction Furnaces",
//       features: [
//         "Superior thermal resistance",
//         "Longer lining life",
//         "Optimized for steel melting",
//       ],
//       hsnCode: "38160000",
//     },
//     {
//       title: "HiDef – LRM",
//       subtitle: "High Quality Premixed Boric Acid Silica Ramming Mass",
//       description: "Ladle Ramming Mass for steel melting processes",
//       features: [
//         "Excellent slag resistance",
//         "Smooth pouring",
//         "Low expansion",
//       ],
//       hsnCode: "38160000",
//     },
//     {
//       title: "HiDef – Nali Top",
//       subtitle: "Nali & Top Capping Silica Mix",
//       description: "For Nali and top capping in induction furnace lining",
//       features: [
//         "Maximum sealing strength",
//         "Top-end durability",
//         "Optimized for furnace capping",
//       ],
//       hsnCode: "38160000",
//     },
//     {
//       title: "Customized Silica Mixes",
//       subtitle: "Specialized Industrial Minerals",
//       description: "Tailored solutions for specific furnace requirements",
//       features: [
//         "Custom blend formulations",
//         "Furnace-specific optimization",
//         "Technical consultation included",
//       ],
//       hsnCode: "38160000",
//     },
//   ];

//   const stats = [
//     { number: 10, label: "Employees", suffix: "" },
//     { number: 100, label: "Projects", suffix: "+" },
//     { number: 15, label: "Years Experience", suffix: "+" },
//     { number: 50, label: "Happy Clients", suffix: "+" },
//   ];

//   const processSteps = [
//     {
//       step: 1,
//       title: "Initial Consultation",
//       description: "We analyze your furnace specifications, operating parameters, and specific requirements.",
//       icon: <Phone className="w-8 h-8" />
//     },
//     {
//       step: 2,
//       title: "Custom Formulation",
//       description: "Our experts develop tailored ramming mass blends optimized for your operations.",
//       icon: <Settings className="w-8 h-8" />
//     },
//     {
//       step: 3,
//       title: "Quality Production",
//       description: "Manufacturing with strict quality controls and rigorous testing procedures.",
//       icon: <Factory className="w-8 h-8" />
//     },
//     {
//       step: 4,
//       title: "On-site Support",
//       description: "Professional engineers assist with installation, startup, and optimization.",
//       icon: <Wrench className="w-8 h-8" />
//     },
//     {
//       step: 5,
//       title: "Ongoing Partnership",
//       description: "Continuous monitoring, support, and maintenance for optimal performance.",
//       icon: <TrendingUp className="w-8 h-8" />
//     }
//   ];

//   // Animated Counter Hook
//   const useCountUp = (end, duration = 2000, start = 0) => {
//     const [count, setCount] = useState(start);
//     const [shouldStart, setShouldStart] = useState(false);

//     useEffect(() => {
//       if (!shouldStart) return;

//       let startTime;
//       const animate = (timestamp) => {
//         if (!startTime) startTime = timestamp;
//         const progress = Math.min((timestamp - startTime) / duration, 1);

//         const easeOutCubic = 1 - Math.pow(1 - progress, 3);
//         setCount(Math.floor(start + (end - start) * easeOutCubic));

//         if (progress < 1) {
//           requestAnimationFrame(animate);
//         }
//       };

//       requestAnimationFrame(animate);
//     }, [shouldStart, end, start, duration]);

//     return [count, setShouldStart];
//   };

//   const navigationItems = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "services", label: "Services" },
//     { id: "process", label: "Process" },
//     { id: "products", label: "Products" },
//     // { id: "testimonials", label: "Testimonials" },
//     // { id: "faq", label: "FAQ" },
//     { id: "contact", label: "Contact" },
//   ];

//   // Counter Components
//   const AnimatedCounter = ({ end, suffix = "", hasStarted }) => {
//     const [count, setShouldStart] = useCountUp(end);

//     useEffect(() => {
//       if (hasStarted) {
//         setShouldStart(true);
//       }
//     }, [hasStarted, setShouldStart]);

//     return <span>{count}{suffix}</span>;
//   };

//   return (
//     <div
//       className="min-h-screen text-gray-200"
//       style={{ backgroundColor: "#001f3f" }}
//     >
//       {/* Header */}
//       <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-700">
//         <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex justify-between items-center">
//             {/* Logo Section */}
//             <div className="flex items-center space-x-4">
//               <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-2 rounded-lg shadow-md">
//                 <Factory className="w-12 h-12 text-orange-500" />
//               </div>
//               <div className="flex flex-col">
//                 <h1 className="text-xl font-bold text-white-900 tracking-tight">
//                   H
//                   <span className="relative">
//                     <span className="text-white-900">ı</span>
//                     <span className="absolute -top-0.4 left-1/2 -translate-x-1/2 w-full h-0.5 bg-orange-500 rounded"></span>
//                   </span>
//                   Def Industries
//                 </h1>
//                 <p className="text-xs text-gray-400">
//                   Refractory Solutions
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* ... rest of your header content ... */}
//           <div className="hidden md:flex space-x-8">
//             {navigationItems.map((item) => (
//               <a
//                 key={item.id}
//                 href={`#${item.id}`}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`text-lg font-medium transition-colors duration-300 relative group ${
//                   activeSection === item.id
//                     ? "text-orange-500"
//                     : "text-gray-300 hover:text-orange-400"
//                 }`}
//               >
//                 {item.label}
//                 <span
//                   className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
//                     activeSection === item.id ? "scale-x-100" : ""
//                   }`}
//                 ></span>
//               </a>
//             ))}
//           </div>
//           <div className="md:hidden flex items-center">
//             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//               {isMobileMenuOpen ? (
//                 <X className="w-8 h-8 text-white" />
//               ) : (
//                 <Menu className="w-8 h-8 text-white" />
//               )}
//             </button>
//           </div>
//         </nav>
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-black/90 py-4 px-4 border-t border-gray-700">
//             <div className="flex flex-col space-y-3">
//               {navigationItems.map((item) => (
//                 <a
//                   key={item.id}
//                   href={`#${item.id}`}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`block px-3 py-2 text-lg font-medium rounded-md ${
//                     activeSection === item.id
//                       ? "bg-orange-600 text-white"
//                       : "text-gray-300 hover:bg-gray-800 hover:text-white"
//                   }`}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </header>

//       <main className="pt-20">
//         {/* Hero Section */}
//         <section
//           id="home"
//           className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
//           style={{ backgroundImage: "url('/placeholder-bg.jpg')" }}
//         >
//           {/* You might want a different background image for a steel industry site */}
//           <div className="absolute inset-0 bg-black/70"></div>
//           <div
//             className={`relative z-10 p-8 rounded-lg ${
//               isVisible.home ? "animate-slideInUp" : "opacity-0"
//             }`}
//           >
//             <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
//               Forge the Future with HiDef Industries
//             </h2>
//             <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//               Your trusted partner for high-purity ramming mass and industrial
//               mineral solutions, empowering India's steel industry.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
//               >
//                 Request a Quote
//               </button>
//               <button
//                 onClick={() => scrollToSection("products")}
//                 className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl"
//               >
//                 Explore Products
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-20 bg-gray-900">
//           <div className="max-w-6xl mx-auto px-4 text-center">
//             <h2 className="text-4xl font-bold mb-4 text-white relative">
//               About Us
//               <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 mt-2"></span>
//             </h2>
//             <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
//               HiDef Industries is a leading manufacturer and supplier of
//               premium ramming mass and industrial minerals for the steel
//               industry. With a commitment to quality and innovation, we provide
//               solutions that enhance furnace performance and extend lining life.
//             </p>

//             <div className="grid md:grid-cols-2 gap-12 items-center text-left">
//               <div
//                 className={`p-6 rounded-lg shadow-xl border border-gray-700 transition-all duration-700 ${
//                   isVisible.about ? "animate-fadeInLeft" : "opacity-0"
//                 }`}
//               >
//                 <h3 className="text-2xl font-semibold text-orange-500 mb-4">
//                   Our Mission
//                 </h3>
//                 <p className="text-gray-300 mb-4 leading-relaxed">
//                   To empower steel manufacturers with cutting-edge refractory
//                   solutions that drive efficiency, reduce costs, and ensure
//                   superior metallurgical outcomes. We are dedicated to
//                   innovation, sustainability, and unparalleled customer service.
//                 </p>
//                 <p className="text-gray-300 leading-relaxed">
//                   We aim to be the most reliable and forward-thinking partner in
//                   the refractory industry, contributing to the growth and
//                   advancement of the steel sector in India and beyond.
//                 </p>
//               </div>

//               <div
//                 className={`p-6 rounded-lg shadow-xl border border-gray-700 transition-all duration-700 delay-100 ${
//                   isVisible.about ? "animate-fadeInRight" : "opacity-0"
//                 }`}
//               >
//                 <h3 className="text-2xl font-semibold text-orange-500 mb-4">
//                   Why Choose Us?
//                 </h3>
//                 <ul className="space-y-3 text-gray-300">
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                     <span>
//                       **Unmatched Quality:** Our ramming mass products are
//                       engineered for superior performance and durability.
//                     </span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                     <span>
//                       **Expert Support:** Dedicated on-site and technical
//                       assistance for optimal application and results.
//                     </span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                     <span>
//                       **Custom Solutions:** Tailored product formulations to meet
//                       your unique furnace specifications.
//                     </span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                     <span>
//                       **Proven Reliability:** Trusted by leading steel
//                       manufacturers across India.
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Stats Section */}
//             <div
//               className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 ${
//                 isVisible.about ? "opacity-100" : "opacity-0"
//               } transition-opacity duration-1000`}
//             >
//               {stats.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="bg-black/50 p-6 rounded-lg border border-gray-700 text-center shadow-lg transform hover:scale-105 transition-transform duration-300"
//                 >
//                   <div className="text-5xl font-bold text-orange-500 mb-2">
//                     <AnimatedCounter
//                       end={stat.number}
//                       suffix={stat.suffix}
//                       hasStarted={hasAnimated.stats}
//                     />
//                   </div>
//                   <p className="text-gray-300 text-lg font-semibold">
//                     {stat.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="py-20 bg-black/30">
//           <div className="max-w-6xl mx-auto px-4 text-center">
//             <h2 className="text-4xl font-bold mb-4 text-white relative">
//               Our Services
//               <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 mt-2"></span>
//             </h2>
//             <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
//               We offer a comprehensive suite of services designed to ensure your
//               steel production runs smoothly and efficiently, leveraging our
//               expertise in refractory solutions.
//             </p>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className={`bg-black/60 p-6 rounded-xl border border-gray-700 shadow-lg cursor-pointer hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 ${
//                     isVisible.services ? "animate-zoomIn" : "opacity-0"
//                   }`}
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                   onClick={() =>
//                     setExpandedService(expandedService === index ? null : index)
//                   }
//                 >
//                   <div className="flex flex-col items-center">
//                     {service.icon}
//                     <h3 className="text-xl font-semibold text-white mb-3">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-300 text-center mb-4">
//                       {service.description}
//                     </p>
//                     {expandedService === index ? (
//                       <ChevronUp className="w-6 h-6 text-orange-500" />
//                     ) : (
//                       <ChevronDown className="w-6 h-6 text-orange-500" />
//                     )}
//                   </div>
//                   {expandedService === index && (
//                     <div className="mt-4 text-left animate-fadeIn">
//                       {service.subsections.map((sub, subIndex) => (
//                         <div key={subIndex} className="mb-4">
//                           <h4 className="font-semibold text-orange-400 mb-2">
//                             {sub.title}
//                           </h4>
//                           <ul className="list-disc list-inside text-gray-400 space-y-1">
//                             {sub.content.map((item, itemIndex) => (
//                               <li key={itemIndex}>{item}</li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Process Section */}
//         <section id="process" className="py-20 bg-gray-900">
//           <div className="max-w-6xl mx-auto px-4 text-center">
//             <h2 className="text-4xl font-bold mb-4 text-white relative">
//               Our Streamlined Process
//               <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 mt-2"></span>
//             </h2>
//             <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
//               We follow a meticulously designed process to ensure seamless
//               delivery of our products and services, from initial consultation
//               to ongoing support.
//             </p>
//             <div className="relative flex flex-col items-center">
//               <div className="absolute top-1/2 -translate-y-1/2 hidden md:block w-full h-1 bg-gray-700 z-0"></div>
//               <div className="grid md:grid-cols-5 gap-8 w-full">
//                 {processSteps.map((step, index) => (
//                   <div
//                     key={index}
//                     className={`relative z-10 flex flex-col items-center text-center p-6 rounded-lg bg-black/60 border border-gray-700 shadow-xl transition-all duration-700 ${
//                       isVisible.process ? "animate-zoomIn" : "opacity-0"
//                     }`}
//                     style={{ animationDelay: `${index * 0.15}s` }}
//                   >
//                     <div className="w-16 h-16 flex items-center justify-center bg-orange-500 rounded-full text-white text-3xl font-bold mb-4 border-4 border-gray-800 shadow-lg">
//                       {step.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-white mb-2">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-300">{step.description}</p>
//                     {index < processSteps.length - 1 && (
//                       <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
//                         <ArrowRight className="w-8 h-8 text-gray-500" />
//                       </div>
//                     )}
//                     {index < processSteps.length - 1 && (
//                       <div className="absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 block md:hidden">
//                         <ChevronDown className="w-8 h-8 text-gray-500" />
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Products Section */}
//         <section id="products" className="py-20 bg-black/30">
//           <div className="max-w-6xl mx-auto px-4 text-center">
//             <h2 className="text-4xl font-bold mb-4 text-white relative">
//               Our Premium Products
//               <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 mt-2"></span>
//             </h2>
//             <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
//               We offer a range of high-quality ramming mass products, each
//               designed to meet the stringent demands of modern steel production.
//             </p>

//             <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
//               {products.map((product, index) => (
//                 <div
//                   key={index}
//                   className={`bg-black/60 p-8 rounded-xl border border-gray-700 shadow-lg text-left transform hover:scale-105 transition-transform duration-300 ${
//                     isVisible.products ? "animate-fadeIn" : "opacity-0"
//                   }`}
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <h3 className="text-2xl font-bold text-orange-500 mb-2">
//                     {product.title}
//                   </h3>
//                   <p className="text-lg text-gray-300 mb-4 italic">
//                     {product.subtitle}
//                   </p>
//                   <p className="text-gray-400 mb-4">
//                     {product.description}
//                   </p>
//                   <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
//                     {product.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center">
//                         <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="mt-auto">
//                     <p className="text-sm text-gray-500">
//                       HSN Code: {product.hsnCode}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center mt-12">
//               <div className="bg-black/50 p-6 rounded-xl border border-gray-700 inline-block">
//                 <h3 className="text-xl font-semibold mb-2 text-orange-500">
//                   Need a Custom Blend?
//                 </h3>
//                 <p className="text-gray-300 mb-4">
//                   We can develop specialized ramming mass solutions tailored to
//                   your unique requirements.
//                 </p>
//                 <button
//                   onClick={() => scrollToSection("contact")}
//                   className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
//                 >
//                   Inquire Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials and FAQ Section (from TestimonialsFAQ.jsx) */}
//         {/*
//           This is where you will render the imported TestimonialsFAQ component.
//           You can also give it an id if you want to link to it directly in your
//           navigation, like this: <section id="testimonials-faq">
//         */}
//         <TestimonialsFAQ />


//         {/* Contact Section */}
//         <section id="contact" className="py-20 bg-gray-900">
//           <div className="max-w-4xl mx-auto px-4 text-center">
//             <h2 className="text-4xl font-bold mb-4 text-white relative">
//               Contact Us
//               <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 mt-2"></span>
//             </h2>
//             <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
//               We're here to assist you with your refractory needs. Reach out to
//               us for product inquiries, technical support, or custom solutions.
//             </p>

//             <div className="bg-black/50 p-8 rounded-xl border border-gray-700 shadow-xl grid md:grid-cols-2 gap-8">
//               {/* Contact Information */}
//               <div className="space-y-6 text-left">
//                 <h3 className="text-2xl font-semibold text-orange-500 mb-4">
//                   Get in Touch
//                 </h3>
//                 <div className="flex items-center text-gray-300">
//                   <MapPin className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0" />
//                   <span>
//                     F-27, RIICO Growth Centre, Hamirgarh, Bhilwara, Rajasthan
//                     311025
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray-300">
//                   <Phone className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0" />
//                   <a
//                     href="tel:+917073964398"
//                     className="hover:text-orange-400 transition-colors duration-200"
//                   >
//                     +91 96027 63297
//                   </a>
//                 </div>
//                 <div className="flex items-center text-gray-300">
//                   <Mail className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0" />
//                   <a
//                     href="mailto:hidefindia@gmail.com"
//                     className="hover:text-orange-400 transition-colors duration-200"
//                   >
//                     hidefindia@gmail.com
//                   </a>
//                 </div>
//                 <div className="flex items-center text-gray-300">
//                   <Clock className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0" />
//                   <span>Mon - Sat: 9:00 AM - 6:00 PM (IST)</span>
//                 </div>
//               </div>

//               {/* Contact Form */}
//               <div className="text-left">
//                 <h3 className="text-2xl font-semibold text-orange-500 mb-4">
//                   Send Us a Message
//                 </h3>
//                 <form className="space-y-4">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block text-gray-300 text-sm font-bold mb-2"
//                     >
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 outline-none"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-gray-300 text-sm font-bold mb-2"
//                     >
//                       Your Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 outline-none"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="service"
//                       className="block text-gray-300 text-sm font-bold mb-2"
//                     >
//                       Service of Interest (Optional)
//                     </label>
//                     <select
//                       id="service"
//                       name="service"
//                       value={formData.service}
//                       onChange={handleInputChange}
//                       className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 outline-none"
//                     >
//                       <option value="">Select a service</option>
//                       {services.map((service, index) => (
//                         <option key={index} value={service.title}>
//                           {service.title}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-gray-300 text-sm font-bold mb-2"
//                     >
//                       Your Message (Optional)
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows="4"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 outline-none"
//                     ></textarea>
//                   </div>
//                   <button
//                     type="button"
//                     onClick={handleSubmit}
//                     className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
//                   >
//                     Send Message via WhatsApp
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-black/90 py-10 border-t border-gray-700">
//         <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
//           <div className="flex items-center justify-center space-x-4 mb-4">
//             <Factory className="w-10 h-10 text-orange-500" />
//             <h3 className="text-2xl font-bold text-white">HiDef Industries</h3>
//           </div>
//           <p className="mb-4 max-w-xl mx-auto">
//             Innovating refractory solutions for a stronger steel industry.
//             Committed to quality, performance, and customer satisfaction.
//           </p>
//           <div className="flex justify-center space-x-6 mb-6">
//             {navigationItems.map((item) => (
//               <a
//                 key={item.id}
//                 href={`#${item.id}`}
//                 onClick={() => scrollToSection(item.id)}
//                 className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//           <div className="border-t border-gray-700 pt-6 mt-6">
//             <p>&copy; {new Date().getFullYear()} HiDef Industries. All rights reserved.</p>
//             <p className="text-sm mt-2">
//               Designed and Developed by HiDef Industries
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* Custom Styles and Animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes zoomIn {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-out forwards;
//         }

//         .animate-slideInUp {
//           animation: slideInUp 1s ease-out forwards;
//         }

//         .animate-fadeInLeft {
//           animation: fadeInLeft 0.8s ease-out forwards;
//         }

//         .animate-fadeInRight {
//           animation: fadeInRight 0.8s ease-out forwards;
//         }

//         .animate-zoomIn {
//           animation: zoomIn 0.6s ease-out forwards;
//         }

//         /* Specific styles for testimonials and FAQ, now handled by TestimonialsFAQ component */
//       `}</style>
//     </div>
//   );
// };

// export default HiDefIndustries;