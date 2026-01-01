import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import paveace from "../assets/paveace.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Design & Branding",
    "Printing Services",
    "IT Solutions",
    "CCTV Installation",
    "Solar Energy",
    "Software Development",
    "Website Design",
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="gradient-dark pt-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-glow">
                {/* <span className="text-xl font-bold text-white">P</span> */}
                <Image
                  src={paveace}
                  alt="logo"
                  className="mix-blend-screen rounded-lg"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Paveace</span>
                <span className="text-lg font-light text-[#fff]/70">
                  {" "}
                  Technologies
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-[#fff]/70">
              Your trusted partner for comprehensive technology solutions. We
              deliver excellence in design, IT services, energy solutions, and
              software development.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff]/10 text-white transition-colors hover:bg-primary hover:text-white"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-[#fff]/70 transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#fff]/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#1b99a7]" />
                <span className="text-sm text-[#fff]/70">
                  Yannako House, Opposite Zenith Bank, BCC Road, Bida, Niger
                  State
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#1b99a7]" />
                <div className="text-sm text-[#fff]/70">
                  <Link
                    href="tel:08102612957"
                    className="block hover:text-primary"
                  >
                    08102612957
                  </Link>
                  <Link
                    href="tel:08065724146"
                    className="block hover:text-primary"
                  >
                    08065724146
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#1b99a7]" />
                <Link
                  href="mailto:paveacetechly@gmail.com"
                  className="text-sm text-[#fff]/70 hover:text-primary"
                >
                  paveacetechly@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#fff]/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-[#fff]/60">
              © {currentYear} Paveace Technologies Limited. All rights reserved.
            </p>
            <p className="text-sm text-[#fff]/60">
              Designed with ❤️ in Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
