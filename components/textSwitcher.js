import React, { useState, useEffect } from 'react';

const words = ['Wedding', 'Concert', 'Conference', 'Reception', 'Hybrid Event'];

export default function TextFader() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="lg:text-8xl text-4xl h-full font-black">
      <p className={`text-left ml-8 lg:ml-16 font-punk fade-in-out-${currentWordIndex}`}>
        Your
        <span className="mx-[0ch] text-amber-500">{' ' + words[currentWordIndex] + ' '}</span>
         <br/>Venue
      </p>
    </div>
  );
}
