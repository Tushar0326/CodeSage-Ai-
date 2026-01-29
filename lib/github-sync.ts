import { getGitHubAppClient } from "./github";
import { prisma } from "@/lib/prisma";

export async function syncRepositories(orgId: string) {
  const org = await prisma.organization.findUnique({
    where: { id: orgId },
  });

  if (!org?.githubInstallId) return;

  const octokit = getGitHubAppClient(org.githubInstallId);

  const repos = await octokit.rest.apps.listReposAccessibleToInstallation();

  for (const repo of repos.data.repositories) {
    await prisma.repository.upsert({
      where: {
        githubRepoId_organizationId: {
          githubRepoId: repo.id,
          organizationId: orgId,
        },
      },
      update: {},
      create: {
        githubRepoId: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        organizationId: orgId,
      },
    });
  }
}
