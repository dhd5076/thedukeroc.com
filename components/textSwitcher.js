import React, { useState, useEffect } from 'react';

const words = ['Wedding', 'Concert', 'Conference', 'Reception', 'Event'];

export default function TextFader() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="md:w-1/3 p-8 mt-16 h-auto mx-auto bg-black/90">
      <p className={`text-left text-5xl font-semibold mb-4 fade-in-out-${currentWordIndex}`}>
        Rochester's
        <br/><span className="mx-[0ch] text-blue-500">{' ' + words[currentWordIndex] + ' '}</span>
         <br/>Venue.
      </p>
      <p className="text-lg text-left">Experience the heart and soul of Rochester's music scene at The Duke, where the rhythm of the city comes alive. Nestled in the heart of this vibrant community, our music venue is more than just a stage—it's a haven for music lovers, a sanctuary for artists, and a place where unforgettable moments are born. With its historic charm and modern flair, The Duke is where melodies mingle with memories, and every night becomes a symphony of sights and sounds. Join us on this sonic journey and let the music move you like never before. Welcome to The Duke, where the beats are boundless, and the music is magic.</p>
      <span className="flex justify-end mt-4">
        <button className=" text-lg font-semibold bg-white p-4 mr-4 block mt-6 text-black"> Book An Event</button>
        <button className=" text-lg font-semibold bg-blue-500 p-4 block mt-6 text-white"> Learn More</button>
      </span>
    </div>
  );
}
