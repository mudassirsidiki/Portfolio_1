import React from 'react';

function Rectangles({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute w-24 h-12 border border-[#b49cff]/40 rotate-12"></div>
      <div className="absolute w-20 h-16 border border-[#b49cff]/40 -rotate-6 translate-x-12 translate-y-8"></div>
      <div className="absolute w-16 h-20 border border-[#b49cff]/40 rotate-45 translate-x-4 translate-y-4"></div>
    </div>
  );
}

export default Rectangles;