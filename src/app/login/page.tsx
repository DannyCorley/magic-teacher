"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/vip";
  const registered = searchParams.get("registered");
  const errorParam = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(errorParam ? "Invalid credentials." : "");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password. Have you registered yet?");
      setLoading(false);
    } else {
      router.push(callbackUrl);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4 py-8">
      <div className="retro-card w-full max-w-sm">
        {/* Title bar */}
        <div
          className="flex items-center px-3 py-1 gap-2"
          style={{ backgroundColor: "#000080" }}
        >
          <span className="text-white font-bold text-sm">🔐 Member Sign-In</span>
          <div className="ml-auto">
            <span
              className="text-xs px-2 bg-retro-silver border-win95-raised cursor-pointer"
              style={{ color: "#c0c0c0" }}
            >
              X
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-3 bg-[#c0c0c0]">
          {registered && (
            <p className="text-green-800 text-sm font-bold border-win95-inset bg-white p-2">
              ✅ Registration successful! Please sign in.
            </p>
          )}
          {error && (
            <p className="text-red-800 text-sm font-bold border-win95-inset bg-white p-2">
              ⚠ {error}
            </p>
          )}

          <label className="text-sm font-bold">Email Address:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-win95-inset px-2 py-1 text-sm bg-white w-full outline-none"
          />

          <label className="text-sm font-bold">Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-win95-inset px-2 py-1 text-sm bg-white w-full outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="retro-btn text-sm mt-2 w-full"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="text-center text-xs mt-1">
            Not a member yet?{" "}
            <Link href="/register" className="underline font-bold" style={{ color: "#000080" }}>
              Register here!!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
