import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';

const categoryColors = {
  'Programming Languages': { bg: 'from-amber-500 to-orange-500', light: 'from-amber-50 to-orange-50', dark: 'from-amber-900/20 to-orange-900/20', border: 'border-amber-200 dark:border-amber-700/30', bar: 'bg-gradient-to-r from-amber-400 to-orange-500' },
  'Frontend':              { bg: 'from-blue-500 to-cyan-500',   light: 'from-blue-50 to-cyan-50',   dark: 'from-blue-900/20 to-cyan-900/20',   border: 'border-blue-200 dark:border-blue-700/30',   bar: 'bg-gradient-to-r from-blue-400 to-cyan-500'   },
  'Backend':               { bg: 'from-emerald-500 to-teal-500',light: 'from-emerald-50 to-teal-50',dark: 'dark:from-emerald-900/20 to-teal-900/20', border: 'border-emerald-200 dark:border-emerald-700/30', bar: 'bg-gradient-to-r from-emerald-400 to-teal-500' },
  'Databases':             { bg: 'from-violet-500 to-purple-600',light: 'from-violet-50 to-purple-50', dark: 'from-violet-900/20 to-purple-900/20', border: 'border-violet-200 dark:border-violet-700/30', bar: 'bg-gradient-to-r from-violet-400 to-purple-500' },
  'Tools':                 { bg: 'from-rose-500 to-pink-500',   light: 'from-rose-50 to-pink-50',   dark: 'from-rose-900/20 to-pink-900/20',   border: 'border-rose-200 dark:border-rose-700/30',   bar: 'bg-gradient-to-r from-rose-400 to-pink-500'   },
};

function SkillBar({ name, icon, level, barClass, animate }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2">
          <span>{icon}</span>
          <span className="font-medium text-sm text-gray-800 dark:text-gray-200">{name}</span>
        </div>
        <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-dark-100/50 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${barClass}`}
          initial={{ width: 0 }}
          animate={{ width: animate ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
}

function CategoryCard({ category, skillList, colors }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="card p-6 hover:shadow-xl"
    >
      {/* Card header */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs font-bold mb-5 bg-gradient-to-r ${colors.bg}`}>
        {category}
      </div>

      {/* Skill bars */}
      <div>
        {skillList.map(skill => (
          <SkillBar
            key={skill.name}
            {...skill}
            barClass={colors.bar}
            animate={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  /* Skill badge cloud view */
  const [view, setView] = useState('bars'); // 'bars' | 'cloud'

  const allSkills = Object.values(skills).flat();

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-dark-200">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
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

        {/* View Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl bg-gray-100 dark:bg-dark-100 p-1 gap-1">
            {['bars', 'cloud'].map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  view === v
                    ? 'bg-white dark:bg-dark-200 shadow-sm text-primary-500'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                {v === 'bars' ? '📊 Progress Bars' : '☁️ Skill Cloud'}
              </button>
            ))}
          </div>
        </div>

        {/* Bars View */}
        {view === 'bars' && (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Object.entries(skills).map(([cat, skillList]) => (
              <CategoryCard
                key={cat}
                category={cat}
                skillList={skillList}
                colors={categoryColors[cat]}
              />
            ))}
          </div>
        )}

        {/* Cloud View */}
        {view === 'cloud' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {allSkills.map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="skill-badge cursor-default text-base"
                style={{ fontSize: `${0.7 + (skill.level / 100) * 0.6}rem` }}
              >
                <span>{skill.icon}</span>
                {skill.name}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
