import { motion } from 'framer-motion';
import { FiDownload, FiEye, FiFileText } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-white dark:bg-dark-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary-500 font-mono text-sm font-semibold mb-3 tracking-wider uppercase">
            ∙ credentials ∙
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            A full snapshot of my education, experience, skills, and achievements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Resume Preview Card */}
          <div className="card p-8 text-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-4xl mx-auto mb-6 shadow-xl shadow-primary-500/30">
              <FiFileText size={36} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {personalInfo.name} — Resume
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Full Stack Developer · B.Tech Computer Science · 2025
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Work Experience', value: '1 Internship' },
                { label: 'Projects', value: '15+' },
                { label: 'Skills', value: '20+ Tech' },
              ].map(s => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/20"
                >
                  <div className="font-bold text-primary-600 dark:text-primary-400">{s.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Sections preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {['Education', 'Experience', 'Projects', 'Skills', 'Certificates', 'Open Source', 'Achievements', 'Contact'].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-50 dark:bg-dark-200 text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">{item}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={personalInfo.resume}
                download="AlexDev_Resume.pdf"
                className="btn-primary flex items-center gap-2"
              >
                <FiDownload size={16} /> Download PDF
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <FiEye size={16} /> Preview
              </motion.a>
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-sm text-gray-400 dark:text-gray-600">
            Last updated: March 2026 · PDF format · ATS-friendly
          </p>
        </motion.div>
      </div>
    </section>
  );
}
