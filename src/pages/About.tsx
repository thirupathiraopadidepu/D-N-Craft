import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const offices = [
  { city: "Bengaluru", address: "123 MG Road, Bengaluru, Karnataka 560001" },
  {
    city: "Hyderabad",
    address: "456 Jubilee Hills, Hyderabad, Telangana 500033",
  },
  { city: "Mumbai", address: "789 Andheri East, Mumbai, Maharashtra 400059" },
  { city: "Delhi", address: "101 Connaught Place, New Delhi, Delhi 110001" },
  { city: "Chennai", address: "202 T Nagar, Chennai, Tamil Nadu 600017" },
  { city: "Kolkata", address: "303 Salt Lake, Kolkata, West Bengal 700091" },
];

const milestones = [
  { year: "150000 SFT", event: "GREENKO GROUP - KURNOOL" },
  { year: "120000 SFT", event: "GREENKO GROUP - HYDERABAD" },
  { year: "35000 SFT", event: "TMEiC - HYDERABAD" },
  { year: "26000 SFT", event: "WE-DO-IT SERVICES - HYDERABAD" },
  { year: "26000 SFT", event: "NSL - HYDERABAD" },
  { year: "25000 SFT", event: "AXISCADES - HYDERABAD" },
  { year: "20000 SFT", event: "MESLOVA - HYDERABAD" },
  { year: "20000 SFT", event: "MESLOVA PHASE II - HYDERABAD" },
  { year: "20000 SFT", event: "BHAGIRADHA CHEMICALS - HYDERABAD" },
  { year: "18000 SFT", event: "EMMERSON - HYDERABAD" },
  { year: "18000 SFT", event: "SYNTIZEN - HYDERABAD" },
  { year: "15000 SFT", event: "BBG DEVELOPERS - HYDERABAD" },
  { year: "15000 SFT", event: "VALUE CREED - HYDERABAD" },
  { year: "14000 SFT", event: "WOLONG INDIA - HYDERABAD" },
  { year: "14000 SFT", event: "TELEPERFORMANCE - HYDERABAD" },
  { year: "12000 SFT", event: "EUREKA OUTSOURCING - HYDERABAD" },
  { year: "12000 SFT", event: "DATAVAIL - HYDERABAD" },
  { year: "12000 SFT", event: "BDO INDIA - HYDERABAD" },
  { year: "11000 SFT", event: "TCD TECHNOLOGIES - HYDERABAD" },
  { year: "9000 SFT", event: "TRAVEL TRIPPER - HYDERABAD" },
  { year: "7500 SFT", event: "SYREN TECHNOLOGIES - HYDERABAD" },
  { year: "7500 SFT", event: "3S IIPL - HYDERABAD" },
  { year: "7500 SFT", event: "WOODLANE - HYDERABAD" },
  { year: "7000 SFT", event: "ASSET TELEMATICS - HYDERABAD" },
  { year: "6000 SFT", event: "REPUTATION - HYDERABAD" },
  { year: "5500 SFT", event: "RUKY PROJECTS - HYDERABAD" },
  { year: "5000 SFT", event: "NICHBIT SOFTECH - HYDERABAD" },
  { year: "5000 SFT", event: "AHESHWARA MEDICAL COLLEGE - HYDERABAD" },
  { year: "5000 SFT", event: "INFOANE TECHNOLOGIES - HYDERABAD" },
  { year: "4500 SFT", event: "WALKINTREE - HYDERABAD" },
  { year: "4000 SFT", event: "G4S - HYDERABAD" },
  { year: "4000 SFT", event: "HENCE DATA - HYDERABAD" },
];

const aboutImages = [
  {
    src: "/about/about1.jpg",
    alt: "Interior Design Concept",
    context:
      "From conceptualization to execution, we put our heart and soul into every interior design project.",
  },
  {
    src: "/about/about2.jpg",
    alt: "Interior Design Project",
    context:
      "Our interior design projects are a reflection of our commitment to quality, innovation, and customer satisfaction.",
  },
  {
    src: "/about/about3.jpg",
    alt: "Interior Design Solution",
    context:
      "At D&N CRAFT, we provide comprehensive interior design solutions that cater to the specific needs of our clients.",
  },
];

export default function About() {
  const [aboutIndex, setAboutIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAboutIndex((prevIndex) =>
        prevIndex === aboutImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prevAboutSlide = () => {
    setAboutIndex((prevIndex) =>
      prevIndex === 0 ? aboutImages.length - 1 : prevIndex - 1
    );
  };

  const nextAboutSlide = () => {
    setAboutIndex((prevIndex) =>
      prevIndex === aboutImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="pt-16 bg-white">
      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-navy-900 mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl">
            D&N CRAFT has come a long way since 2016, growing into a company
            with a mission to be ranked as the best Interiors and Retrofit firm
            in India. And that's not all, thanks to our satisfied clientele,
            they have chosen to work with us repeatedly. We've also gained
            experience by delivering world-class quality, in a cost-effective
            and safe, yet timely manner. Keeping our client's needs in mind, we
            work adhering to their global EHS requirements. All of which has
            motivated us towards being a premier interior fit-out company that
            promises high standards of excellence in interior execution.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-96 overflow-hidden transform skew-x-12"
        >
          <img
            src="/about/about.jpeg"
            alt="About"
            className="w-full h-full object-cover transform -skew-x-12"
          />
        </motion.div>
      </div>

      {/* Vision & Values Section */}
      <div className="bg-white py-16 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[600px] overflow-hidden transform skew-x-12"
          >
            <img
              src="/about/vmabout1.png"
              alt="About"
              className="w-[600px] h-[600px] object-cover transform -skew-x-12"
            />
          </motion.div>

          {/* Mission, Vision & Values Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-navy-900">Our Vision</h2>
            <p className="text-gray-700">
              To become a globally preferred company in the corporate world for
              providing cost-effective turnkey interior fit-out solutions with
              quality, commitment, time-specified delivery, safety, security,
              and long-term client relations.
            </p>

            <h2 className="text-3xl font-bold text-navy-900">Our Mission</h2>
            <p className="text-gray-700">
              To provide customer delight by offering highly professional
              service, maintaining high levels of discipline, ethics, and
              remaining committed to customers and their needs.
            </p>

            <h2 className="text-3xl font-bold text-navy-900">Our Values</h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Row 1: Values 1 & 2 */}
              <div>
                <p className="text-orange-400 font-semibold">QUALITY</p>
                <p className="text-gray-700">
                  We use only the best materials and partnerships.
                </p>
              </div>
              <div>
                <p className="text-orange-400 font-semibold">INTEGRITY</p>
                <p className="text-gray-700">
                  We stick to our commitments at all times.
                </p>
              </div>
              {/* Row 2: Values 3 & 4 */}
              <div>
                <p className="text-orange-400 font-semibold">LEADERSHIP</p>
                <p className="text-gray-700">
                  We innovate to build for a better future.
                </p>
              </div>
              <div>
                <p className="text-orange-400 font-semibold">PASSION</p>
                <p className="text-gray-700">
                  We create workplaces with heart.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Images Fullscreen Carousel Section */}
      <div className="py-16">
        <div className="w-full h-[600px] relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full overflow-hidden"
          >
            <img
              src={aboutImages[aboutIndex].src}
              alt={aboutImages[aboutIndex].alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-white p-4 rounded-lg">
            <p className="text-2xl font-bold">
              {aboutImages[aboutIndex].context}
            </p>
          </div>
          <button
            onClick={prevAboutSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextAboutSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
      <div className="relative bg-[#EDF7ED] pb-16">
        {/* Zigzag Peaks - Adjusted to Match the Image */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="block w-full h-[180px]" // Increased height for better peak visibility
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,150 L100,90 L250,120 L350,50 L500,140 L650,60 L800,130 L950,40 L1100,150 L1200,20 V0 H0 Z"
              fill="white" // Background color
              stroke="white"
              strokeWidth="3"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 pt-24">
          <h1 className="text-3xl font-bold text-navy-900 mb-8 text-center">
            Our Milestones
          </h1>
          <div className="space-y-4 px-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.01 }}
                className="flex items-center space-x-4"
              >
                <div className="text-lg font-semibold text-gray-800">
                  {milestone.year}
                </div>
                <div className="h-px flex-1 bg-gray-300"></div>
                <div className="text-gray-600">{milestone.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
