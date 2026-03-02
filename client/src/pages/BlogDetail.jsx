import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import API from "../utils/api";
import SEO from "../components/SEO";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await API.get(`blogs/${id}`);
        setBlog(data.data.blog);
      } catch {
        console.error("Error fetching blog:");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        Loading...
      </div>
    );
  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 text-accent-red">
        Blog not found
      </div>
    );

  return (
    <article className="min-h-screen pt-32 pb-20 container-custom">
      <SEO
        title={blog.title}
        description={blog.excerpt || blog.content?.substring(0, 160)}
        image={
          blog.image
            ? `${(import.meta.env.VITE_IMAGE_URL || "http://localhost:5000").replace(/\/$/, "")}${blog.image}`
            : null
        }
        type="article"
      />
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 text-xs font-bold uppercase tracking-widest"
      >
        <ArrowLeft size={16} /> Back to Journal
      </Link>

      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-3xl md:text-6xl font-bold text-gradient mb-8 leading-tight max-w-4xl">
          {blog.title}
        </h1>
        <div className="flex flex-wrap gap-4 md:gap-8 py-6 border-y border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center text-accent-red font-bold">
              {blog.author?.name?.charAt(0)}
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">
                Author
              </p>
              <p className="text-sm font-bold">{blog.author?.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="text-accent-red" size={20} />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">
                Date
              </p>
              <p className="text-sm font-bold">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-accent-red" size={20} />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">
                Reading Time
              </p>
              <p className="text-sm font-bold">5 min read</p>
            </div>
          </div>
        </div>
      </motion.header>

      {blog.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-16 aspect-video rounded-2xl overflow-hidden glass border border-white/5"
        >
          <img
            src={`${(import.meta.env.VITE_IMAGE_URL || "http://localhost:5000").replace(/\/$/, "")}${blog.image}`}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      <div className="prose prose-invert max-w-4xl mx-auto font-sans leading-loose text-slate-300">
        <div className="whitespace-pre-wrap text-lg">{blog.content}</div>
      </div>
    </article>
  );
};

export default BlogDetail;
