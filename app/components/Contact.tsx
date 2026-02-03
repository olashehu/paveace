"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
// import { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
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
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   service: "",
  //   message: "",
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const notify = () =>
  //       toast.success(
  //         "Message Sent! We'll get back to you as soon as possible.",
  //       );
  //     notify();
  //     setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     const notify = () =>
  //       toast.error("Failed to send message. Please try again later.");
  //     notify();
  //   }
  // };

  // const handleChange = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  //   >,
  // ) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

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
            {/* <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-card p-8 shadow-card"
            >
              <div className="mb-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="08012345678"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a service</option>
                    <option value="design">Design, Brand & Printing</option>
                    <option value="it">IT, CCTV & Networking</option>
                    <option value="solar">Solar & Electrical Energy</option>
                    <option value="software">Software & Websites</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gradient-primary text-white hover:bg-gradient-primary focus:ring-[#1aa1ad]"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form> */}
          </motion.div>
        </div>
      </div>
      {/* <Toaster /> */}
    </section>
  );
};

export default Contact;
