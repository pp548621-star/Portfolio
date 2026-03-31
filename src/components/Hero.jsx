import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiMapPin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

function FloatingOrb({ color, size, left, top, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left,
        top,
        background: color,
        filter: 'blur(60px)',
        opacity: 0.35,
      }}
      animate={{ y: [-15, 15, -15] }}
      transition={{
        duration: 6 + delay,
        ease: 'easeInOut',
        repeat: Infinity,
        delay,
      }}
    />
  );
}

function ParticleField() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary-400/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient grid-bg"
    >
      {/* Background Orbs */}
      <FloatingOrb color="#6366f1" size="480px" left="-120px" top="-80px" delay={0} />
      <FloatingOrb color="#8b5cf6" size="380px" left="60%" top="60%" delay={2} />
      <FloatingOrb color="#22d3ee" size="300px" left="80%" top="-50px" delay={4} />

      <ParticleField />

      <div className="section-container relative z-10 py-32 pt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
                         bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/30
                         text-emerald-600 dark:text-emerald-400 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-mono text-gray-500 dark:text-gray-400 mb-6 h-8"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Software Engineer',
                  2000,
                  'React Enthusiast',
                  2000,
                  'Open Source Contributor',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary-500 dark:text-primary-400"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-3 max-w-md leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-1.5 text-gray-500 dark:text-gray-500 text-sm mb-8"
            >
              <FiMapPin size={14} />
              {personalInfo.location}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleScroll('#projects')}
                className="btn-primary text-base px-8 py-3.5"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleScroll('#contact')}
                className="btn-outline text-base px-8 py-3.5"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="flex items-center gap-4"
            >
              {[
                { Icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
                { Icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { Icon: SiLeetcode, href: personalInfo.leetcode, label: 'LeetCode' },
                { Icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center
                             bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400
                             hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500
                             transition-all duration-200 shadow-sm"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <span className="text-sm text-gray-500 dark:text-gray-500 font-mono">
                Let's build something great
              </span>
            </motion.div>
          </div>

          {/* Right: Image + Decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #22d3ee, #6366f1)',
                  padding: '3px',
                  borderRadius: '50%',
                }}
              />
              {/* Image container */}
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-300"
                style={{ boxShadow: '0 0 0 4px rgba(99,102,241,0.3), 0 0 60px rgba(99,102,241,0.2)' }}
              >
                <img
                  src="/image.png"
                  alt={`${personalInfo.name} - Full Stack Developer`}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 font-mono">scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown className="text-primary-500" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
