import { motion } from "framer-motion";
import {
  Paintbrush,
  Building2,
  Lightbulb,
  CheckCircle,
  PaintRoller,
  Layers,
  HardHat,
  Ruler,
  Plug,
  Snowflake,
  Camera,
  Home,
  ShieldCheck,
  Sofa,
  Grid,
  Key,
  CircleDot,
  FlaskConical,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Paintbrush className="w-16 h-16 text-yellow-500" />,
      title: "Interior Design",
      description:
        "Transform your space into a stunning, functional environment with our expert interior design services. We bring your vision to life with precision and creativity.",
      features: [
        "Custom design solutions",
        "Space planning",
        "Theme consultation",
        "Material selection",
      ],
      image: "/srvicesimages/Interior.jpg",
    },
    {
      icon: <Building2 className="w-16 h-16 text-blue-500" />,
      title: "Planning & Execution",
      description:
        "Comprehensive architectural design services that seamlessly blend aesthetics and practicality, ensuring an efficient execution process.",
      features: [
        "Concept development",
        "3D visualization",
        "Technical drawings",
        "Project coordination",
      ],
      image: "/srvicesimages/planning.jpg",
    },
    {
      icon: <Lightbulb className="w-16 h-16 text-green-500" />,
      title: "MEP Development",
      description:
        "Our expertise in MEP coordination ensures seamless integration with architectural and interior design elements for optimized performance.",
      features: [
        "Seamless Integration",
        "Energy Efficiency & Sustainability",
        "Compliance & Safety",
        "Optimized Performance",
      ],
      image: "/srvicesimages/mep.jpg",
    },
  ];

  const additionalServices = [
    {
      icon: <HardHat className="w-12 h-12 text-orange-500" />,
      title: "Civil Works",
    },
    {
      icon: <PaintRoller className="w-12 h-12 text-orange-500" />,
      title: "Painting Works",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-orange-500" />,
      title: "Building Management Systems",
    },
    {
      icon: <Plug className="w-12 h-12 text-orange-500" />,
      title: "Electrical",
    },
    {
      icon: <Layers className="w-12 h-12 text-orange-500" />,
      title: "Joinery Works - Partitions",
    },
    {
      icon: <Home className="w-12 h-12 text-orange-500" />,
      title: "Kitchen Works",
    },
    {
      icon: <Ruler className="w-12 h-12 text-orange-500" />,
      title: "Fabrication Works",
    },
    {
      icon: <Sofa className="w-12 h-12 text-orange-500" />,
      title: "Seating Systems",
    },
    { icon: <Grid className="w-12 h-12 text-orange-500" />, title: "Ceiling" },
    {
      icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
      title: "Fire Detection & Suppression",
    },
    {
      icon: <Snowflake className="w-12 h-12 text-orange-500" />,
      title: "Soft Furnishings",
    },
    {
      icon: <Key className="w-12 h-12 text-orange-500" />,
      title: "Access Control Systems",
    },
    {
      icon: <CircleDot className="w-12 h-12 text-orange-500" />,
      title: "Flooring Systems",
    },
    { icon: <Camera className="w-12 h-12 text-orange-500" />, title: "CCTV" },
    {
      icon: <FlaskConical className="w-12 h-12 text-orange-500" />,
      title: "Labs",
    },
  ];

  return (
    <div className="py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-16 mt-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900"
        >
          Our Services
        </motion.h1>
        <p className="text-lg text-gray-600 mt-4">
          High-quality, professional design and development services to bring
          your vision to life.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto space-y-32 px-6 sm:px-12 lg:px-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center md:items-start space-y-12 md:space-y-0 md:space-x-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image with Shape */}
            <div className="relative w-full md:w-1/2 mb-20 md:mb-0">
              <div className="absolute inset-0 bg-blue-100 rounded-2xl transform -rotate-6 scale-110" />
              <img
                src={service.image}
                alt={service.title}
                className="relative w-full rounded-2xl shadow-lg object-cover h-72"
              />
            </div>

            {/* Description */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                {service.icon}
                <span className="ml-6">{service.title}</span>
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="list-disc ml-6 space-y-3 text-gray-700">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Range of Services */}
      <div className="mt-32 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Range of Services</h2>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {additionalServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center space-y-6">
              <div className="p-5 bg-gray-100 rounded-full shadow-md">
                {service.icon}
              </div>
              <p className="text-gray-700 font-medium">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
