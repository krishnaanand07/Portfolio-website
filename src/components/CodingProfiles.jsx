import { motion } from "framer-motion";
import { FaGithub, FaKaggle } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import SectionHeading from "./SectionHeading";
import { SOCIAL } from "../data/config";
import { staggerContainer, staggerItem } from "../utils/animations";

const profiles = [
  {
    name: "GitHub",
    icon: <FaGithub size={28} title="GitHub Profile" />,
    color: "#181717",
    url: SOCIAL.github,
    description: "Open-source projects & contributions",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={28} title="LeetCode Profile" />,
    color: "#FFA116",
    url: SOCIAL.leetcode,
    description: "Data structures & algorithms practice",
  },
  {
    name: "Kaggle",
    icon: <FaKaggle size={28} title="Kaggle Profile" />,
    color: "#20BEFF",
    url: SOCIAL.kaggle,
    description: "Competitions & ML notebooks",
  },
];

export default function CodingProfiles() {
  return (
    <section className="section section-alt">
      <div className="container mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="Coding Profiles"
          subtitle="Where I practice, compete, and contribute"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {profiles.map((profile) => (
            <motion.a
              key={profile.name}
              variants={staggerItem}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md"
                style={{ backgroundColor: profile.color }}
              >
                {profile.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-dark group-hover:text-primary transition-colors mb-2">
                {profile.name}
              </h3>
              <p className="text-sm font-medium text-secondary">{profile.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
