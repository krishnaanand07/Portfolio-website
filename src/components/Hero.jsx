import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDown, FileText } from "lucide-react";
import { PERSONAL, HERO, RESUME_URL } from "../data/config";
import { fadeInUp, slideInLeft, slideInRight } from "../utils/animations";
import profileImage from "../assets/images/image.webp";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient blob top-right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/8 to-primary-light/5 blur-3xl" />
        {/* Smaller blob bottom-left */}
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent/6 to-primary/4 blur-3xl" />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Floating circles */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-primary/20"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/5 w-2 h-2 rounded-full bg-accent/25"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/3 w-4 h-4 rounded-full bg-primary-light/15"
        />
        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="var(--color-primary)" strokeWidth="1" />
          <line x1="30%" y1="40%" x2="50%" y2="25%" stroke="var(--color-primary)" strokeWidth="1" />
          <line x1="50%" y1="25%" x2="70%" y2="45%" stroke="var(--color-primary)" strokeWidth="1" />
          <line x1="70%" y1="45%" x2="90%" y2="30%" stroke="var(--color-primary)" strokeWidth="1" />
          <line x1="20%" y1="60%" x2="40%" y2="75%" stroke="var(--color-primary-light)" strokeWidth="1" />
          <line x1="40%" y1="75%" x2="65%" y2="60%" stroke="var(--color-primary-light)" strokeWidth="1" />
          <line x1="65%" y1="60%" x2="85%" y2="70%" stroke="var(--color-primary-light)" strokeWidth="1" />
          <circle cx="10%" cy="20%" r="3" fill="var(--color-primary)" opacity="0.3" />
          <circle cx="30%" cy="40%" r="3" fill="var(--color-primary)" opacity="0.3" />
          <circle cx="50%" cy="25%" r="3" fill="var(--color-primary)" opacity="0.3" />
          <circle cx="70%" cy="45%" r="3" fill="var(--color-primary)" opacity="0.3" />
          <circle cx="90%" cy="30%" r="3" fill="var(--color-primary)" opacity="0.3" />
          <circle cx="20%" cy="60%" r="3" fill="var(--color-primary-light)" opacity="0.2" />
          <circle cx="40%" cy="75%" r="3" fill="var(--color-primary-light)" opacity="0.2" />
          <circle cx="65%" cy="60%" r="3" fill="var(--color-primary-light)" opacity="0.2" />
          <circle cx="85%" cy="70%" r="3" fill="var(--color-primary-light)" opacity="0.2" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            <p className="text-primary font-medium text-base md:text-lg mb-3">
              {HERO.greeting}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-dark mb-4 leading-tight">
              {PERSONAL.name}
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold mb-6 h-[42px]">
              <TypeAnimation
                sequence={HERO.typingSequences}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="gradient-text"
              />
            </div>
            <p className="text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              {HERO.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <ScrollLink
                to="projects"
                href="#projects"
                smooth
                offset={-80}
                duration={600}
                className="btn-primary cursor-pointer"
              >
                <ArrowDown size={18} />
                View Projects
              </ScrollLink>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right — Profile Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary via-primary-light to-accent opacity-20 blur-xl" />
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                {/* Profile Image */}
                <img 
                  src={profileImage} 
                  alt={PERSONAL.name} 
                  className="w-full h-full object-cover" 
                  fetchPriority="high"
                  loading="eager"
                  width="320"
                  height="320"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
