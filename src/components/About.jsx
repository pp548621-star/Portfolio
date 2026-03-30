import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiTarget, FiZap, FiMapPin, FiCalendar } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const stats = [
  { label: 'Projects Built', value: '15+', icon: '🚀' },
  { label: 'GitHub Repos', value: '42', icon: '📦' },
  { label: 'Tech Stack', value: '20+', icon: '🛠️' },
  { label: 'Coffee Cups', value: '∞', icon: '☕' },
];

function StatCard({ stat, i }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-dark-200 border border-gray-100 dark:border-white/5"
    >
      <div className="text-3xl mb-2">{stat.icon}</div>
      <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
    </motion.div>
  );
}

export default function About() {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    { icon: FiCode, title: 'Full Stack', desc: 'React, Node.js, Java' },
    { icon: FiTarget, title: 'Goal-Driven', desc: 'Product-minded builder' },
    { icon: FiZap, title: 'Fast Learner', desc: 'Always upskilling' },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-300">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-500 font-mono text-sm font-semibold mb-3 tracking-wider uppercase">
            ∙ get to know me ∙
          </span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div ref={sectionRef} className="max-w-4xl mx-auto mb-16">
          {/* Bio */}
          <div>
            {/* Big quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gray-800 dark:text-gray-100 leading-relaxed mb-6 border-l-4 border-primary-500 pl-5"
            >
              "Building elegant solutions to complex problems."
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
            >
              {personalInfo.bioExtended}
            </motion.p>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FiMapPin size={14} className="text-primary-500" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FiCalendar size={14} className="text-primary-500" />
                Graduating 2025
              </span>
              <span className="flex items-center gap-2 text-sm text-emerald-500">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Highlight cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/20 text-center"
                >
                  <Icon size={20} className="text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">{desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => <StatCard key={stat.label} stat={stat} i={i} />)}
        </div>
      </div>
    </section>
  );
}