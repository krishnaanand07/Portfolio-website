import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  Calendar,
  BarChart3,
  MapPin,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import StatCounter from "./StatCounter";
import { PERSONAL, ABOUT, STATS } from "../data/config";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../utils/animations";
import { FaProjectDiagram, FaCode, FaCertificate, FaGithub } from "react-icons/fa";

const infoCards = [
  {
    icon: <GraduationCap size={22} />,
    label: "Degree",
    value: `${PERSONAL.degree} (${PERSONAL.specialization})`,
  },
  { icon: <School size={22} />, label: "University", value: PERSONAL.university },
  {
    icon: <Calendar size={22} />,
    label: "Expected Graduation",
    value: PERSONAL.graduationYear,
  },
  { icon: <BarChart3 size={22} />, label: "CGPA", value: PERSONAL.cgpa },
  { icon: <MapPin size={22} />, label: "Location", value: PERSONAL.location },
];

const stats = [
  { value: STATS.projects, label: "AI/ML Projects", icon: <FaProjectDiagram /> },
  { value: STATS.dsaProblems, label: "DSA Problems", icon: <FaCode /> },
  { value: STATS.certifications, label: "Certifications", icon: <FaCertificate /> },
  { value: STATS.githubContributions, label: "GitHub Contributions", icon: <FaGithub /> },
];

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="About Me"
        />

        <div className="flex flex-col gap-12">
          {/* Top Part: Text and Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Description */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-bold font-heading text-dark mb-4 leading-snug">
                A passionate AI/ML enthusiast building intelligent solutions
              </h3>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary-light mb-6" />
              <p className="text-secondary text-base md:text-lg leading-relaxed text-justify">
                {ABOUT.description}
              </p>
            </motion.div>

            {/* Right — Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                />
              ))}
            </div>
          </div>

          {/* Bottom Part: Education & Details */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={card.label}
                variants={staggerItem}
                className={`flex items-center gap-4 p-5 rounded-2xl bg-bg hover:bg-primary/5 border border-border transition-all duration-300 ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <div className="text-xs text-secondary font-medium uppercase tracking-wide mb-1">
                    {card.label}
                  </div>
                  <div className="text-sm font-semibold text-dark">
                    {card.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
