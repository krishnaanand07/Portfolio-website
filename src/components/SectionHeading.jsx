import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

export default function SectionHeading({ title, subtitle, center = true }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-14 ${center ? "text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-dark font-heading mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary-light ${
          center ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
