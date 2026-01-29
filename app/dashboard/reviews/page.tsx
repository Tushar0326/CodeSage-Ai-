import { prisma } from "@/lib/prisma";

export default async function ReviewsPage() {
  const reviews = await prisma.codeReview.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">AI Reviews</h1>

      {reviews.map((r) => (
        <div key={r.id} className="border p-4 rounded mb-3">
          <p className="text-sm text-gray-500">
            PR #{r.pullRequestId}
          </p>
          <p className="mt-2 whitespace-pre-wrap">
            {r.summary}
          </p>
        </div>
      ))}
    </div>
  );
}
