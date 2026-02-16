import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  type = "danger",
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md glass-card p-6 md:p-8 border border-white/10"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col items-center text-center">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                type === "danger"
                  ? "bg-accent-red/10 text-accent-red"
                  : "bg-accent-gold/10 text-accent-gold"
              }`}
            >
              <AlertTriangle size={32} />
            </div>

            <h3 className="text-2xl font-bold mb-3 text-gradient">{title}</h3>
            <p className="text-slate-400 mb-8 font-sans">{message}</p>

            <div className="flex gap-4 w-full">
              <button
                onClick={onClose}
                className="flex-1 py-4 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className={`flex-1 py-4 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                  type === "danger"
                    ? "bg-accent-red text-white hover:bg-red-600 shadow-lg shadow-red-500/20"
                    : "bg-accent-gold text-white hover:bg-yellow-600 shadow-lg shadow-gold-500/20"
                }`}
              >
                {confirmText}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ConfirmModal;
