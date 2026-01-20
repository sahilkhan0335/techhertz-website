"use client";
import { useEffect, useState } from "react";

const OPEN_EVENT = "open-contact-modal";

const ContactModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT, handleOpen);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-2000 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl border border-gray-200 p-6 sm:p-8 relative">
        <button
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 h-9 w-9 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          ×
        </button>
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Start a Project</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Share a few details and we&apos;ll reply within one business day.
          </p>
        </div>

        <form className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col text-sm font-medium text-gray-700 space-y-1">
              <span>Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <label className="flex flex-col text-sm font-medium text-gray-700 space-y-1">
              <span>Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          <label className="flex flex-col text-sm font-medium text-gray-700 space-y-1">
            <span>Project Details</span>
            <textarea
              rows={4}
              placeholder="What do you need help with?"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
              Typically respond within 1 business day
            </div>
            <button
              type="submit"
              className="inline-flex justify-center items-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const triggerContactModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_EVENT));
  }
};

export default ContactModal;
