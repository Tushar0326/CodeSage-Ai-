import { Octokit } from "@octokit/rest";
import { createAppAuth } from "@octokit/auth-app";

export function getGitHubAppClient(installationId: number) {
  return new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: process.env.GITHUB_APP_ID!,
      privateKey: process.env.GITHUB_PRIVATE_KEY!,
      installationId,
    },
  });
}
