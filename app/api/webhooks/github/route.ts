import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const payload = await req.json();

  // App installed
  if (payload.action === "created" && payload.installation) {
    const installationId = payload.installation.id;

    // TEMP: later we'll map to org properly
    await prisma.organization.updateMany({
      data: {
        githubInstallId: installationId,
      },
    });
  }

  return new Response("OK");
}
