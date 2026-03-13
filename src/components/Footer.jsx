import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiCode } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Playground', href: '#playground' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FiGithub,   href: personalInfo.github,   label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter,  href: personalInfo.twitter,  label: 'Twitter' },
  { icon: FiMail,     href: `mailto:${personalInfo.email}`,    label: 'Email' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-300 border-t border-white/5 pt-16 pb-8">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white">
                <FiCode size={16} />
              </div>
              <span className="font-bold text-xl gradient-text">Alex Dev</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
              Full Stack Developer passionate about building products that matter. 
              Open to new opportunities.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 text-gray-400 hover:bg-primary-500 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-500 hover:text-primary-400 text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Let's Talk</h4>
            <p className="text-gray-500 text-sm mb-4">
              Open to internships, full-time roles, and freelance projects.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
            >
              <FiMail size={14} />
              {personalInfo.email}
            </a>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-400 text-sm">Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Built with <FiHeart size={12} className="text-rose-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
