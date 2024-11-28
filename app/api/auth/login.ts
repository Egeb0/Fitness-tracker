import { NextApiRequest, NextApiResponse } from "next";
import argon2 from "argon2";
import prisma from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing email or password" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await argon2.verify(user.password, password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ message: "Login successful", userId: user.id });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}