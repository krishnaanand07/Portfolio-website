import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import useScrollPosition from "../hooks/useScrollPosition";
import { PERSONAL, NAV_LINKS, RESUME_URL } from "../data/config";

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-[var(--shadow-nav)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-[1200px] px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth
          duration={600}
          className="cursor-pointer"
        >
          <span className="text-2xl font-extrabold font-heading gradient-text">
            {PERSONAL.initials}
          </span>
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy
              smooth
              offset={-80}
              duration={600}
              activeClass="!text-primary !font-semibold bg-primary/5"
              className="px-3 py-2 text-sm font-medium text-secondary hover:text-primary transition-colors cursor-pointer rounded-lg hover:bg-primary/5"
            >
              {link.label}
            </ScrollLink>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-4 !py-2.5 !px-6 !text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-dark p-2 rounded-lg hover:bg-primary/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  href={`#${link.to}`}
                  spy
                  smooth
                  offset={-80}
                  duration={600}
                  activeClass="!text-primary !bg-primary/5"
                  className="px-4 py-3 text-sm font-medium text-secondary hover:text-primary rounded-xl hover:bg-primary/5 transition-all cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </ScrollLink>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-3 justify-center !text-sm"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
