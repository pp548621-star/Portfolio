import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiX } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

const ALL = 'All';
const allTechs = [ALL, ...new Set(projects.flatMap(p => p.tech))];

function ProjectCard({ project, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      className="card group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400 text-amber-900 text-xs font-bold">
            <FiStar size={10} /> Featured
          </div>
        )}

        {/* Hover action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-3 right-3 flex gap-2"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center text-gray-800 hover:bg-white transition-colors shadow-lg"
          >
            <FiGithub size={16} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="w-9 h-9 rounded-lg bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors shadow-lg"
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key features */}
        <ul className="mb-4 space-y-1">
          {project.features.slice(0, 3).map(feat => (
            <li key={feat} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
              {feat}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="tag bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-800/30"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL);
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === ALL ? projects : projects.filter(p => p.tech.includes(filter));
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-300">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block text-primary-500 font-mono text-sm font-semibold mb-3 tracking-wider uppercase">
            ∙ what I've built ∙
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of projects that reflect my passion for building useful software.
          </p>
        </motion.div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTechs.slice(0, 10).map(tech => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { setFilter(tech); setShowAll(false); }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === tech
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {tech}
              {filter === tech && tech !== ALL && (
                <span className="ml-2 opacity-70" onClick={(e) => { e.stopPropagation(); setFilter(ALL); }}>
                  <FiX size={10} className="inline" />
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
            <AnimatePresence>
              {displayed.map((project, i) => (
                <ProjectCard key={project.id} project={project} i={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Show More */}
        {filtered.length > 6 && (
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAll(!showAll)}
              className="btn-outline"
            >
              {showAll ? 'Show Less' : `Show All ${filtered.length} Projects`}
            </motion.button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 dark:text-gray-600">
            <div className="text-5xl mb-4">🔍</div>
            <p>No projects match this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
