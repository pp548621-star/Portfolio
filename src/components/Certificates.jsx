import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { certificates } from '../data/portfolioData';

function CertificateCard({ cert, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.5 }}
      className="card group overflow-hidden flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-dark-100">
        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-40 mix-blend-multiply z-10 transition-opacity group-hover:opacity-20`} />
        <img 
          src={cert.image} 
          alt={cert.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {cert.url && (
            <a 
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/90 dark:bg-dark-300/90 backdrop-blur-sm flex items-center justify-center text-gray-900 dark:text-white hover:text-primary-500 transition-colors shadow-lg"
              title="Verify Certificate"
            >
              <FiExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <FiAward size={18} className="text-primary-500 flex-shrink-0" />
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
            {cert.issuer}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-primary-500 transition-colors">
          {cert.title}
        </h3>
        
        <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mb-5">
          <FiCalendar size={14} />
          <span>Issued {cert.date}</span>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-3">
            <FiCheckCircle size={14} className="text-emerald-500" />
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Skills & Learnings</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map(skill => (
              <span 
                key={skill}
                className="tag bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 text-xs border border-primary-100 dark:border-primary-800/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-white dark:bg-dark-300 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-500 font-mono text-sm font-semibold mb-3 tracking-wider uppercase">
            ∙ verified learning ∙
          </span>
          <h2 className="section-title">
            <span className="gradient-text">Certificates & Achievements</span>
          </h2>
          <p className="section-subtitle">
            Professional certifications and specialized training courses I've completed to level up my skills.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
