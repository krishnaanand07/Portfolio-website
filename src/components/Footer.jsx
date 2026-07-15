import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Heart } from "lucide-react";
import { PERSONAL, SOCIAL, NAV_LINKS } from "../data/config";

const socialIcons = [
  { icon: <FaLinkedin size={18} title="LinkedIn" />, url: SOCIAL.linkedin, label: "LinkedIn" },
  { icon: <FaGithub size={18} title="GitHub" />, url: SOCIAL.github, label: "GitHub" },
  { icon: <FaKaggle size={18} title="Kaggle" />, url: SOCIAL.kaggle, label: "Kaggle" },
  { icon: <SiLeetcode size={18} title="LeetCode" />, url: SOCIAL.leetcode, label: "LeetCode" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-14">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-extrabold font-heading gradient-text">
              {PERSONAL.initials}
            </span>
            <p className="text-gray-400 text-sm mt-3 max-w-xs leading-relaxed">
              {PERSONAL.title}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold font-heading uppercase tracking-wider mb-4 text-gray-300">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  href={`#${link.to}`}
                  smooth
                  offset={-80}
                  duration={600}
                  className="text-sm text-gray-400 hover:text-primary-light transition-colors cursor-pointer w-fit"
                >
                  {link.label}
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold font-heading uppercase tracking-wider mb-4 text-gray-300">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 flex items-center gap-1">
            Built with <Heart size={12} className="text-red-400" /> and Python
          </p>
        </div>
      </div>
    </footer>
  );
}
