import bcrypt from "bcryptjs";
import { getSupabaseAdmin } from "@/lib/supabase";

export interface StoredUser {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
}

export async function findUserByEmail(email: string): Promise<StoredUser | undefined> {
  const { data, error } = await getSupabaseAdmin()
    .from("users")
    .select("id, email, name, password_hash")
    .eq("email", email.toLowerCase())
    .single();

  if (error || !data) return undefined;

  return {
    id: data.id,
    email: data.email,
    name: data.name,
    passwordHash: data.password_hash,
  };
}

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<StoredUser> {
  const existing = await findUserByEmail(email);
  if (existing) throw new Error("Email already registered");

  const passwordHash = await bcrypt.hash(password, 12);

  const { data, error } = await getSupabaseAdmin()
    .from("users")
    .insert({
      email: email.toLowerCase(),
      name,
      password_hash: passwordHash,
    })
    .select("id, email, name, password_hash")
    .single();

  if (error || !data) throw new Error(error?.message ?? "Failed to create user");

  return {
    id: data.id,
    email: data.email,
    name: data.name,
    passwordHash: data.password_hash,
  };
}

export async function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}
