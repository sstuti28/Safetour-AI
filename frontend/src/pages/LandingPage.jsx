import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import Statistics from '../components/landing/Statistics';
import CTA from '../components/landing/CTA';

const LandingPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Features />
      <HowItWorks />
      <Statistics />
      <CTA />
    </div>
  );
};

export default LandingPage;