import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "../data/projects";
import { staggerContainer, staggerItem } from "../utils/animations";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="AI & ML projects solving real-world problems"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="glass-card overflow-hidden flex flex-col group"
            >
              {/* Project Image / Gradient Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 via-primary-light/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 group-hover:from-primary/10 group-hover:to-primary-light/10 transition-all duration-500" />
                <Sparkles
                  size={48}
                  className="text-primary/30 group-hover:text-primary/50 transition-colors duration-300"
                />
                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/5" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-accent/5" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold font-heading text-dark mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-2.5 py-1 rounded-full bg-success/10 text-success font-medium"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-badge !text-xs !py-1 !px-2.5">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6 pt-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
                    aria-label={`View Source Code for ${project.title}`}
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
                      aria-label={`View Live Demo for ${project.title}`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
