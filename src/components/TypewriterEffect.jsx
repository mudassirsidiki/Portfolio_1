import { useState, useEffect } from "react";

const TypewriterEffect = () => {
  const text = "🟣 Currently working at Mazik Global";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (prev.length === text.length) return ""; // Reset when complete
        return text.slice(0, prev.length + 1);
      });
    }, 150); // Typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bottom-4 bg-[#1a1d21] p-2 rounded border border-gray-700 flex items-center md:ml-40 md:w-[400px]">
      <p className="text-[18px] md:text-[21px] font-serif">{displayedText || "\u00A0"}</p> {/* Keeps height intact */}
    </div>
  );
};

export default TypewriterEffect;

