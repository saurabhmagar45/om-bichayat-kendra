import React from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';
import { useWedding } from '../context/WeddingContext';

export function Toast() {
  const { toasts, removeToast } = useWedding();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full font-sans">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-xl border backdrop-blur-md transition-all duration-300 animate-in slide-in-from-bottom-5 ${
            toast.type === 'success'
              ? 'bg-[#701F35] text-[#FAF7F2] border-[#C6A15B]/50'
              : toast.type === 'error'
              ? 'bg-rose-900 text-white border-rose-700'
              : 'bg-[#4A1222] text-[#FAF7F2] border-[#C6A15B]/40'
          }`}
        >
          <div className="shrink-0 mt-0.5">
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
            ) : toast.type === 'error' ? (
              <AlertCircle className="w-4 h-4 text-rose-300" />
            ) : (
              <Info className="w-4 h-4 text-[#C6A15B]" />
            )}
          </div>
          <div className="flex-1 text-xs font-medium leading-relaxed">{toast.message}</div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-[#FAF7F2]/60 hover:text-[#FAF7F2] shrink-0 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
