import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SKILL_CATEGORIES } from "../data/skills";
import { staggerContainer, staggerItem } from "../utils/animations";

const HIGH_IMPACT_SKILLS = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "LangChain",
  "RAG",
  "Scikit-learn",
  "OpenCV",
  "BERT",
  "Pandas",
  "FastAPI",
  "SQL"
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="My technical toolkit for building intelligent systems"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={staggerItem}
                className="glass-card p-6 group"
                style={{
                  "--hover-color": category.color,
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: category.color }}
                  >
                    <IconComponent />
                  </div>
                  <h3 className="text-base font-bold font-heading text-dark">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isHighlighted = HIGH_IMPACT_SKILLS.includes(skill);
                    return (
                      <span
                        key={skill}
                        className={`skill-badge ${isHighlighted ? "skill-badge-highlighted" : ""}`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
