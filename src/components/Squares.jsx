import React from 'react';

function Squares({ className = '', variant = 'default' }) {
  if (variant === 'dotted') {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute w-24 h-24">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#b49cff]/60 rounded-full"
              style={{
                left: `${(i % 4) * 8}px`,
                top: `${Math.floor(i / 4) * 8}px`
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="absolute w-16 h-16 border border-[#b49cff]/60"></div>
      <div className="absolute w-16 h-16 border border-[#b49cff]/60 translate-x-8 translate-y-8"></div>
      <div className="absolute w-16 h-16 border border-[#b49cff]/60 translate-x-4 translate-y-4"></div>
    </div>
  );
}

export default Squares;