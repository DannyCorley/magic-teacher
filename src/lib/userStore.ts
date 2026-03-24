import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

export interface StoredUser {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
}

const DB_PATH = path.join(process.cwd(), "users.json");

function loadUsers(): StoredUser[] {
  try {
    if (!fs.existsSync(DB_PATH)) return [];
    return JSON.parse(fs.readFileSync(DB_PATH, "utf-8")) as StoredUser[];
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]): void {
  fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));
}

export function findUserByEmail(email: string): StoredUser | undefined {
  return loadUsers().find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<StoredUser> {
  const users = loadUsers();
  if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
    throw new Error("Email already registered");
  }
  const passwordHash = await bcrypt.hash(password, 12);
  const newUser: StoredUser = {
    id: crypto.randomUUID(),
    email: email.toLowerCase(),
    name,
    passwordHash,
  };
  users.push(newUser);
  saveUsers(users);
  return newUser;
}

export async function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}
