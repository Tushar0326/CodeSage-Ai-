export const runtime = "nodejs";

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

  if (payload.action === "opened" && payload.pull_request) {
    const pr = payload.pull_request;

    // trigger async review later
    console.log("PR opened:", pr.number);
  }

  return new Response("OK");
}