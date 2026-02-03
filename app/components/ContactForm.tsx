"use client";

import { useEffect, useActionState } from "react";
import { Send } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

import { contactUs } from "../actions/contactUs";

const ContactForm = () => {
  const [state, action] = useActionState(contactUs, undefined);

  useEffect(() => {
    if (state && "id" in state) {
      const notify = () => toast.success("Email sent successfully!");
      notify();
    }
  }, [state]);

  return (
    <form action={action} className="rounded-2xl bg-card p-8 shadow-card">
      <div className="mb-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="John Doe"
          />
        </div>
        {state && "errors" in state && state?.errors?.name && (
          <p
            aria-live="polite"
            className="bg-red-50 border border-red-200 rounded text-red-700 text-sm"
          >
            name: {state.errors.name}
          </p>
        )}
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
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select a service</option>
            <option value="DESIGN, BRAND & PRINTING">
              Design, Brand & Printing
            </option>
            <option value="IT, CCTV & NETWORKING">IT, CCTV & Networking</option>
            <option value="SOLAR & ELECTRICAL ENERGY">
              Solar & Electrical Energy
            </option>
            <option value="SOFTWARE & WEBSITES">Software & Websites</option>
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
      <Toaster />
    </form>
  );
};

export default ContactForm;
