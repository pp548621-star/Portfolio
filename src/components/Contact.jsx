import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiCheckCircle, FiMapPin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';
import emailjs from '@emailjs/browser';

const socials = [
  { icon: FiGithub,   label: 'GitHub',   href: personalInfo.github,   color: 'hover:bg-gray-800 hover:border-gray-800' },
  { icon: FiLinkedin, label: 'LinkedIn', href: personalInfo.linkedin, color: 'hover:bg-blue-600  hover:border-blue-600' },
  { icon: SiLeetcode, label: 'LeetCode', href: personalInfo.leetcode, color: 'hover:bg-[#FFA116] hover:border-[#FFA116]' },
  { icon: FiMail,     label: 'Email',    href: `mailto:${personalInfo.email}`, color: 'hover:bg-primary-500 hover:border-primary-500' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const formRef = useRef(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Your live EmailJS IDs
    const SERVICE_ID = 'service_w730dnl'; 
    const TEMPLATE_ID = 'template_3rmq28k'; 
    const PUBLIC_KEY = 'Ufd6-fPWmKO3CUMee'; 

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-dark-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full border-2 border-dashed border-primary-200 dark:border-primary-800/30 pointer-events-none"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-500 font-mono text-sm font-semibold mb-3 tracking-wider uppercase">
            ∙ get in touch ∙
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Whether it's a job opportunity, a collaboration idea, or just a friendly hello — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Let's build something together 🚀
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  I'm currently open to new opportunities and collaborations.
                  My inbox is always open — whether for a quick question or a long-term project.
                </p>

                {/* Contact details */}
                <div className="space-y-4 mb-8">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-dark-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center text-white">
                      <FiMail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 dark:text-gray-500">Email me at</div>
                      <div className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary-500 transition-colors">
                        {personalInfo.email}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-dark-300">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                      <FiMapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 dark:text-gray-500">Based in</div>
                      <div className="font-semibold text-gray-800 dark:text-gray-200">{personalInfo.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Find me on</p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, label, href, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={label}
                      className={`w-11 h-11 rounded-xl border-2 border-gray-200 dark:border-white/10
                                 flex items-center justify-center
                                 text-gray-600 dark:text-gray-400 hover:text-white
                                 ${color} transition-all duration-200`}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                    <FiCheckCircle size={40} className="text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mb-4">
                    <FiSend size={40} className="text-rose-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Something went wrong</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Failed to send message. Please try again or email me directly at {personalInfo.email}
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-primary-500 font-semibold hover:underline"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl text-sm
                                   bg-gray-50 dark:bg-dark-300 
                                   border border-gray-200 dark:border-white/10
                                   text-gray-900 dark:text-gray-100
                                   placeholder-gray-400 dark:placeholder-gray-600
                                   focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500
                                   transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl text-sm
                                   bg-gray-50 dark:bg-dark-300 
                                   border border-gray-200 dark:border-white/10
                                   text-gray-900 dark:text-gray-100
                                   placeholder-gray-400 dark:placeholder-gray-600
                                   focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500
                                   transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Job opportunity / Collaboration / Hello!"
                      className="w-full px-4 py-2.5 rounded-xl text-sm
                                 bg-gray-50 dark:bg-dark-300 
                                 border border-gray-200 dark:border-white/10
                                 text-gray-900 dark:text-gray-100
                                 placeholder-gray-400 dark:placeholder-gray-600
                                 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500
                                 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your idea or opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl text-sm resize-none
                                 bg-gray-50 dark:bg-dark-300 
                                 border border-gray-200 dark:border-white/10
                                 text-gray-900 dark:text-gray-100
                                 placeholder-gray-400 dark:placeholder-gray-600
                                 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500
                                 transition-all duration-200"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
