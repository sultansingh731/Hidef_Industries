// data.jsx

// You don't need all these imports here unless you're actually using them directly within this file to define the icons.
// For data files, it's generally cleaner to only import what's directly used.
// If you are rendering the icons directly in the data array, then you do need to import them.
import {
  Factory,
  Settings,
  Wrench,
  Headphones,
  BarChart3,
  TrendingUp,
  Phone, // Added Phone for processSteps icon
  CheckCircle, // Added CheckCircle for products features icon (example, if you want to use it)
} from "lucide-react";

export const services = [
  {
    icon: <Factory className="w-12 h-12 text-orange-500 mb-4" />,
    title: "High-Purity Ramming Mass Supply",
    description:
      "Premium ramming mass with customized blends available for specific furnace requirements and applications.",
    subsections: [
      {
        title: "Product Range",
        content: [
          "HiDef SILRAM 98.5 - Main lining for induction furnaces",
          "HiDef LRM - Specialized ladle ramming mass",
          "HiDef Nali Top - Nali & top capping silica mix",
          "Custom silica blends for specific applications",
        ],
      },
      {
        title: "Quality Standards",
        content: [
          "High-purity materials sourced from premium suppliers",
          "Consistent particle size distribution",
          "Optimized chemical composition for maximum performance",
          "Rigorous quality testing at every production stage",
        ],
      },
      {
        title: "Customization Options",
        content: [
          "Furnace capacity-specific formulations",
          "Temperature range optimizations",
          "Custom packaging and delivery schedules",
          "Specialized blends for unique steel grades",
        ],
      },
    ],
  },
  {
    icon: <Settings className="w-12 h-12 text-orange-500 mb-4" />,
    title: "On-Site Engineer Assistance",
    description:
      "Hands-on engineers assist with lining setup, furnace start-up, and performance optimization.",
    subsections: [
      {
        title: "Installation Support",
        content: [
          "Expert guidance on proper ramming mass application",
          "Lining thickness optimization based on furnace design",
          "Quality checks during installation process",
          "Training for your technical team",
        ],
      },
      {
        title: "Start-up Assistance",
        content: [
          "Controlled heating and curing procedures",
          "Performance monitoring during first melts",
          "Optimization of operating parameters",
          "Troubleshooting initial operational issues",
        ],
      },
      {
        title: "Performance Optimization",
        content: [
          "Regular performance assessments",
          "Recommendations for improved efficiency",
          "Maintenance scheduling and planning",
          "Cost-benefit analysis and reporting",
        ],
      },
    ],
  },
  {
    icon: <Wrench className="w-12 h-12 text-orange-500 mb-4" />,
    title: "Customized Material Recommendations",
    description:
      "Expert recommendations based on furnace type, tonnage, and specific operational requirements.",
    subsections: [
      {
        title: "Furnace Analysis",
        content: [
          "Detailed assessment of furnace specifications",
          "Operating temperature and cycle analysis",
          "Steel grade and production requirements evaluation",
          "Environmental and safety considerations",
        ],
      },
      {
        title: "Material Selection",
        content: [
          "Optimal ramming mass grade selection",
          "Backup and emergency material planning",
          "Cost-effective material combinations",
          "Inventory management recommendations",
        ],
      },
      {
        title: "Performance Predictions",
        content: [
          "Expected lining life calculations",
          "Thermal efficiency improvements",
          "Maintenance interval planning",
          "ROI analysis and cost projections",
        ],
      },
    ],
  },
  {
    icon: <Headphones className="w-12 h-12 text-orange-500 mb-4" />,
    title: "Technical Guidance",
    description:
      "Comprehensive technical support for application methods, maintenance, and troubleshooting.",
    subsections: [
      {
        title: "Application Methods",
        content: [
          "Pneumatic ramming techniques",
          "Manual application best practices",
          "Moisture content optimization",
          "Compaction and finishing procedures",
        ],
      },
      {
        title: "Maintenance Protocols",
        content: [
          "Regular inspection schedules",
          "Preventive maintenance procedures",
          "Repair and patching techniques",
          "Performance monitoring methods",
        ],
      },
      {
        title: "Troubleshooting Support",
        content: [
          "Common issue identification and solutions",
          "Emergency repair procedures",
          "Performance degradation analysis",
          "24/7 technical helpline support",
        ],
      },
    ],
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-orange-500 mb-4" />,
    title: "Post-Sale Support",
    description:
      "Performance monitoring and ongoing support to ensure optimal furnace operation (available on request).",
    subsections: [
      {
        title: "Performance Monitoring",
        content: [
          "Regular performance evaluations",
          "Lining life tracking and analysis",
          "Efficiency optimization recommendations",
          "Comparative performance reporting",
          "Product performance guarantees",
          "Replacement support for defective materials",
          "Service agreements and maintenance contracts",
          "Long-term partnership programs",
        ],
      },
      {
        title: "Ongoing Support",
        content: [
          "Periodic site visits by technical experts",
          "Remote consultation and guidance",
          "Training programs for operational staff",
          "Technical documentation and resources",
        ],
      },
      {
        title: "Warranty & Service",
        content: [
          "Product performance guarantees",
          "Replacement support for defective materials",
          "Service agreements and maintenance contracts",
          "Long-term partnership programs",
        ],
      },
    ],
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-orange-500 mb-4" />,
    title: "Quality Assurance",
    description:
      "Consistent product quality backed by rigorous testing and quality control processes.",
    subsections: [
      {
        title: "Testing Procedures",
        content: [
          "Chemical composition analysis",
          "Physical property testing",
          "Thermal performance evaluation",
          "Batch-to-batch consistency checks",
        ],
      },
      {
        title: "Quality Control",
        content: [
          "Raw material inspection and certification",
          "In-process quality monitoring",
          "Final product testing and approval",
          "Packaging and storage quality standards",
        ],
      },
      {
        title: "Certifications",
        content: [
          "ISO quality management systems",
          "Industry standard compliance",
          "Third-party testing and validation",
          "Continuous improvement processes",
        ],
      },
    ],
  },
];

export const products = [
  {
    title: "HiDef – SILRAM 98.5",
    subtitle: "High Quality Premixed Boron Oxide Silica Ramming Mass",
    description: "Main lining for Induction Furnaces",
    features: [
      "Superior thermal resistance",
      "Longer lining life",
      "Optimized for steel melting",
    ],
    hsnCode: "38160000",
  },
  {
    title: "HiDef – LRM",
    subtitle: "High Quality Premixed Boric Acid Silica Ramming Mass",
    description: "Ladle Ramming Mass for steel melting processes",
    features: [
      "Excellent slag resistance",
      "Smooth pouring",
      "Low expansion",
    ],
    hsnCode: "38160000",
  },
  {
    title: "HiDef – Nali Top",
    subtitle: "Nali & Top Capping Silica Mix",
    description: "For Nali and top capping in induction furnace lining",
    features: [
      "Maximum sealing strength",
      "Top-end durability",
      "Optimized for furnace capping",
    ],
    hsnCode: "38160000",
  },
  {
    title: "Customized Silica Mixes",
    subtitle: "Specialized Industrial Minerals",
    description: "Tailored solutions for specific furnace requirements",
    features: [
      "Custom blend formulations",
      "Furnace-specific optimization",
      "Technical consultation included",
    ],
    hsnCode: "38160000",
  },
];

export const stats = [
  { number: 10, label: "Employees", suffix: "" },
  { number: 100, label: "Projects", suffix: "+" },
  { number: 15, label: "Years Experience", suffix: "+" },
  { number: 50, label: "Happy Clients", suffix: "+" },
];

export const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "We analyze your furnace specifications, operating parameters, and specific requirements.",
    icon: <Phone className="w-8 h-8" />,
  },
  {
    step: 2,
    title: "Custom Formulation",
    description:
      "Our experts develop tailored ramming mass blends optimized for your operations.",
    icon: <Settings className="w-8 h-8" />,
  },
  {
    step: 3,
    title: "Quality Production",
    description:
      "Manufacturing with strict quality controls and rigorous testing procedures.",
    icon: <Factory className="w-8 h-8" />,
  },
  {
    step: 4,
    title: "On-site Support",
    description:
      "Professional engineers assist with installation, startup, and optimization.",
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    step: 5,
    title: "Ongoing Partnership",
    description:
      "Continuous monitoring, support, and maintenance for optimal performance.",
    icon: <TrendingUp className="w-8 h-8" />,
  },
];