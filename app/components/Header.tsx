"use client";

import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[color-mix(in_oklab,hsl(var(--background))_95%,transparent)] shadow-card backdrop-blur-md"
          : "bg-[transparent] backdrop-blur-0 shadow-none"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="#home" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-glow">
              <span className="text-xl font-bold text-[#fff]">P</span>
            </div>
            <div className="hidden sm:block">
              <span
                className={`text-2xl font-bold transition-opacity ${
                  isScrolled ? "text-[#0d1e26]" : "text-[#fff]"
                }`}
              >
                Paveace
              </span>
              <span
                className={`text-lg font-light ${
                  isScrolled ? "text-muted-foreground" : "text-[white]/70"
                }`}
              >
                {" "}
                Tech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors ${
                  isScrolled
                    ? "text-foreground hover:text-[#248F86]"
                    : "text-white hover:text-[#248F86]/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div
            className={`hidden items-center gap-4 md:flex ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Link
              href="tel:08102612957"
              className={`flex items-center gap-2 text-lg font-medium
                ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
            >
              <Phone className="h-4 w-4" />
              <span>08102612957</span>
            </Link>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 gradient-primary">
              Contact us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-border bg-white p-6 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="tel:08102612957"
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>08102612957</span>
              </Link>
              <button className="mt-2 w-full">Contact me</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
