import React from 'react';

function Dots({ className = '' }) {
  return (
    <div className={`grid grid-cols-6 gap-2 ${className}`}>
      {[...Array(24)].map((_, i) => (
        <div key={i} className="w-1 h-1 bg-[#b49cff]/60 rounded-full"></div>
      ))}
    </div>
  );
}

export default Dots;