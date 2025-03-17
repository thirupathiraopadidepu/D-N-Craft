import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-#f8f4f4 text-#01334c">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img
              src="/logo.png"
              alt="D&N Craft"
              className="h-12 md:h-16 w-auto max-w-[150px] md:max-w-[200px]"
            />
            <p className="text-#01334c text-300">
              Transforming spaces into extraordinary experiences.
            </p>
          </div>

          <div>
            <h4 className="text-#01334c font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-#01334c hover:text-300 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-#01334c hover:text-300 hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-#01334c hover:text-300 hover:text-white transition "
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-#01334c hover:text-300 hover:text-white transition"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-#063970 font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li className="text-#063970-300">Interior Design</li>
              <li className="text-#01334c-300">Architectural Design</li>
              <li className="text-#01334c-300">MEP Development</li>
              <li className="text--300">Project Planning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-#01334c-300 hover:text-white transition"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/dncr.aft?igsh=MTZuZGNieGU0bmk0cw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-#01334c-300 hover:text-white transition"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/company/d-n-craft/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-#01334c-300 hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:info@dncraft.com"
                className="text-#01334c-300 hover:text-white transition"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-#01334c-300 text-sm">
              © {currentYear} D&N Craft. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
