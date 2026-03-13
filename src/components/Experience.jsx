import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiBriefcase, FiAward } from 'react-icons/fi';
import { experiences } from '../data/portfolioData';

const typeIcons = {
  Internship:   <FiBriefcase size={14} />,
  'Open Source': <FiAward size={14} />,
  Hackathon:    <FiAward size={14} />,
};

function ExperienceCard({ exp, i, isLeft }) {
  return (
    <div className={`flex gap-8 mb-12 last:mb-0 ${isLeft ? 'flex-row' : 'flex-row-reverse'} max-w-4xl mx-auto`}>
      {/* Timeline dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 + 0.1, type: 'spring', stiffness: 200 }}
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white text-lg shadow-lg`}
        >
          🏢
        </motion.div>
        {i < experiences.length - 1 && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-primary-500/40 to-transparent mt-3" />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15, duration: 0.5 }}
        className="flex-1 card p-6 mb-4"
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white mb-2`}>
              {typeIcons[exp.type]} {exp.type}
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
            <p className="text-primary-500 dark:text-primary-400 font-semibold">{exp.company}</p>
          </div>
          <div className="text-right">
            <p className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
              <FiCalendar size={12} /> {exp.duration}
            </p>
            <p className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mt-1">
              <FiMapPin size={12} /> {exp.location}
            </p>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {exp.contributions.map((c, ci) => (
            <motion.li
              key={c}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + ci * 0.07 }}
              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
              {c}
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map(t => (
            <span key={t} className="tag bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-xs">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-dark-300">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-500 font-mono text-sm font-semibold mb-3 tracking-wider uppercase">
            ∙ where I've worked ∙
          </span>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Real-world experience, open source contributions, and competitive wins.
          </p>
        </motion.div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} i={i} isLeft={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
