
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // ✅ Needed for animation
import Hero3DSection from "../components/common/mainPage/SectionHome"
import WhyChooseFancy from "../components/common/mainPage/ReasonsSection"
import HeroVideoSection from '../components/common/mainPage/HeroSection';
import MeetTheTeam from '../components/common/mainPage/MeetTheTeam';
const BubblesBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    {[...Array(25)].map((_, i) => (
      <div
        key={i}
        className="absolute w-8 h-8 bg-white rounded-full animate-bubble blur-md"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${8 + Math.random() * 5}s`,
          bottom: '-40px',
        }}
      />
    ))}
  </div>
);

const HomeContent = () => {


  return (
    <main className="bg-[#0d4c3e] font-sans text-white">
      <BubblesBackground />
      {/* ---------- Hero Section ---------- */}
      <section className="relative">
        <HeroVideoSection />
      </section>
      <Hero3DSection />
      {/* ---------- Reasons Section ---------- */}
      <WhyChooseFancy />

      {/* ---------- MeetTheTeam Section ---------- */}
      <MeetTheTeam />

      {/* ---------- Contact Section with Main Color Card ---------- */}
      <section className="bg-[#0d4c3e] py-16 px-4">
        <div className="bg-white max-w-6xl mx-auto rounded-xl px-4 sm:px-6 py-12">
          <h2 className="text-[#0d4c3e] text-lg sm:text-xl font-bold mb-10 flex items-center gap-2">
            <span className="w-4 h-4 bg-[#0d4c3e] rounded-sm"></span>
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Layered Image Stack */}
            <div className="relative w-fit mx-auto group">
              <img
                src="/1.jpg"
                alt="Back"
                className="absolute top-0 left-0 w-[280px] sm:w-[360px] h-[200px] sm:h-[240px] object-cover rounded-xl shadow-md transform rotate-[-10deg] -translate-x-14 translate-y-12 opacity-70 scale-90 transition-all duration-700 ease-in-out z-0 
                group-hover:translate-x-2 group-hover:translate-y-4 group-hover:rotate-[-3deg] group-hover:opacity-100 group-hover:scale-100"
              />
              <img
                src="/2.jpg"
                alt="Middle"
                className="absolute top-0 left-0 w-[280px] sm:w-[360px] h-[200px] sm:h-[240px] object-cover rounded-xl shadow-lg transform rotate-[-5deg] -translate-x-6 translate-y-6 opacity-80 scale-95 transition-all duration-700 ease-in-out 
                z-10 group-hover:z-30 group-hover:translate-x-0 group-hover:-translate-y-4 group-hover:rotate-[0deg] group-hover:scale-[1.05] group-hover:opacity-100"
              />
              <img
                src="/3.jpg"
                alt="Front"
                className="relative w-[280px] sm:w-[360px] h-[200px] sm:h-[240px] object-cover rounded-xl shadow-2xl transform rotate-[2deg] transition-all duration-700 ease-in-out 
                z-20 group-hover:z-10 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:brightness-90"
              />
            </div>

            {/* Contact Card */}
            <div className="relative w-full max-w-md mx-auto bg-[#0d4c3e] rounded-2xl p-6 sm:p-8 text-white shadow-2xl space-y-5 border border-[#ffffff22] flex flex-col items-center justify-center h-[340px]">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold">Let's get in touch</h3>
                {[
                  { icon: '📞', text: '2834-45-75' },
                  { icon: '✉️', text: 'hello@jferltj' },
                  { icon: '📍', text: 'home.str .djf' },
                  { icon: '🌐', text: 'www.ekfj.com' },
                ].map(({ icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center text-sm border-b border-white/20 last:border-b-0 pb-2">
                    <span className="text-lg">{icon}</span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <HomeContent />;
};

export default Home;
