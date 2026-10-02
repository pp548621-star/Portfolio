import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const allSkills = Object.values(skills).flat();

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-dark-200">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary-500 font-mono text-sm font-semibold mb-3 tracking-wider uppercase">
            ∙ what I work with ∙
          </span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            A curated set of tools I use to craft modern, scalable applications.
          </p>
        </motion.div>

        {/* Cloud View */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {allSkills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="skill-badge cursor-default font-medium flex items-center gap-2"
              style={{ fontSize: `${0.8 + (skill.level / 100) * 0.5}rem` }}
            >
              <span>{skill.icon}</span>
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
