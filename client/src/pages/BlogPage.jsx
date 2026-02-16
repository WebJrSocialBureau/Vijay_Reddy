import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, User, Search } from "lucide-react";
import API from "../utils/api";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await API.get("blogs");
        setBlogs(data.data.blogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen pt-32 pb-20 container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
          Our Journal
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Insights, perspectives, and stories from our journey in leadership and
          social impact.
        </p>
      </motion.div>

      <div className="mb-12 relative max-w-xl mx-auto">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full glass rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-accent-red/50 transition-all font-sans"
        />
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-[0.2em]">
          Loading Journal...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${blog._id}`}>
                <div className="glass-card p-0 overflow-hidden h-full flex flex-col">
                  {blog.image && (
                    <div className="h-56 overflow-hidden">
                      <img
                        src={`${(import.meta.env.VITE_IMAGE_URL || "http://localhost:5000").replace(/\/$/, "")}${blog.image}`}
                        alt={blog.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
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
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-accent-red transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-slate-400 text-sm mb-6 line-clamp-3 font-sans leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      {!loading && filteredBlogs.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          No articles found matching your search.
        </div>
      )}
    </div>
  );
};

export default BlogPage;
