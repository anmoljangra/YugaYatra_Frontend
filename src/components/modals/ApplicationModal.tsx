"use client";

import { useState, useEffect } from "react";
import { Modal } from "@/components/ui/modal";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { internships } from "@/data/internships";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrackId?: string;
}

export function ApplicationModal({
  isOpen,
  onClose,
  initialTrackId,
}: ApplicationModalProps) {
  const [selectedTrack, setSelectedTrack] = useState<string>("web-development");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [gradYear, setGradYear] = useState("2026");
  const [portfolio, setPortfolio] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialTrackId) {
      setSelectedTrack(initialTrackId);
    }
  }, [initialTrackId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setCollege("");
    setPortfolio("");
    setNotes("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title="Apply for Internship" size="lg">
      <div className="p-6 sm:p-8">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <p className="text-xs text-slate-500 mb-4">
                Fill in the details below. Our admissions and engineering team will review your
                application and schedule a 15-minute alignment call.
              </p>
            </div>

            {/* Select Track */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Internship Track <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedTrack}
                onChange={(e) => setSelectedTrack(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm text-slate-800"
              >
                {internships.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title} ({t.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Name & Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm text-slate-800"
                />
              </div>
            </div>

            {/* Phone & College */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  College / University
                </label>
                <input
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  placeholder="e.g. NIT / VTU / IIT / SRM"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm text-slate-800"
                />
              </div>
            </div>

            {/* Grad year & GitHub / Portfolio */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Graduation Year
                </label>
                <select
                  value={gradYear}
                  onChange={(e) => setGradYear(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm text-slate-800"
                >
                  <option value="2024">2024 (Graduate)</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028 or later</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  GitHub / Portfolio URL
                </label>
                <input
                  type="url"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  placeholder="https://github.com/username"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm text-slate-800"
                />
              </div>
            </div>

            {/* Note */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Why do you want to join YugaYatra?
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tell us what you hope to build or learn..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm text-slate-800"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 font-semibold rounded-xl bg-gold text-[#0a0a0a] hover:bg-gold-light py-3.5 px-6 text-sm shadow-md transition-all cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
              Application Received!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-slate-900">{fullName}</strong>. We have received
              your application for the{" "}
              <strong className="text-slate-900">
                {internships.find((t) => t.id === selectedTrack)?.title}
              </strong>{" "}
              internship program.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-xs text-slate-600 mb-6 text-left">
              <p className="font-semibold text-slate-800 mb-1">What happens next?</p>
              <p>1. Our engineering mentors review your profile within 48 hours.</p>
              <p className="mt-1">
                2. You will receive an email/WhatsApp update with your interview schedule.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center font-semibold rounded-xl bg-[#0a0a0a] text-white hover:bg-slate-800 px-6 py-2.5 text-xs transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}
