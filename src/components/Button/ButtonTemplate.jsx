import React from "react";

const ButtonTemplate = () => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-4">
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
          View All Projects
        </button>
        <button className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default ButtonTemplate;
