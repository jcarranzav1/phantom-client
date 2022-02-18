import React from 'react';
import Carousel from '../components/Carousel';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { NavBar } from '../components/NavBar';

export default function Home() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Carousel />
      <Footer />
    </div>
  );
}
