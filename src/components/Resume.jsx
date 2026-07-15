import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { RESUME_URL } from "../data/config";
import { fadeInUp } from "../utils/animations";

export default function Resume() {
  return (
    <section className="section">
      <div className="container mx-auto max-w-[1200px] px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full flex justify-center items-center"
        >
          <div className="glass-card p-10 md:p-14 w-full max-w-2xl flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 shrink-0 shadow-sm relative">
              <FileText size={36} />
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-dark mb-3">
              My Resume
            </h2>
            <p className="text-secondary mb-8 max-w-md mx-auto">
              Download my resume to learn more about my education, skills,
              projects, and experience in AI and Machine Learning.
            </p>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
