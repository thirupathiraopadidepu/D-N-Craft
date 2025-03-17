import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Marquee from "react-fast-marquee";
import "swiper/css";
import "swiper/css/effect-fade";

const images = ["/home4.jpg", "/home1.jpg", "/home2.jpg", "/home3.jpg"];

export default function BuildingAnimation() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="absolute inset-0 w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            {index === 0 ? (
              <motion.img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2 }}
              />
            ) : (
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Marquee Text */}
        <Marquee
          speed={50}
          gradient={false}
          className="text-medium md:text-2xl font-bold mb-14 text-[#fbd8b6] uppercase tracking-wide"
        >
          D&N CRAFT{" "}
          <span className="mx-6 border-l-2 border-white h-full"></span>
          Transforming Spaces{" "}
          <span className="mx-6 border-l-2 border-white h-full"></span>
          Inspired Interiors
        </Marquee>

        {/* Logo */}
        <motion.img
          src="/logomain.png"
          alt="D&N Craft"
          className="mx-auto mb-6 h-32 md:h-40 w-auto md:ml-26"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#fbd8b6]">
          Transforming Spaces
        </h1>

        {/* Subtext */}
        <p className="text-xl mb-12 text-[#fbd8b6] font-bold">
          CREATING EXCEPTIONAL INTERIOR EXPERIENCES THAT INSPIRE AND ELEVATE
        </p>

        {/* Button */}
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#fbd8b6] text-[#2a2a2a] rounded-md font-semibold hover:bg-[#e4c49a] transition"
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
