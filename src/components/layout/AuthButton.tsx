"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

interface AuthButtonProps {
  session: {
    user?: { name?: string | null; email?: string | null } | null;
  } | null;
}

export default function AuthButton({ session }: AuthButtonProps) {
  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-white text-xs hidden sm:inline" style={{ fontFamily: "'Comic Sans MS', cursive" }}>
          👤 {session.user.name ?? session.user.email}
        </span>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="retro-btn"
          style={{ fontSize: "0.7rem", padding: "2px 10px" }}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="retro-btn"
      style={{ fontSize: "0.7rem", padding: "2px 10px" }}
    >
      Login / Register
    </Link>
  );
}

// Standalone sign-out button for use on the VIP page
export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="retro-btn text-sm"
    >
      🚪 Sign Out of VIP Zone
    </button>
  );
}
