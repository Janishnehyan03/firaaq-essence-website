"use client";

import { useState } from "react";
// Import motion and AnimatePresence from Framer Motion
import { motion, AnimatePresence, easeOut } from "framer-motion";

// Contact information data (no changes here)
const contactInfo = [
  // ... (your contactInfo array remains the same)
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Visit Our Store",
    details: ["123 Fragrance Avenue", "Luxury District, City 12345"],
    link: "https://maps.google.com",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: "Call Us",
    details: ["+1 (555) 123-4567", "Mon - Sat: 9AM - 7PM"],
    link: "tel:+15551234567",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Email Us",
    details: ["hello@firaaq.com", "support@firaaq.com"],
    link: "mailto:hello@firaaq.com",
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Framer Motion Variants for animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Stagger children animations by 0.1s
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatWhatsAppMessage = (data: FormData): string => {
    const message = `
*New Inquiry from FIRAAQ Website*
*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Subject:* ${data.subject}
*Message:*
${data.message}
---
Sent via FIRAAQ Contact Form`.trim();
    return encodeURIComponent(message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const whatsappMessage = formatWhatsAppMessage(formData);
    const whatsappNumber = "1234567890"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section
      className="relative w-full py-16 lg:py-20 overflow-hidden bg-slate-950"
      id="contact"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-10 left-20 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [30, -30, 30], y: [15, -15, 15] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-20 right-10 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Main container with viewport-triggered animations */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of the element is in view
        variants={containerVariants}
      >
        {/* Animated Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <span className="inline-block bg-amber-500/20 text-amber-200 backdrop-blur-sm px-5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase border border-amber-500/30">
            Get In Touch
          </span>
        </motion.div>

        {/* Animated Header */}
        <div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-3"
          >
            Contact <span className="text-amber-400 font-normal">FIRAAQ</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-lg max-w-xl mx-auto font-light"
          >
            Let's create your perfect scent story together
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Animated Contact Info - Left Side */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                variants={itemVariants} // Each card animates in
                whileHover={{ scale: 1.03, y: -5 }} // Smoother hover effect
                transition={{ type: "spring", stiffness: 300 }}
                className="group flex items-start space-x-4 p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 transition-colors duration-300 hover:bg-slate-800/50 hover:border-slate-700"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center transition-colors duration-300 group-hover:bg-amber-500/30">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white mb-1">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-xs text-slate-400">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Animated Contact Form - Right Side */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 lg:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-light text-white mb-2">
                  Send us a Message
                </h3>
                <p className="text-slate-400 text-sm">
                  Your message will be sent directly to our WhatsApp
                </p>
              </div>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4"
                variants={containerVariants} // Stagger form fields as well
                initial="hidden"
                animate="visible"
              >
                {/* Name and Email Row */}
                <motion.div
                  variants={itemVariants}
                  className="grid md:grid-cols-2 gap-4"
                >
                  {/* ... (input fields inside) */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg text-sm bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg text-sm bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </motion.div>

                {/* Phone and Subject Row */}
                <motion.div
                  variants={itemVariants}
                  className="grid md:grid-cols-2 gap-4"
                >
                  {/* ... (input fields inside) */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg text-sm bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg text-sm bg-slate-800/50 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">
                        Product Information
                      </option>
                      <option value="Custom Fragrance">Custom Fragrance</option>
                      <option value="Store Visit">Store Visit</option>
                      <option value="Bulk Order">Bulk Order</option>
                      <option value="Support">Support</option>
                    </select>
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg text-sm bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your fragrance needs..."
                  />
                </motion.div>

                {/* Submit Button with AnimatePresence */}
                <motion.div variants={itemVariants} className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium bg-amber-600 text-white transition-all duration-300 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isSubmitting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center"
                        >
                          <svg
                            className="animate-spin w-4 h-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Sending...</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="ready"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center"
                        >
                          <span>Send via WhatsApp</span>
                          <svg
                            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </motion.form>

              <p className="text-center text-xs text-slate-500 mt-3">
                Your message will be formatted and sent to our WhatsApp for
                immediate assistance.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
