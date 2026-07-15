import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import SectionHeading from "./SectionHeading";
import { PERSONAL, SOCIAL, EMAILJS } from "../data/config";
import { fadeInUp, slideInLeft, slideInRight } from "../utils/animations";

const socialLinks = [
  { icon: <FaLinkedin size={20} />, url: SOCIAL.linkedin, label: "LinkedIn", color: "#0A66C2" },
  { icon: <FaGithub size={20} />, url: SOCIAL.github, label: "GitHub", color: "#181717" },
  { icon: <FaKaggle size={20} />, url: SOCIAL.kaggle, label: "Kaggle", color: "#20BEFF" },
  { icon: <SiLeetcode size={20} />, url: SOCIAL.leetcode, label: "LeetCode", color: "#FFA116" },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        formRef.current,
        EMAILJS.publicKey
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="glass-card p-8 md:p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-dark mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Subject"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Your message..."
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center disabled:opacity-60 py-4 mt-2"
                >
                  {sending ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-success text-sm font-medium mt-4">
                    <CheckCircle size={18} />
                    Message sent successfully!
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm font-medium mt-4">
                    <AlertCircle size={18} />
                    Failed to send. Please try again or email directly.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-10 w-full"
          >
            {/* Info cards */}
            <div className="glass-card w-full overflow-hidden">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold font-heading text-dark mb-8 pb-5 border-b border-border/50">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Mail size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-secondary mb-1">Email</p>
                      <p className="text-base font-bold text-dark truncate">
                        {PERSONAL.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-secondary mb-1">Phone</p>
                      <p className="text-base font-bold text-dark">
                        {PERSONAL.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-secondary mb-1">Location</p>
                      <p className="text-base font-bold text-dark">
                        {PERSONAL.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card w-full overflow-hidden">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold font-heading text-dark mb-8">
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-5">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-xl shadow-md"
                      style={{ backgroundColor: link.color }}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
