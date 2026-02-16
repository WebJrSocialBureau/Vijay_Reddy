import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Upload, X, Save } from "lucide-react";
import toast from "react-hot-toast";
import API from "../utils/api";

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEdit) {
      const fetchBlog = async () => {
        try {
          const { data } = await API.get(`blogs/${id}`);
          const blog = data.data.blog;
          setFormData({
            title: blog.title,
            excerpt: blog.excerpt,
            content: blog.content,
            image: blog.image,
          });
          if (blog.image) {
            setImagePreview(
              `${(import.meta.env.VITE_IMAGE_URL || "http://localhost:5000").replace(/\/$/, "")}${blog.image}`,
            );
          }
        } catch (err) {
          setError("Failed to fetch blog");
        }
      };
      fetchBlog();
    }
  }, [id, isEdit]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!imageFile) return formData.image;
    const uploadData = new FormData();
    uploadData.append("image", imageFile);
    try {
      const { data } = await API.post("blogs/upload", uploadData);
      return data.data.url;
    } catch (err) {
      throw new Error("Image upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const imageUrl = await handleUpload();
      const payload = { ...formData, image: imageUrl };

      if (isEdit) {
        await API.patch(`blogs/${id}`, payload);
        toast.success("Blog updated successfully");
      } else {
        await API.post("blogs", payload);
        toast.success("Blog published successfully");
      }
      navigate("/admin");
    } catch (err) {
      toast.error(err.message || "Failed to save blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 container-custom">
      <Link
        to="/admin"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 text-xs font-bold uppercase tracking-widest"
      >
        <ArrowLeft size={16} /> Back to Dashboard
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gradient">
          {isEdit ? "Edit Blog Post" : "Create New Blog Post"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full bg-navy-950/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-accent-red transition-colors text-xl font-bold"
                  placeholder="The Future of Strategic Leadership..."
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  className="w-full bg-navy-950/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-accent-red transition-colors h-24 resize-none font-sans"
                  placeholder="A brief overview of your article..."
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Content
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  className="w-full bg-navy-950/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-accent-red transition-colors h-96 resize-none font-sans leading-relaxed"
                  placeholder="Write your article content here..."
                  required
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Cover Image
                </label>
                <div className="relative group">
                  {imagePreview ? (
                    <div className="aspect-4/5 rounded-xl overflow-hidden glass border border-white/10">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview("");
                          setImageFile(null);
                        }}
                        className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-lg rounded-full text-white hover:bg-accent-red transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <label className="aspect-4/5 rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-accent-red/50 hover:bg-white/5 transition-all">
                      <Upload size={32} className="text-slate-500" />
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Upload Image
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleImageChange}
                        accept="image/*"
                      />
                    </label>
                  )}
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-premium w-full flex items-center justify-center gap-2"
                >
                  <Save size={18} />{" "}
                  {loading
                    ? "Saving..."
                    : isEdit
                      ? "Update Post"
                      : "Publish Article"}
                </button>
                <Link
                  to="/admin"
                  className="block w-full text-center py-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default BlogEditor;
