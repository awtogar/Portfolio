import React, { useState, useEffect } from 'react';
import { RiArrowRightUpLine } from '@remixicon/react';
import PrimaryButton from '../components/ui/CreativeButton/index';

const ContactPage = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '.' : prev + '.'));
    }, 800);

    return () => clearInterval(dotsInterval);
  }, []);

  return (
    <section className="z-10 section-padding-xy h-screen flex items-center justify-center">
      <div className="w-full m-auto">
        <div className="flex flex-col max-w-2xl justify-center items-center text-center mx-auto">
          <div>
            <h1 className="text-5xl md:text-7xl font-light text-black mb-6 leading-tight">
              Under
              <br />
              <span className="font-normal">Development</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed">Working in progress please be patient. thank you for visiting {dots}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <PrimaryButton
                to="/"
                background1="transparent"
                background2="bg-primary"
                outline2="outline-none"
                outline1="outline outline-1 outline-primary"
                textcolor1="text-primary"
                textcolor2="text-secondary"
              >
                <span className="flex items-center">
                  Back to Home <RiArrowRightUpLine />
                </span>
              </PrimaryButton>
            </div>

            {/* Minimalist progress indicator */}
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
