import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiGitPullRequest, FiGitMerge, FiUsers } from 'react-icons/fi';
import { githubStats, personalInfo } from '../data/portfolioData';

const statCards = [
  { icon: FiGithub,        label: 'Public Repos',   value: githubStats.repos,      color: 'from-gray-500 to-gray-700' },
  { icon: FiStar,          label: 'Total Stars',    value: githubStats.stars,      color: 'from-amber-400 to-orange-500' },
  { icon: FiGitBranch,     label: 'Total Commits',  value: githubStats.commits,    color: 'from-blue-400 to-indigo-500' },
  { icon: FiGitPullRequest,label: 'Pull Requests',  value: githubStats.prs,        color: 'from-emerald-400 to-teal-500' },
  { icon: FiGitMerge,      label: 'Issues Closed',  value: githubStats.issues,     color: 'from-violet-400 to-purple-600' },
  { icon: FiUsers,         label: 'Followers',      value: githubStats.followers,  color: 'from-rose-400 to-pink-600' },
];

function ContributionGraph() {
  const weeks = 52;
  const days = 7;
  const levels = [0, 1, 2, 3, 4];
  const levelColors = [
    'bg-gray-100 dark:bg-white/5',
    'bg-primary-200 dark:bg-primary-900',
    'bg-primary-400 dark:bg-primary-700',
    'bg-primary-500 dark:bg-primary-500',
    'bg-primary-600 dark:bg-primary-400',
  ];

  // Generate pseudo-random contributions
  const grid = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      const seed = w * 7 + d;
      const val = Math.sin(seed * 0.4) * Math.cos(seed * 0.3) * 2;
      const rand = Math.abs(val + Math.sin(seed * 1.7)) % 1;
      if (rand < 0.35) return 0;
      if (rand < 0.55) return 1;
      if (rand < 0.75) return 2;
      if (rand < 0.9)  return 3;
      return 4;
    })
  );

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-max">
        {/* Month labels */}
        <div className="flex gap-1 mb-1 pl-8">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} style={{ width: `${(weeks / 12) * 17}px` }} className="text-xs text-gray-400 dark:text-gray-600 text-left">
              {months[i]}
            </div>
          ))}
        </div>
        <div className="flex gap-0.5">
          {/* Day labels */}
          <div className="flex flex-col gap-0.5 pr-2 pt-0.5">
            {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((d, i) => (
              <div key={i} className="h-3 text-xs text-gray-400 dark:text-gray-600 flex items-center">{d}</div>
            ))}
          </div>
          {/* Grid */}
          {grid.map((week, w) => (
            <div key={w} className="flex flex-col gap-0.5">
              {week.map((level, d) => (
                <motion.div
                  key={d}
                  title={`${level} contributions`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (w * 7 + d) * 0.001, duration: 0.3 }}
                  className={`w-3 h-3 rounded-sm ${levelColors[level]} cursor-pointer hover:ring-2 hover:ring-primary-400 transition-all duration-150`}
                />
              ))}
            </div>
          ))}
        </div>
        {/* Legend */}
        <div className="flex items-center gap-1.5 mt-3 justify-end">
          <span className="text-xs text-gray-400 dark:text-gray-600">Less</span>
          {levelColors.map((cls, i) => (
            <div key={i} className={`w-3 h-3 rounded-sm ${cls}`} />
          ))}
          <span className="text-xs text-gray-400 dark:text-gray-600">More</span>
        </div>
      </div>
    </div>
  );
}

export default function GitHub() {
  return (
    <section id="github" className="py-24 bg-gray-50 dark:bg-dark-200">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-500 font-mono text-sm font-semibold mb-3 tracking-wider uppercase">
            ∙ open source ∙
          </span>
          <h2 className="section-title">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-subtitle">
            Consistent contributions, open source love, and repositories that speak for themselves.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {statCards.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="card p-4 text-center"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mx-auto mb-3`}>
                <s.icon size={18} />
              </div>
              <div className="text-2xl font-extrabold text-gray-900 dark:text-white">
                {s.value}+
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <FiGithub size={18} className="text-primary-500" />
              Contribution Graph — {githubStats.username}
            </h3>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-500 hover:text-primary-600 font-medium transition-colors"
            >
              View on GitHub →
            </motion.a>
          </div>
          <ContributionGraph />
          <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-4 font-mono">
            * Visualized contributions for the past year
          </p>
        </motion.div>
      </div>
    </section>
  );
}
