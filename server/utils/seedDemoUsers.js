import bcrypt from "bcrypt";
import User from "../models/User.js";

const DEMO_PASSWORD = "123456";

const demoUsers = [
  { email: "admin@test.in", role: "admin" },
  { email: "user1@test.in", role: "user" },
  { email: "user2@test.in", role: "user" }
];

export async function seedDemoUsers() {
  const hashedPassword = await bcrypt.hash(DEMO_PASSWORD, 10);

  for (const demoUser of demoUsers) {
    await User.findOneAndUpdate(
      { email: demoUser.email },
      {
        $set: {
          email: demoUser.email,
          role: demoUser.role,
          password: hashedPassword
        }
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true
      }
    );
  }
}
