import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs"; // Use bcryptjs for hashing passwords

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, password, dateOfBirth, gender } = req.body;

    // Validate input
    if (!name || !email || !password || !dateOfBirth || !gender) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      // Check if the email is already registered
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ error: "Email already registered." });
      }

      // Validate and parse dateOfBirth
      const parsedDate = Date.parse(dateOfBirth);
      if (isNaN(parsedDate)) {
        return res.status(400).json({ error: "Invalid date format." });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Save the user to the database with hashed password
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword, // Store the hashed password
          dateOfBirth: new Date(parsedDate),
          gender,
        },
      });

      console.log("New user registered:", newUser);

      // Respond with success
      res.status(201).json({ message: "Registration successful!" });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  } else {
    // Handle non-POST requests
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
