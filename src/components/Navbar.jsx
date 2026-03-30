import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiCode } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1));
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-dark-300/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5 shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 font-bold text-xl"
            >
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white">
                <FiCode size={16} />
              </div>
              <span className="gradient-text font-bold">Pavan Patel</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary-500 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="w-9 h-9 rounded-lg flex items-center justify-center
                           bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-300
                           hover:bg-primary-50 dark:hover:bg-primary-900/20
                           hover:text-primary-500 transition-all duration-200"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'moon' : 'sun'}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="hidden sm:flex btn-primary text-sm py-2 px-4"
              >
                Resume
              </motion.a>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center
                           bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-300"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden
                       bg-white/95 dark:bg-dark-300/95 backdrop-blur-xl
                       border-b border-gray-200 dark:border-white/5
                       shadow-xl"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link px-4 py-2.5 rounded-xl text-base ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : ''
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a href="/resume.pdf" download className="btn-primary text-center mt-2">
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
