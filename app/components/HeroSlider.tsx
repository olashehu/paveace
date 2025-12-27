"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Palette,
  Wifi,
  Sun,
  Code,
} from "lucide-react";
// import { Button } from "@/components/ui/button";

import heroDesign from "../assets/hero-design.jpg";
import heroIT from "../assets/hero-it.jpg";
import heroSolar from "../assets/hero-solar.jpg";
import heroSoftware from "../assets/hero-software.jpg";

const slides = [
  {
    id: 1,
    title: "Design, Brand & Printing",
    subtitle: "Creative Excellence",
    description:
      "Transform your brand identity with stunning designs, professional branding, and premium printing solutions that make your business stand out.",
    image: heroDesign,
    icon: Palette,
  },
  {
    id: 2,
    title: "IT, CCTV & Networking",
    subtitle: "Secure Infrastructure",
    description:
      "Comprehensive IT solutions including network setup, CCTV installation, and maintenance to keep your business connected and secure.",
    image: heroIT,
    icon: Wifi,
  },
  {
    id: 3,
    title: "Solar & Electrical Energy",
    subtitle: "Sustainable Power",
    description:
      "Harness the power of the sun with our solar energy solutions. Reduce costs and embrace sustainable electrical systems for your home or business.",
    image: heroSolar,
    icon: Sun,
  },
  {
    id: 4,
    title: "Software & Websites",
    subtitle: "Digital Innovation",
    description:
      "Custom software development and modern website creation that drives your digital presence forward with cutting-edge technology.",
    image: heroSoftware,
    icon: Code,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlideData.image}
            alt={currentSlideData.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero-overlay" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 flex items-center gap-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shadow-glow">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-md font-medium uppercase tracking-widest text-[#1ae5e5]">
                  {currentSlideData.subtitle}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
              >
                {currentSlideData.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8 text-md leading-relaxed text-[hsl(20,20%,95%)]/80 md:text-xl"
              >
                {currentSlideData.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button className="gradient-primary h-12 rounded-lg px-8 text-base text-white transition-colors">
                  Contact Us
                </button>
                <button className="btn-secondary bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40 h-12 rounded-lg px-8">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary-foreground/10 p-3 backdrop-blur-sm transition-all hover:bg-primary-foreground/20 md:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-primary-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary-foreground/10 p-3 backdrop-blur-sm transition-all hover:bg-primary-foreground/20 md:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-primary-foreground" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 gradient-primary"
                : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
