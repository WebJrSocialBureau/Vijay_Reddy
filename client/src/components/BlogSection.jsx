import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import API from "../utils/api";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await API.get("blogs?limit=3");
        setBlogs(data.data.blogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading && blogs.length === 0) return null;

  return (
    <section id="blog" className="section-padding bg-navy-950/20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-accent-red font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              Latest Insights
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-gradient leading-tight"
            >
              News & Perspectives
            </motion.h2>
          </div>
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs font-bold uppercase tracking-widest border-b-2 border-accent-red pb-2 flex items-center gap-2"
            >
              View All Posts <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${blog._id}`}>
                <div className="glass-card p-0 overflow-hidden h-full flex flex-col">
                  {blog.image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={`http://localhost:5000${blog.image}`}
                        alt={blog.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-8 grow">
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />{" "}
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={12} /> {blog.author?.name}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 line-clamp-2 group-hover:text-accent-red transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-3 mb-6 font-sans">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
