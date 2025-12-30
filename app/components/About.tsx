"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "100+", label: "Projects Completed" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <section id="about" className="bg-[#edf1f3] py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#20b5c5]">
              About Us
            </span>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Your Trusted Technology Partner
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-[#8a9ea8]">
              Paveace Technologies Limited is a dynamic and innovative company
              dedicated to providing comprehensive technology solutions. Based
              in Bida, Niger State, we serve businesses and individuals with
              excellence and integrity.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-[#8a9ea8]">
              From creative design and printing to IT infrastructure, solar
              energy solutions, and software development, we deliver quality
              services that exceed expectations.
            </p>

            <ul className="space-y-4">
              {[
                "Professional and experienced team",
                "Customer-focused approach",
                "Quality service delivery",
                "Competitive pricing",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#20b5c5]" />
                  <span className="">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 sm:grid-cols-3"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl bg-card p-6 text-center shadow-card"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#8a9ea8]">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
