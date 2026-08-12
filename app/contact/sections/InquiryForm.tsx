"use client";

import { useState } from "react";
import { Section, Container } from "@/components/layout";
import { useCursor } from "@/lib/hooks/useCursor";

const INQUIRY_TYPES = [
  { id: "sales", label: "Automotive & Sales", email: "customercare@mahindra.com" },
  { id: "investor", label: "Investor Relations", email: "investor.relations@mahindra.com" },
  { id: "careers", label: "Careers & Talent", email: "careers@mahindra.com" },
  { id: "media", label: "Press & Media", email: "communications@mahindra.com" },
  { id: "general", label: "General Corporate", email: "group.communications@mahindra.com" },
];

export function InquiryForm() {
  const [activeTab, setActiveTab] = useState("sales");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { setVariant } = useCursor();

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const currentCategory = INQUIRY_TYPES.find((t) => t.id === activeTab);

  return (
    <Section className="py-16 bg-ink-900 border-t border-line">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Category Selector */}
          <div className="lg:col-span-4">
            <p className="t-label text-ember font-bold mb-3">(01) INQUIRY CATEGORY</p>
            <h2 className="t-h2 text-bone font-bold mb-6">Select your inquiry type</h2>
            <p className="t-body text-bone-dim mb-8">
              Direct your message straight to the specialized division for expedited response.
            </p>

            <div className="flex flex-col gap-3">
              {INQUIRY_TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleTabChange(type.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    activeTab === type.id
                      ? "border-ember bg-ember/10 text-bone shadow-lg shadow-ember/5"
                      : "border-line bg-ink-800/40 text-bone-dim hover:border-bone/40 hover:text-bone"
                  }`}
                  onMouseEnter={() => setVariant("ring")}
                  onMouseLeave={() => setVariant("default")}
                >
                  <span className="font-semibold">{type.label}</span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      activeTab === type.id ? "bg-ember" : "bg-bone-dim/40"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl border border-line bg-ink-800/30">
              <p className="t-label text-bone-dim mb-1">DIRECT DESK EMAIL</p>
              <p className="text-ember font-mono text-sm font-semibold">{currentCategory?.email}</p>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-8">
            <div className="p-8 lg:p-12 rounded-3xl border border-line bg-ink-800/50 backdrop-blur-xl relative overflow-hidden">
              <p className="t-label text-ember font-bold mb-2">SEND MESSAGE</p>
              <h3 className="t-h3 text-bone font-bold mb-8">
                {currentCategory?.label} Inquiry
              </h3>

              {submitted ? (
                <div className="py-16 text-center animate-in fade-in zoom-in duration-300">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ember/20 text-ember mb-6 border border-ember/40">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-bone mb-2">Message Transmitted</h4>
                  <p className="text-bone-dim max-w-md mx-auto mb-8">
                    Thank you, <span className="text-bone font-semibold">{formData.name}</span>. Your {currentCategory?.label.toLowerCase()} inquiry has been received. Our representative will contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="px-6 py-3 rounded-full border border-ember text-ember font-bold hover:bg-ember hover:text-ink-900 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-bone-dim mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-bone placeholder-bone-dim/40 focus:border-ember focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-bone-dim mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@example.com"
                        className="w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-bone placeholder-bone-dim/40 focus:border-ember focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-bone-dim mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-bone placeholder-bone-dim/40 focus:border-ember focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-bone-dim mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Brief title of inquiry"
                        className="w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-bone placeholder-bone-dim/40 focus:border-ember focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-bone-dim mb-2">
                      Detailed Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your inquiry, vehicle model, business interest, or feedback..."
                      className="w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-bone placeholder-bone-dim/40 focus:border-ember focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <p className="text-xs text-bone-dim">
                      * Required fields. Protected by Mahindra Privacy Guidelines.
                    </p>
                    <button
                      type="submit"
                      className="px-8 py-4 rounded-full bg-ember text-ink-900 font-bold uppercase tracking-wider transition-all duration-300 hover:bg-ember/90 hover:scale-[1.02]"
                      onMouseEnter={() => setVariant("ring")}
                      onMouseLeave={() => setVariant("default")}
                    >
                      Submit Form →
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
