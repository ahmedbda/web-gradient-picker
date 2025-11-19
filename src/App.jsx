import { useState } from 'react';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentBackground, setCurrentBackground] = useState("gradient-gray");

const backgroundThemes = {
  red: "gradient-red",
  green: "gradient-green",
  blue: "gradient-blue",
};

  return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${currentBackground}`}>
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center relative">
        <h1 className="text-4xl text-white font-bold text-title mb-4">
          Choose a color
        </h1>
        <p className="text-descriptiontext text-white font-semibold text-xl">
          Click the buttons below
        </p>

        <div className="flex justify-center gap-2 mt-2">
        <button 
          onClick={() => setCurrentBackground(backgroundThemes.red)}
          className="w-8 h-8 rounded-full bg-redbuttonunhovered hover:bg-redbuttonhovered shadow-xl transition-all duration-300 ease-in-out scale-90 hover:scale-110"
          title="Red background"
        >
          <span className="sr-only">Red</span>
        </button>

        <button   
          onClick={() => setCurrentBackground(backgroundThemes.green)}
          className="w-8 h-8 rounded-full bg-greenbuttonunhovered hover:bg-greenbuttonhovered shadow-xl transition-all duration-300 ease-in-out scale-90 hover:scale-110"
          title="Green background"
        >
          <span className="sr-only">Green</span>
        </button>

        <button 
          onClick={() => setCurrentBackground(backgroundThemes.blue)}
          className="w-8 h-8 rounded-full bg-bluebuttonunhovered hover:bg-bluebuttonhovered shadow-xl transition-all duration-300 ease-in-out scale-90 hover:scale-110"
          title="Blue background"
        >
          <span className="sr-only">Blue</span>
        </button>
        </div>
        <div className="relative inline-block">
        <button 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          type="button" 
          className="mt-4 bg-white/5 hover:bg-white/15 backdrop-blur-sm text-buttontext shadow-xl font-bold
          rounded-3xl hover:rounded-xl py-2 px-4 hover:px-5
          transition-all duration-300 ease-in-out relative">
          How does it work?
        </button>

        {isHovered && (
          <div className="absolute z-10 px-3 py-2 text-sm font-medium text-tooltiptext bg-gray-800/90 backdrop-blur-sm rounded-lg top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            Click on the buttons above this one to change the page's background gradient!
            <div className="absolute w-2 h-2 bg-gray-800/90 backdrop-blur-sm transform rotate-45 top-[-4px] left-1/2 -translate-x-1/2"></div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;