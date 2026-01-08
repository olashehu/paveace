"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Palette, Wifi, Sun, Code, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design, Brand & Printing",
    description:
      "Professional logo design, brand identity, marketing materials, business cards, banners, and high-quality printing services.",
    features: [
      "Logo Design",
      "Brand Identity",
      "Print Materials",
      "Marketing Collateral",
    ],
  },
  {
    icon: Wifi,
    title: "IT, CCTV & Networking",
    description:
      "Complete IT infrastructure solutions including network setup, CCTV installation, computer repairs, and technical support.",
    features: [
      "Network Setup",
      "CCTV Installation",
      "IT Support",
      "System Maintenance",
    ],
  },
  {
    icon: Sun,
    title: "Solar & Electrical Energy",
    description:
      "Sustainable energy solutions with solar panel installation, electrical wiring, inverter systems, and power backup solutions.",
    features: [
      "Solar Installation",
      "Inverter Systems",
      "Electrical Wiring",
      "Power Backup",
    ],
  },
  {
    icon: Code,
    title: "Software & Websites",
    description:
      "Custom software development, responsive website design, mobile apps, and digital solutions to grow your business online.",
    features: [
      "Web Development",
      "Mobile Apps",
      "Custom Software",
      "E-commerce",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#f9fafb] py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#7f51f2]">
            What We Offer
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#8a9ea8]">
            Comprehensive technology solutions tailored to meet your business
            needs and drive growth.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl gradient-primary shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-[#8a9ea8]">
                  {service.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full gradient-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#7f51f2] transition-colors hover:text-primary/80"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
