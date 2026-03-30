import { motion } from 'framer-motion';
import { FiBookOpen, FiMapPin, FiCalendar, FiStar } from 'react-icons/fi';
import { education } from '../data/portfolioData';

function EducationCard({ edu, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.5 }}
      className="card p-8 relative overflow-hidden group"
    >
      {/* Gradient top bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${edu.color}`} />

      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white text-2xl mb-5 shadow-lg`}>
        🎓
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
        {edu.degree}
      </h3>
      <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
        {edu.institution}
      </p>

      <div className="flex flex-wrap gap-4 mb-5 text-sm text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1.5">
          <FiCalendar size={13} className="text-primary-500" /> {edu.year}
        </span>
        <span className="flex items-center gap-1.5">
          <FiMapPin size={13} className="text-primary-500" /> {edu.location}
        </span>
        <span className="flex items-center gap-1.5">
          <FiStar size={13} className="text-amber-500" />
          <span className="font-semibold text-gray-700 dark:text-gray-300">{edu.gpa}</span>
        </span>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <FiBookOpen size={13} className="text-primary-500" />
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Relevant Coursework</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {edu.coursework.map(course => (
            <span
              key={course}
              className="tag bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 text-xs border border-gray-200 dark:border-white/5"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-dark-200">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-500 font-mono text-sm font-semibold mb-3 tracking-wider uppercase">
            ∙ my academic background ∙
          </span>
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            The foundation that shaped my analytical thinking and technical skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, i) => (
            <EducationCard key={edu.id} edu={edu} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
