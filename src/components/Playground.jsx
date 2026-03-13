import { motion } from 'framer-motion';
import { FiGithub, FiPlay } from 'react-icons/fi';
import { experiments } from '../data/portfolioData';

const typeConfig = {
  game:          { label: '🎮 Game',          cls: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700/30' },
  visualization: { label: '📊 Visualization', cls: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700/30' },
  animation:     { label: '✨ Animation',     cls: 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700/30' },
  ai:            { label: '🤖 AI/ML',         cls: 'bg-rose-100 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-700/30' },
};

function ExperimentCard({ exp, i }) {
  const type = typeConfig[exp.type] || typeConfig.animation;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="card group relative overflow-hidden"
    >
      {/* Gradient accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${exp.color}`} />

      {/* Gradient background glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

      <div className="p-6 relative">
        {/* Type badge */}
        <span className={`tag text-xs font-semibold mb-4 inline-block ${type.cls}`}>
          {type.label}
        </span>

        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
          {exp.title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
          {exp.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {exp.tags.map(tag => (
            <span
              key={tag}
              className="tag bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={exp.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium
                       bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-400
                       hover:bg-primary-50 dark:hover:bg-primary-900/20
                       hover:text-primary-600 dark:hover:text-primary-400
                       transition-all duration-200"
          >
            <FiGithub size={15} /> Code
          </a>
          {exp.live ? (
            <button
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium
                         bg-gradient-to-r text-white transition-all duration-200 hover:opacity-90"
              style={{ background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))` }}
              disabled
            >
              <span className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-semibold`}>
                <FiPlay size={12} className="text-current" style={{fill: 'currentColor'}} /> Live Demo
              </span>
            </button>
          ) : (
            <span className="flex-1 flex items-center justify-center text-xs text-gray-400 dark:text-gray-600 font-mono">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Playground() {
  return (
    <section id="playground" className="py-24 bg-gray-50 dark:bg-dark-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-40 -top-40 w-96 h-96 rounded-full border-2 border-dashed border-primary-200 dark:border-primary-800/30 pointer-events-none"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block text-primary-500 font-mono text-sm font-semibold mb-3 tracking-wider uppercase">
            ∙ creative experiments ∙
          </span>
          <h2 className="section-title">
            Developer <span className="gradient-text">Playground</span>
          </h2>
          <p className="section-subtitle">
            Where I experiment, explore, and occasionally break things in the name of learning.
          </p>
        </motion.div>

        {/* Fun banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-5 text-center mb-10 max-w-2xl mx-auto border border-primary-200/50 dark:border-primary-800/30"
        >
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            🧪 These experiments are how I learn best — by building small, focused, and fun things.
            Some are polished, some are rough around the edges. All are built with ❤️.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp, i) => (
            <ExperimentCard key={exp.id} exp={exp} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
