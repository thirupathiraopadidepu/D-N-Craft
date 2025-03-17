import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingContactIcons = () => {
  const phoneNumber = "+919911844299"; // Replace with your number
  const whatsappNumber = "+919911844299"; // Replace with your WhatsApp number

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      {/* WhatsApp Icon */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white shadow-lg rounded-full p-2"
      >
        <FaWhatsapp className="text-green-500 text-2xl" />
      </a>

      {/* Call Icon */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-white shadow-lg rounded-full p-2"
      >
        <FaPhoneAlt className="text-purple-700 text-2xl" />
      </a>
    </div>
  );
};

export default FloatingContactIcons;
