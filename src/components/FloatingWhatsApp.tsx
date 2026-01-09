import React from "react";

type Props = {
  phone?: string; // international format, no + or spaces, e.g. 233501234567
  message?: string;
};

const FloatingWhatsApp: React.FC<Props> = ({ phone = "YOUR_PHONE_NUMBER", message = "Hi, I would like to know more about your products." }) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center text-white transform transition-transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 animate-bounce">
            <path fill="currentColor" d="M20.52 3.48A11.9 11.9 0 0 0 12.02.5 11.96 11.96 0 0 0 .5 12.02c0 2.11.55 4.07 1.6 5.82L.5 23.5l5.9-1.57A11.94 11.94 0 0 0 12.02 24c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.2-3.48-8.54zM12.02 21.5c-1.8 0-3.53-.48-5.06-1.39l-.36-.21-3.5.93.94-3.39-.23-.39A9.5 9.5 0 1 1 21.5 12.02 9.46 9.46 0 0 1 12.02 21.5z" />
            <path fill="white" d="M17.6 14.2c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.78.96-.95 1.15-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.6.13-.12.3-.33.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.68-.51l-.58-.01c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.48 1.08 2.88 1.23 3.08c.15.2 2.13 3.25 5.16 4.55 3.03 1.3 3.03.87 3.57.82.54-.05 1.75-.72 2-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35z" />
          </svg>
          <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] opacity-20 animate-ping" />
        </div>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
