import Hero from '@/components/Hero';
import Navbar from '@/components/Nav';
import MockupSection from '@/components/MockupSection'; // Impor MockupSection
import React from 'react';
import Conten from '@/components/Conten';
import Footer from '@/components/Footer';
import Card from '@/components/Card';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MockupSection />
      <Conten />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
