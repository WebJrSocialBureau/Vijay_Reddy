import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Edit2, Trash2, Eye, LogOut } from "lucide-react";
import toast from "react-hot-toast";
import API from "../utils/api";
import ConfirmModal from "../components/ConfirmModal";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: null });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await API.get("blogs");
        setBlogs(data.data.blogs);
      } catch (err) {
        if (err.response?.status === 401) {
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [navigate]);

  const confirmDelete = async () => {
    const id = deleteModal.id;
    try {
      await API.delete(`blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
      toast.success("Blog deleted successfully");
    } catch (err) {
      toast.error("Failed to delete blog");
    }
  };

  const handleDelete = (id) => {
    setDeleteModal({ isOpen: true, id });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen pt-32 pb-20 container-custom">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-gradient mb-2">
            Admin Dashboard
          </h1>
          <p className="text-slate-400">
            Manage your journal entries and perspectives.
          </p>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            to="/admin/create"
            className="btn-premium flex items-center justify-center gap-2 py-3 px-4 md:px-6 grow md:grow-0 text-sm md:text-base font-bold transition-all hover:scale-105"
          >
            <span className="hidden xs:inline">Create Blog</span>
            <span className="xs:hidden">Create</span>
          </Link>
          <button
            onClick={handleLogout}
            className="glass p-3 md:p-3 rounded-lg text-slate-400 hover:text-accent-red transition-colors shrink-0"
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-[0.2em]">
          Loading Dashboard...
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block glass-card overflow-hidden p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                      Title
                    </th>
                    <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                      Date
                    </th>
                    <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                      Author
                    </th>
                    <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400 text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {blogs.map((blog) => (
                    <tr
                      key={blog._id}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="px-8 py-6">
                        <div className="font-bold text-white max-w-md truncate">
                          {blog.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-1 truncate">
                          {blog.excerpt}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-sm text-slate-400">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-8 py-6 text-sm text-slate-400">
                        {blog.author?.name}
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-end gap-3">
                          <Link
                            to={`/blog/${blog._id}`}
                            className="p-2 glass rounded-lg text-slate-400 hover:text-white transition-colors"
                            title="View"
                          >
                            <Eye size={16} />
                          </Link>
                          <Link
                            to={`/admin/edit/${blog._id}`}
                            className="p-2 glass rounded-lg text-slate-400 hover:text-accent-gold transition-colors"
                            title="Edit"
                          >
                            <Edit2 size={16} />
                          </Link>
                          <button
                            onClick={() => handleDelete(blog._id)}
                            className="p-2 glass rounded-lg text-slate-400 hover:text-accent-red transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="glass-card p-6 border border-white/5 transition-all active:scale-[0.98]"
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                      <span className="flex items-center gap-1.5">
                        <Eye size={12} className="text-accent-red" />{" "}
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Plus size={12} className="text-accent-red" />{" "}
                        {blog.author?.name}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex gap-2">
                      <Link
                        to={`/blog/${blog._id}`}
                        className="p-3 glass rounded-lg text-slate-400 hover:text-white transition-colors"
                      >
                        <Eye size={18} />
                      </Link>
                      <Link
                        to={`/admin/edit/${blog._id}`}
                        className="p-3 glass rounded-lg text-slate-400 hover:text-accent-gold transition-colors"
                      >
                        <Edit2 size={18} />
                      </Link>
                    </div>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="p-3 glass rounded-lg text-slate-400 hover:text-accent-red transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {blogs.length === 0 && (
            <div className="glass-card py-20 text-center text-slate-400 border border-dashed border-white/10">
              <p className="font-bold uppercase tracking-widest text-sm mb-2">
                No Content Found
              </p>
              <p className="text-xs opacity-60">
                Start by creating your first blog post!
              </p>
            </div>
          )}
        </>
      )}
      <ConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, id: null })}
        onConfirm={confirmDelete}
        title="Delete Post"
        message="Are you sure you want to permanently remove this blog post? This action cannot be undone."
        confirmText="Remove Post"
      />
    </div>
  );
};

export default AdminDashboard;
