import { prisma } from "@/lib/prisma";

export async function createOrganization(userId: string) {
  const org = await prisma.organization.create({
    data: {
      name: "My Workspace",
      members: {
        create: {
          userId,
          role: "OWNER",
        },
      },
    },
  });

  return org;
}
