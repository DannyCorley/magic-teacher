"use client";

import { useState, useEffect } from "react";
import BlinkText from "@/components/ui/BlinkText";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

interface GuestbookSectionProps {
  isSignedIn: boolean;
}

export default function GuestbookSection({ isSignedIn }: GuestbookSectionProps) {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function fetchEntries() {
    setLoading(true);
    const res = await fetch("/api/guestbook");
    if (res.ok) {
      const data = await res.json();
      setEntries(data);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchEntries();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);

    const res = await fetch("/api/guestbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? "Failed to submit.");
    } else {
      setMessage("");
      setSuccess(true);
      setEntries((prev) => [data, ...prev]);
    }
    setSubmitting(false);
  }

  return (
    <section id="guestbook" className="max-w-3xl mx-auto px-4 py-8">
      {/* Window title bar */}
      <div className="retro-card">
        <div
          className="flex items-center px-3 py-1 gap-2"
          style={{ backgroundColor: "#000080" }}
        >
          <span className="text-white font-bold text-sm">
            📖 Sign Our Guestbook!! — <BlinkText>NEW ENTRIES WELCOME!!</BlinkText>
          </span>
          <div className="ml-auto flex gap-1">
            <span className="text-xs px-2 bg-retro-silver border-win95-raised">_</span>
            <span className="text-xs px-2 bg-retro-silver border-win95-raised">□</span>
            <span className="text-xs px-2 bg-red-600 text-white border-win95-raised">X</span>
          </div>
        </div>

        <div className="p-5 bg-[#c0c0c0]">
          <p className="text-sm mb-4 text-center">
            Welcome to our Guestbook!! You are visitor number{" "}
            <strong style={{ color: "#800000" }}>1,337,042</strong>. Please leave
            your mark on the WORLD WIDE WEB!! 🌐
          </p>

          {/* Submit form */}
          {isSignedIn ? (
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="retro-card mb-3">
                <div
                  className="px-3 py-1 text-white text-xs font-bold"
                  style={{ backgroundColor: "#008080" }}
                >
                  ✍ Leave Your Message for Posterity:
                </div>
                <div className="p-3">
                  {error && (
                    <p className="text-red-800 text-xs font-bold border-win95-inset bg-white p-2 mb-2">
                      ⚠ {error}
                    </p>
                  )}
                  {success && (
                    <p className="text-green-800 text-xs font-bold border-win95-inset bg-white p-2 mb-2">
                      ✅ Your message has been immortalised on the internet forever!!
                    </p>
                  )}
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={280}
                    rows={3}
                    required
                    placeholder="Type your message here... (max 280 characters)"
                    className="border-win95-inset px-2 py-1 text-sm bg-white w-full outline-none resize-none"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs" style={{ color: "#808080" }}>
                      {message.length}/280
                    </span>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="retro-btn text-xs"
                      style={{ padding: "4px 16px" }}
                    >
                      {submitting ? "Submitting..." : "Sign the Guestbook!! ✍"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div className="border-win95-inset bg-white p-3 text-center text-sm mb-6">
              <a href="/login" className="underline font-bold" style={{ color: "#000080" }}>
                Sign in
              </a>{" "}
              to leave a message in the guestbook!!
            </div>
          )}

          {/* Entries */}
          <div className="flex flex-col gap-3">
            {loading && (
              <p className="text-center text-sm">Loading entries...</p>
            )}
            {!loading && entries.length === 0 && (
              <p className="text-center text-sm" style={{ color: "#808080" }}>
                No entries yet. Be the first to sign!! 🖊
              </p>
            )}
            {entries.map((entry) => (
              <div key={entry.id} className="lined-paper p-3 pl-5 text-sm">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-bold" style={{ color: "#000080" }}>
                    {entry.name}
                  </span>
                  <span className="text-xs" style={{ color: "#808080" }}>
                    {new Date(entry.created_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <p>{entry.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
