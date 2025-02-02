import React from 'react';

function SkillSection({ skills }) {
  return (
    <section className="py-12 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl mb-8">
          <span className="text-[#b49cff]">#</span>skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg mb-4">{category}</h3>
              <ul className="space-y-2 text-gray-400">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;