import { BetterAuth } from "better-auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = BetterAuth({
  database: prisma,
  providers: {
    email: true,
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
