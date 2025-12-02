import React, { useState } from 'react';
import AnimatedSection from './shared/AnimatedSection';
import { founders } from '../data/sampleData';

const Founders: React.FC = () => {
  const [selectedFounder, setSelectedFounder] = useState(0);
  const [selectedMilestone, setSelectedMilestone] = useState(0);


  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            MEET THE <span className="text-red-600">FOUNDERS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Visionary leaders who transformed their passion for gaming into 
            a thriving esports ecosystem that nurtures talent and creates champions.
          </p>
        </AnimatedSection>

        {/* Founder Selection */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-800 rounded-full p-2">
            {founders.map((founder, index) => (
              <button
                key={founder.id}
                onClick={() => setSelectedFounder(index)}
                className="relative px-6 py-3 rounded-full transition-colors duration-300"
              >
                {selectedFounder === index && (
                  <div className="absolute inset-0 bg-red-600 rounded-full" />
                )}
                <span
                  className={`relative z-10 font-semibold ${
                    selectedFounder === index ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {founder.name.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div
            key={selectedFounder}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Founder Profile */}
            <div className="text-center lg:text-left">
            <div className="relative mb-8">
                <img
                  src={founders[selectedFounder].image}
                  alt={founders[selectedFounder].name}
                  className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl object-cover border-4 border-red-600"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-3xl">
                  🏅
                </div>
            </div>

            <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {founders[selectedFounder].name}
                </h3>
                <p className="text-red-600 font-semibold mb-4">
                  {founders[selectedFounder].title}
                </p>
                
                <blockquote className="text-xl text-gray-300 italic mb-6 border-l-4 border-red-600 pl-6">
                  "{founders[selectedFounder].quote}"
                </blockquote>
                
                <p className="text-gray-400 mb-6">
                  {founders[selectedFounder].bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                  {Object.entries(founders[selectedFounder].socials).map(([platform, url]) => {
                    const icon = platform === 'twitter' ? '🐦' : platform === 'linkedin' ? '💼' : platform === 'instagram' ? '📷' : '🔗';
                    if (!url) return null;
                    
                    return (
                    <a
                        key={platform}
                        href={url}
                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-gray-700 transition-colors text-xl"
                      >
                        {icon}
                    </a>
                    );
                  })}
                </div>
            </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h4 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="text-2xl text-red-600 mr-3">📅</span>
                Journey Timeline
              </h4>
              
              <div className="space-y-6">
                {founders[selectedFounder].milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start space-x-4 cursor-pointer group ${
                      selectedMilestone === index ? 'text-white' : 'text-gray-400'
                    }`}
                    onClick={() => setSelectedMilestone(index)}
                  >
                    {/* Timeline dot */}
                    <div className="relative">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          selectedMilestone === index
                            ? 'bg-red-600 border-red-600'
                            : 'bg-gray-700 border-gray-600 group-hover:border-red-600'
                        }`}
                      />
                      {index < founders[selectedFounder].milestones.length - 1 && (
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-700" />
                      )}
                    </div>
                    
                    <div className="flex-1 pb-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`font-bold ${
                          selectedMilestone === index ? 'text-red-600' : 'text-gray-500 group-hover:text-red-600'
                        }`}>
                          {milestone.year}
                        </span>
                        {selectedMilestone === index && (
                          <div className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Active
                          </div>
                        )}
                      </div>
                      <p className={`${
                        selectedMilestone === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                      } transition-colors`}>
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;