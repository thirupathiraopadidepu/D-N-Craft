import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Meslova Systems Private Limited",
    images: ["meslova1.jpg", "meslova2.jpg", "meslova3.jpg", "meslova4.png"],
    description:
      "A leading software solutions provider specializing in AI and automation.",
    year: "2024",
  },
  {
    title: "VALUE CREED",
    images: [
      "VALUE CREED1.png",
      "VALUE CREED2.png",
      "VALUE CREED3.png",
      "VALUE CREED4.png",
    ],
    description:
      "Empowering businesses with innovative consulting and technology solutions.",
    year: "2023",
  },
  {
    title: "ASSET TELEMATICS",
    images: [
      "ASSET TELEMATICS1.jpg",
      "ASSET TELEMATICS2.jpg",
      "ASSET TELEMATICS3.jpg",
      "ASSET TELEMATICS4.jpg",
    ],
    description:
      "Pioneering smart tracking solutions for logistics and fleet management.",
    year: "2022",
  },
  {
    title: "ASSET TELEMATICS",
    images: [
      "ASSET TELEMATICS1.jpg",
      "ASSET TELEMATICS2.jpg",
      "ASSET TELEMATICS3.jpg",
      "ASSET TELEMATICS4.jpg",
    ],
    description:
      "Pioneering smart tracking solutions for logistics and fleet management.",
    year: "2022",
  },
];

// Sample client logos (Replace with real ones)
const clientLogos = [
  "public/client logos/CLIENT1.jpg",
  "public/client logos/CLIENT2.png",
  "public/client logos/CLIENT3.jpg",
  "public/client logos/CLIENT4.png",
  "public/client logos/CLIENT5.png",
  "public/client logos/CLIENT6.jpg",
  "public/client logos/CLIENT7.png",
  "public/client logos/CLIENT8.png",
];

export default function Projects() {
  return (
    <div className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-navy-900 mb-4">
            Our Projects
          </h1>
          <p className="text-white-600 max-w-2xl mx-auto mb-8">
            Explore our latest projects showcasing innovation and excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Client Logos Section */}
      <div className="py-12 mt-12">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Designed for Success
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-16"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-16 object-contain mb-10"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.images[currentIndex]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <button
          onClick={prevSlide}
          className="bg-gray-700/60 p-2 rounded-full text-white"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <button
          onClick={nextSlide}
          className="bg-gray-700/60 p-2 rounded-full text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy-900 mb-2">
          {project.title}
        </h3>
        <span className="text-sm text-gray-500 mb-3 block">{project.year}</span>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </motion.div>
  );
}
