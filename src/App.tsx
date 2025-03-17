import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import LoadingPage from "./pages/LoadingPage";
import ScrollToTop from "./components/ScrollToTop";
import Careers from "./pages/Careers";
import chatbot from "../public/chatbot.png";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function App() {
  const phoneNumber = "+919911844299";
  const whatsappNumber = "+919911844299";
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [hover, setHover] = useState(false);
  const [userInput, setUserInput] = useState("");

  const chatRef = useRef<HTMLDivElement | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const [unlocked, setUnlocked] = useState<boolean>(false);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    let botReply = {
      sender: "bot",
      text: "I'm not sure, but you can contact us! at 📞 +91 9911844299 or 📧 info@dncraft.com",
    };

    const greetings = ["hi", "hello", "hey", "how are you"];
    const contactKeywords = ["contact", "phone", "email", "reach", "address"];
    const serviceKeywords = ["services", "what do you offer", "your work"];

    if (greetings.some((greet) => userInput.toLowerCase().includes(greet))) {
      botReply.text = "Hello! Hope you're having a great day!";
    } else if (
      contactKeywords.some((keyword) =>
        userInput.toLowerCase().includes(keyword)
      )
    ) {
      botReply.text =
        "You can contact us at 📞 +91 9911844299 or 📧 info@dncraft.com";
    } else if (
      serviceKeywords.some((keyword) =>
        userInput.toLowerCase().includes(keyword)
      )
    ) {
      botReply.text = `Below are our services:\n
        1️⃣ Interior Design\n
        2️⃣ MEP Development\n
        3️⃣ Planning & Execution`;
    }

    setMessages([...messages, userMessage, botReply]);
    setUserInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setShowChat(false);
      }
    };

    if (showChat) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showChat]);

  return (
    <Router>
      <div>
        <ScrollToTop />
        {!unlocked ? (
          <LoadingPage setUnlocked={setUnlocked} />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </>
        )}

        {/* Floating Contact Icons */}
        {/* Floating Contact Icons */}
        <div className="fixed bottom-4 right-6 flex flex-col space-y-2 z-50">
          {/* WhatsApp Icon */}
          <div className="relative group">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-full p-2 flex items-center justify-center w-12 h-12"
            >
              <FaWhatsapp className="text-green-500 text-2xl" />
            </a>
            <span className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 rounded-lg shadow-md text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Chat on WhatsApp
            </span>
          </div>

          {/* Call Icon */}
          <div className="relative group">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-white shadow-lg rounded-full p-2 flex items-center justify-center w-12 h-12"
            >
              <FaPhoneAlt className="text-blue-700 text-2xl" />
            </a>
            <span className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 rounded-lg shadow-md text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Call Now
            </span>
          </div>

          {/* Chatbot Icon */}
          <div
            className="relative cursor-pointer bg-white shadow-lg rounded-full p-2 flex items-center justify-center w-12 h-12 group"
            onClick={() => setShowChat(!showChat)}
          >
            <span className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 rounded-lg shadow-md text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Let's Talk
            </span>
            <img src={chatbot} alt="Chatbot" className="w-8 h-8 rounded-full" />
          </div>
        </div>

        {/* Chatbot Popup */}
        {showChat && (
          <div
            ref={chatRef}
            className="fixed bottom-16 right-6 bg-white p-4 rounded-lg shadow-lg w-72 z-50 border border-gray-200"
          >
            {/* Chat Header */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-md font-bold text-gray-900">
                Chat Assistant
              </h3>
              <button
                className="text-gray-600 hover:text-red-500 text-lg font-bold"
                onClick={() => setShowChat(false)}
              >
                &times;
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-64 overflow-y-auto p-2 border border-gray-300 rounded">
              {messages.map((msg, index) => (
                <p
                  key={index}
                  className={`p-2 my-1 rounded ${
                    msg.sender === "user"
                      ? "bg-blue-100 text-right"
                      : "bg-gray-100"
                  }`}
                >
                  {msg.text}
                </p>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input */}
            <div className="mt-2 flex">
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button
                className="ml-2 bg-blue-500 text-white p-2 rounded"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
