import { motion } from 'framer-motion';
import { FiClock, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import { blogPosts } from '../data/portfolioData';

function BlogCard({ post, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="card group cursor-pointer overflow-hidden"
    >
      {/* Gradient header */}
      <div className={`h-2 w-full bg-gradient-to-r ${post.color}`} />

      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${post.color} text-white`}>
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <FiClock size={11} /> {post.readTime}
          </span>
        </div>

        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.tags.map(tag => (
            <span key={tag} className="tag bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-xs">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
          <span className="text-xs text-gray-400 dark:text-gray-500">{post.date}</span>
          <span className="flex items-center gap-1 text-primary-500 text-sm font-semibold group-hover:gap-2 transition-all">
            Read More <FiArrowRight size={14} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white dark:bg-dark-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-500 font-mono text-sm font-semibold mb-3 tracking-wider uppercase">
            ∙ thoughts &amp; tutorials ∙
          </span>
          <h2 className="section-title">
            Blog &amp; <span className="gradient-text">Articles</span>
          </h2>
          <p className="section-subtitle">
            I write about things I learn, build, and find interesting in the world of software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} i={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FiBookOpen size={16} /> View All Articles
          </motion.a>
        </div>
      </div>
    </section>
  );
}
