import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GITHUB_USERNAME } from "../data/config";
import { fadeInUp, staggerContainer, staggerItem } from "../utils/animations";

export default function GitHub() {
  const username = GITHUB_USERNAME;
  const theme = "default";

  return (
    <section id="github" className="section">
      <div className="container mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="GitHub Activity"
          subtitle="My open-source contributions and coding activity"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* GitHub Stats */}
          <motion.div variants={staggerItem} className="glass-card p-6 flex items-center justify-center">
            <img
              src={`https://github-readme-stats-sigma-five.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true&bg_color=ffffff&title_color=118AB2&icon_color=118AB2&text_color=1E293B`}
              alt="GitHub Stats"
              width="495"
              height="195"
              className="w-full max-w-md"
              loading="lazy"
            />
          </motion.div>

          {/* Top Languages */}
          <motion.div variants={staggerItem} className="glass-card p-6 flex items-center justify-center">
            <img
              src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true&bg_color=ffffff&title_color=118AB2&text_color=1E293B`}
              alt="Top Languages"
              width="300"
              height="285"
              className="w-full max-w-md"
              loading="lazy"
            />
          </motion.div>

          {/* Streak */}
          <motion.div variants={staggerItem} className="glass-card p-6 flex items-center justify-center md:col-span-2">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=default&hide_border=true&background=ffffff&ring=118AB2&fire=D88A4B&currStreakLabel=118AB2&sideLabels=1E293B&dates=64748B`}
              alt="GitHub Streak"
              width="495"
              height="195"
              className="w-full max-w-2xl"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
