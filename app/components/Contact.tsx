"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "Yannako House, Opposite Zenith Bank",
      "BCC Road, Bida",
      "Niger State, Nigeria",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["08102612957", "08065724146"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["paveacetechly@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-[#f9fafb] py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#be52f8]">
            Get In Touch
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#8a9ea8]">
            Ready to start your project? Get in touch with us today and
            let&apos;s bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-2xl bg-card p-6 shadow-card"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 font-bold">{info.title}</h3>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-sm text-[#8a9ea8]">
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
