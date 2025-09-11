import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppSticky() {
    const phoneNumber = "919096768607";
    const defaultMessage = "Hello, I have a query.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center z-50"
            style={{ width: "60px", height: "60px" }}
            title="Chat on WhatsApp"
        >
            <FaWhatsapp size={28} />
        </a>
    );
}
