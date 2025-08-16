import React, { useState, useEffect } from "react";
import TestimonialsFAQ from "./testimonials";
import {
  Mail,
  Phone,
  MapPin,
  Building,
  Wrench,
  Headphones,
  Settings,
  BarChart3,
  TrendingUp,
  Factory,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Star,
  Quote,
  CheckCircle,
  ArrowRight,
  Clock,
  MessageCircle,
} from "lucide-react";
import { services, products, stats, processSteps } from "./Data"; // Adjust path as needed
const HiDefIndustries = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const [hasAnimated, setHasAnimated] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showChatbot, setShowChatbot] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  // const parallaxRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  // Form handler
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      // Format the message for WhatsApp
      const whatsappMessage = `Hello HiDef Industries!

*New Service Inquiry*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Service Required:* ${formData.service || "Not specified"}

*Message:*
${formData.message || "No additional message provided"}

---
Sent from HiDef Industries Website`;

      // WhatsApp number (without + symbol)
      const whatsappNumber = "917073964398";

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      // Clear form after sending
      setFormData({ name: "", email: "", service: "", message: "" });

      // Show success message
      alert("Redirecting to WhatsApp! Your message has been prepared.");
    } else {
      alert("Please fill in the required fields (Name and Email).");
    }
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            // Trigger counter animations for stats section
            if (entry.target.id === "about" && !hasAnimated.stats) {
              setHasAnimated((prev) => ({ ...prev, stats: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [hasAnimated.stats]);

  // Animated Counter Hook
  const useCountUp = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const [shouldStart, setShouldStart] = useState(false);

    useEffect(() => {
      if (!shouldStart) return;

      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(start + (end - start) * easeOutCubic));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [shouldStart, end, start, duration]);

    return [count, setShouldStart];
  };

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "products", label: "Products" },
    // { id: "testimonials", label: "Testimonials" },
    // { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  // Counter Components
  const AnimatedCounter = ({ end, suffix = "", hasStarted }) => {
    const [count, setShouldStart] = useCountUp(end);

    useEffect(() => {
      if (hasStarted) {
        setShouldStart(true);
      }
    }, [hasStarted, setShouldStart]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <div
      className="min-h-screen text-white-200"
      style={{ backgroundColor: "#001f3f" }}
    >
      <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center transform hover:scale-110"
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </button>
        )}
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="w-12 h-12 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center transform hover:scale-110"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>
      {/* Enhanced Chatbot */}
      {showChatbot && (
        <div className="fixed right-6 bottom-24 z-40 w-80 bg-black/90 backdrop-blur-md rounded-lg shadow-2xl border border-gray-700">
          <div className="p-4 border-b border-white-700 flex justify-between items-center">
            <h3 className="text-white font-semibold">Quick Help</h3>
            <button onClick={() => setShowChatbot(false)}>
              <X className="w-5 h-5 text-white-400 hover:text-white" />
            </button>
          </div>
          <div className="p-4 space-y-3">
            <button
              onClick={() => scrollToSection("products")}
              className="w-full text-left p-3 bg-white hover:bg-gray-700 rounded-lg transition-colors text-sm"
            >
              View Our Products
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full text-left p-3 bg-white hover:bg-gray-700 rounded-lg transition-colors text-sm"
            >
              Get a Quote
            </button>
            <button
              onClick={() => window.open("tel:+917073964398")}
              className="w-full text-left p-3 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors text-sm"
            >
              Call Now: +91 7073964398
            </button>
          </div>
        </div>
      )}
      {/* Header */}
      <header
        className="fixed top-0 w-full bg-black/90 z-50"
        style={{
          background:
            "var(--search-input_background, linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%))",
        }}
      >
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-white-900 to-blue-700 p-2 rounded-lg shadow-md">
                <img
                  src="/hifeflogo.jpeg"
                  alt="HiDef Industries Logo"
                  className="w-10 h-10 rounded-e-xl"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-white-900 tracking-tight">
                  H
                  <span className="relative">
                    <span className="text-white-900">ı</span>
                    <span className="absolute top-0.5 left-[60%] -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></span>
                    {""}
                  </span>
                  Def Industries
                </h1>
                <p className="text-xs text-gray-400">Refractory Solutions</p>
              </div>
            </div>
          </div>
          {/* ... rest of your header content ... */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg font-medium transition-colors duration-300 relative group ${
                  activeSection === item.id
                    ? "text-white-500"
                    : "text-white-300 hover:text-orange-400"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    activeSection === item.id ? "scale-x-100" : ""
                  }`}
                ></span>
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-8 h-8 text-black" />
              ) : (
                <Menu className="w-8 h-8 text-black" />
              )}
            </button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 py-4 px-4 border-t border-gray-700">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-lg font-medium rounded-md ${
                    activeSection === item.id
                      ? "bg-orange-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="home"
          className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://wallpapers.com/images/featured/mining-background-fhudc9kf01icybea.jpg)",
            }}
          ></div>

          <div
            className={`relative z-10 p-8 rounded-lg max-w-5xl mx-auto ${
              isVisible.home ? "animate-slideInUp" : "opacity-0"
            }`}
          >
            <h2 className="text-[2rem] md:text-5xl font-extrabold text-black/60 leading-tight mb-4 drop-shadow-lg">
              Forge the Future with HiDef Industries
            </h2>
            <p className="text-lg md:text-xl text-black-300 mb-8 max-w-3xl mx-auto">
              Your trusted partner for high-purity ramming mass and industrial
              mineral solutions.
              {/* empowering India's steel industry. */}
            </p>

            {/* Founder’s Note */}
            <div className="bg-white/90 border-l-4 border-orange-500 text-left p-6 rounded-lg shadow-lg mb-8">
              <p className="text-gray-700 leading-relaxed">
                From my early days in 1994 as a mechanical engineer on the plant
                floor to creating HiDef, the journey has been defined by one
                belief —{" "}
                <span className="italic">
                  endurance is the true measure of excellence in the refractory
                  industry.
                </span>
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                HiDef is not just a brand, it’s the definition of endurance.
              </p>
              {/* Founder Name */}
              <div className="mt-6 text-right">
                <p className="text-sm font-bold text-orange-600">
                  Hanuman Sahay Yadav
                </p>
                <p className="text-sm text-gray-500 italic">Founder</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Request a Quote
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Explore Products
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 bg-white-900"
          style={{
            background:
              "var(--search-input_background, linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%))",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-black relative">
              About Us
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 mt-2"></span>
            </h2>
            <p className="text-black-300 mb-12 max-w-3xl mx-auto">
              HiDef Industries is a leading manufacturer and supplier of premium
              ramming mass and industrial minerals for the steel industry. With
              a commitment to quality and innovation, we provide solutions that
              enhance furnace performance and extend lining life.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center text-left">
              <div
                className={`p-6 rounded-lg shadow-xl border border-black-700 transition-all duration-700 ${
                  isVisible.about ? "animate-fadeInLeft" : "opacity-0"
                }`}
              >
                <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                  Our Mission
                </h3>
                <p className="text-black-300 mb-4 leading-relaxed">
                  To empower steel manufacturers with cutting-edge refractory
                  solutions that drive efficiency, reduce costs, and ensure
                  superior metallurgical outcomes. We are dedicated to
                  innovation, sustainability, and unparalleled customer service.
                </p>
                <p className="text-black-300 leading-relaxed">
                  We aim to be the most reliable and forward-thinking partner in
                  the refractory industry, contributing to the growth and
                  advancement of the steel sector in India and beyond.
                </p>
              </div>

              <div
                className={`p-6 rounded-lg shadow-xl border border-gray-700 transition-all duration-700 delay-100 ${
                  isVisible.about ? "animate-fadeInRight" : "opacity-0"
                }`}
              >
                <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 text-black-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <b>Unmatched Quality: </b> Our ramming mass products are
                      engineered for superior performance and durability.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <b>Expert Support:</b>Expert Support:** Dedicated on-site
                      and technical assistance for optimal application and
                      results.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <b>Custom Solutions:</b>
                      Tailored product formulations to meet your unique furnace
                      specifications.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <b>Proven Reliability:</b>
                      Trusted by leading steel manufacturers across India.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats Section */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 ${
                isVisible.about ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000`}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-blue-300/60 p-6 rounded-lg border border-gray-700 text-center shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-5xl font-bold text-orange-500 mb-2">
                    <AnimatedCounter
                      end={stat.number}
                      suffix={stat.suffix}
                      hasStarted={hasAnimated.stats}
                    />
                  </div>
                  <p className="text-black-300 text-lg font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 bg-white-900"
          style={{
            background:
              "var(--search-input_background, linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%))",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-black relative">
              Our Services
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 mt-2"></span>
            </h2>
            <p className="text-black-300 mb-12 max-w-3xl mx-auto">
              We offer a comprehensive suite of services designed to ensure your
              steel production runs smoothly and efficiently, leveraging our
              expertise in refractory solutions.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-blue-300/60 p-6 rounded-xl border border-gray-700 shadow-lg cursor-pointer hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 ${
                    isVisible.services ? "animate-zoomIn" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() =>
                    setExpandedService(expandedService === index ? null : index)
                  }
                >
                  <div className="flex flex-col items-center">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-black-300 text-center mb-4">
                      {service.description}
                    </p>
                    {expandedService === index ? (
                      <ChevronUp className="w-6 h-6 text-orange-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-orange-500" />
                    )}
                  </div>
                  {expandedService === index && (
                    <div className="mt-4 text-left animate-fadeIn">
                      {service.subsections.map((sub, subIndex) => (
                        <div key={subIndex} className="mb-4">
                          <h4 className="font-semibold text-orange-400 mb-2">
                            {sub.title}
                          </h4>
                          <ul className="list-disc list-inside text-white-400 space-y-1">
                            {sub.content.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          id="process"
          className="py-20 bg-white-900"
          style={{
            background:
              "var(--search-input_background, linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%))",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-black relative">
              Our Streamlined Process
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 mt-2"></span>
            </h2>
            <p className="text-black-300 mb-12 max-w-3xl mx-auto">
              We follow a meticulously designed process to ensure seamless
              delivery of our products and services, from initial consultation
              to ongoing support.
            </p>
            <div className="relative flex flex-col items-center">
              <div className="absolute top-1/2 -translate-y-1/2 hidden md:block w-full h-1 bg-white-700 z-0"></div>
              <div className="grid md:grid-cols-5 gap-8 w-full">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative z-10 flex flex-col items-center text-center p-6 rounded-lg bg-blue/60 border border-gray-700 shadow-xl transition-all duration-700 ${
                      isVisible.process ? "animate-zoomIn" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-orange-500 rounded-full text-white text-3xl font-bold mb-4 border-4 border-gray-800 shadow-lg">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {step.title}
                    </h3>
                    <p className="text-black-300">{step.description}</p>
                    {index < processSteps.length - 1 && (
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                        <ArrowRight className="w-8 h-8 text-black-500" />
                      </div>
                    )}
                    {index < processSteps.length - 1 && (
                      <div className="absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 block md:hidden">
                        <ChevronDown className="w-8 h-8 text-black-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section
          id="products"
          className="py-20 bg-white-900"
          style={{
            background:
              "var(--search-input_background, linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%))",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-black relative">
              Our Premium Products
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 mt-2"></span>
            </h2>
            <p className="text-black-300 mb-12 max-w-3xl mx-auto">
              We offer a range of high-quality ramming mass products, each
              designed to meet the stringent demands of modern steel production.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`bg-blue-300/60 p-8 rounded-xl border border-gray-700 shadow-lg text-left transform hover:scale-105 transition-transform duration-300 ${
                    isVisible.products ? "animate-fadeIn" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-lg text-black-300 mb-4 italic">
                    {product.subtitle}
                  </p>
                  <p className="text-black-400 mb-4">{product.description}</p>
                  <ul className="list-disc list-inside text-black-300 space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <p className="text-sm text-black-500">
                      HSN Code: {product.hsnCode}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-white/50 p-6 rounded-xl border border-gray-700 inline-block">
                <h3 className="text-xl font-semibold mb-2 text-orange-500">
                  Need a Custom Blend?
                </h3>
                <p className="text-black-300 mb-4">
                  We can develop specialized ramming mass solutions tailored to
                  your unique requirements.
                </p>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials and FAQ Section (from TestimonialsFAQ.jsx) */}
        {/*
          This is where you will render the imported TestimonialsFAQ component.
          You can also give it an id if you want to link to it directly in your
          navigation, like this: <section id="testimonials-faq">
        */}

        <TestimonialsFAQ />

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-white-900"
          style={{
            background:
              "var(--search-input_background, linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%))",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-black relative">
              Contact Us
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 mt-2"></span>
            </h2>
            <p className="text-black-300 mb-12 max-w-2xl mx-auto">
              We're here to assist you with your refractory needs. Reach out to
              us for product inquiries, technical support, or custom solutions.
            </p>

            <div className="bg-black p-8 rounded-xl border border-gray-700 shadow-xl grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                  Get in Touch
                </h3>
                <div className="flex items-center text-white-300">
                  <MapPin className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0" />
                  <span className="text-white">
                    Jatawali industrial area , jaipur
                  </span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0" />
                  <a
                    href="tel:+917073964398"
                    className="hover:text-orange-400 transition-colors duration-200"
                  >
                    +91 7073964398, 9887026404
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0" />
                  <a
                    href="mailto:hidefindia@gmail.com"
                    className="hover:text-orange-400 transition-colors duration-200"
                  >
                    hidefindustries25@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM (IST)</span>
                </div>
              </div>

              {/* Contact Form */}
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                  Send Us a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 text-sm font-bold mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 text-sm font-bold mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-gray-300 text-sm font-bold mb-2"
                    >
                      Service of Interest (Optional)
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 outline-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-300 text-sm font-bold mb-2"
                    >
                      Your Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
                  >
                    Send Message via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/90 py-10 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Factory className="w-10 h-10 text-orange-500" />
            <h3 className="text-2xl font-bold text-white">HiDef Industries</h3>
          </div>
          <p className="mb-4 max-w-xl mx-auto">
            Innovating refractory solutions for a stronger steel industry.
            Committed to quality, performance, and customer satisfaction.
          </p>
          <div className="border-t border-gray-700 pt-6 mt-6">
            <p>
              &copy; {new Date().getFullYear()} HiDef Industries. All rights
              reserved.
            </p>
            <p className="text-sm mt-2">
              Designed and Developed by HiDef Industries
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles and Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 1s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 0.6s ease-out forwards;
        }

        /* Specific styles for testimonials and FAQ, now handled by TestimonialsFAQ component */
      `}</style>
    </div>
  );
};

export default HiDefIndustries;
