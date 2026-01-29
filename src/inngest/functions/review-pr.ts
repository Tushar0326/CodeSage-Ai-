import { inngest } from "../client";
import { prisma } from "@/lib/prisma";
import { getGitHubAppClient } from "@/lib/github";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export const reviewPullRequest = inngest.createFunction(
  { id: "review-pull-request" },
  { event: "github/pr.opened" },

  async ({ event }: { event: any }) => {
    const {
      repositoryId,
      installationId,
      owner,
      repo,
      prNumber,
    } = event.data;

    const octokit = getGitHubAppClient(installationId);

    const diff = await octokit.request(
      "GET /repos/{owner}/{repo}/pulls/{pull_number}",
      {
        owner,
        repo,
        pull_number: prNumber,
        headers: {
          accept: "application/vnd.github.v3.diff",
        },
      }
    );

    const aiResult = await generateText({
      model: openai("gpt-4.1"),
      prompt: `
You are a senior software engineer.

Review this pull request diff and give:
- Bugs
- Security issues
- Performance problems
- Code quality improvements

${diff.data}
      `,
    });

    await prisma.codeReview.create({
      data: {
        repositoryId,
        pullRequestId: prNumber,
        summary: aiResult.text,
      },
    });

    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: prNumber,
      body: `🤖 **CodeSage AI Review**

${aiResult.text}

---
Generated automatically by CodeSage AI`,
    });
  }
);

