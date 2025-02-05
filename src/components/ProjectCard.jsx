import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCard = ({ title, description, images, tech, liveLink, githubLink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative bg-gray-900/40 backdrop-blur-lg border border-white/10 text-white p-4 rounded-xl shadow-lg overflow-hidden">
      {/* Image Carousel */}
      <div className="relative w-full h-48 overflow-hidden rounded-lg">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ x: direction * 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 150, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <img
              src={images[currentImageIndex]}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/80"
      >
        <ChevronLeft size={24} color="white" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/80"
      >
        <ChevronRight size={24} color="white" />
      </button>

      {/* Project Info */}
      <h3 className="text-xl font-bold mt-3">{title}</h3>
      <p className="text-sm mt-2">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tech.map((item, index) => (
          <span key={index} className="bg-purple-500/80 text-xs px-2 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex justify-between items-center mt-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View Project →
        </a>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 flex items-center"
        >
          <svg
            className="w-5 h-5 mr-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.3 3.438 9.8 8.207 11.386.6.113.793-.26.793-.577v-2.02c-3.338.724-4.043-1.416-4.043-1.416-.547-1.386-1.336-1.756-1.336-1.756-1.093-.75.083-.735.083-.735 1.207.084 1.843 1.24 1.843 1.24 1.07 1.836 2.807 1.305 3.49.996.108-.776.42-1.305.762-1.605-2.67-.3-5.467-1.338-5.467-5.947 0-1.316.47-2.39 1.24-3.23-.124-.302-.54-1.52.117-3.164 0 0 1.008-.323 3.3 1.23a11.42 11.42 0 0 1 3-.405c1.02.005 2.047.137 3 .405 2.29-1.553 3.3-1.23 3.3-1.23.657 1.645.24 2.862.117 3.164.77.84 1.24 1.914 1.24 3.23 0 4.617-2.8 5.645-5.467 5.94.43.373.813 1.1.813 2.22v3.29c0 .32.19.7.8.577C20.56 22.097 24 17.6 24 12.297 24 5.67 18.627.297 12 .297z"
              clipRule="evenodd"
            />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
