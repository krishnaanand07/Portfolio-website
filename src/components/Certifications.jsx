import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { CERTIFICATIONS } from "../data/certifications";
import { staggerContainer, staggerItem } from "../utils/animations";

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications in AI, ML, and Data Science"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className={`grid gap-6 ${
            CERTIFICATIONS.length === 1
              ? "grid-cols-1 max-w-4xl mx-auto"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.a
              key={cert.id}
              variants={staggerItem}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card overflow-hidden block group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left Side: Text Details */}
                <div className="p-8 md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border">
                  <div className="flex items-start gap-4">
                    {!cert.image && (
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: cert.color }}
                      >
                        <Award size={22} />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold font-heading text-dark group-hover:text-primary transition-colors leading-tight mb-3">
                        {cert.title}
                      </h3>
                      <p className="text-base text-secondary font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-sm font-semibold text-primary mb-6">
                        {cert.date}
                      </p>
                      
                      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold tracking-wide text-sm">
                        {cert.platform}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border flex items-center gap-2 text-sm font-semibold text-secondary group-hover:text-primary transition-colors">
                    <ExternalLink size={16} />
                    View Original Certificate
                  </div>
                </div>

                {/* Right Side: Image Showcase */}
                {cert.image && (
                  <div className="md:w-1/2 relative overflow-hidden bg-bg/50 min-h-[250px] md:min-h-[300px]">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
