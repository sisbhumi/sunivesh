import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { button } from "framer-motion/client";
import "./Styles/Popup.css"
function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowPopup(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showPopup && (
      <motion.div 
        className="fixed bottom-10 right-10 bg-white shadow-lg p-4 border"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <p>Open your D-mat Account now!</p>
        
        <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={button}
        >
            Open Now
      
        </button>
      </motion.div>
    )
  );
}

export default Popup;
