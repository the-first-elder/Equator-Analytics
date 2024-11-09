// src/components/Splash.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure you have react-router-dom installed and set up
import logo from '../assets/logo.svg';

const Splash = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); 
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);

    const timeout = setTimeout(() => {
      navigate('/dashboard');
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="bg-[#771011] w-full lg:w-1/2 mx-auto h-screen flex flex-col justify-center items-center p-8">
      <img src={logo} alt="Logo" className="w-1/2 mb-4 m-auto" />
      <div className="w-[90%] mx-auto bg-[#a84244] h-2 rounded mt-auto">
        <div
          className="bg-[#ECE6D3] h-2 rounded"
          style={{ width: `${progress}%`, transition: 'width 0.1s' }}
        />
      </div>
      <p className='mt-2 text-center text-[#ECE6D3]'>Loading.....</p>
    </div>
  );
};

export default Splash;
