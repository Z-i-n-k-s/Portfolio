import React, { useState } from "react";

const AnimatedTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex justify-center mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-2 font-semibold ${
              activeTab === index ? "bg-blue-500 text-white" : "bg-gray-300"
            } rounded transition-all duration-300`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div
        className="p-4 bg-gray-100 rounded transition-all duration-500 ease-in-out"
        key={activeTab}
      >
        <ul>
          {tabs[activeTab].skills.map((skill, idx) => (
            <li key={idx} className="mb-2">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnimatedTabs;
