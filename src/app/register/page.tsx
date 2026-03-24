"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? "Registration failed.");
      setLoading(false);
    } else {
      router.push("/login?registered=1");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4 py-8">
      <div className="retro-card w-full max-w-sm">
        {/* Title bar */}
        <div
          className="flex items-center px-3 py-1 gap-2"
          style={{ backgroundColor: "#800000" }}
        >
          <span className="text-white font-bold text-sm">📋 New Member Registration</span>
          <div className="ml-auto">
            <span className="text-xs px-2 bg-retro-silver border-win95-raised cursor-pointer" style={{ color: "#c0c0c0" }}>
              X
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-3 bg-[#c0c0c0]">
          {error && (
            <p className="text-red-800 text-sm font-bold border-win95-inset bg-white p-2">
              ⚠ {error}
            </p>
          )}

          <label className="text-sm font-bold">Your Name:</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-win95-inset px-2 py-1 text-sm bg-white w-full outline-none"
          />

          <label className="text-sm font-bold">Email Address:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-win95-inset px-2 py-1 text-sm bg-white w-full outline-none"
          />

          <label className="text-sm font-bold">Password (min 8 chars):</label>
          <input
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-win95-inset px-2 py-1 text-sm bg-white w-full outline-none"
          />

          <button type="submit" disabled={loading} className="retro-btn text-sm mt-2 w-full">
            {loading ? "Registering..." : "🌟 Create Account — It&apos;s FREE!!"}
          </button>

          <p className="text-center text-xs mt-1">
            Already a member?{" "}
            <Link href="/login" className="underline font-bold" style={{ color: "#000080" }}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
