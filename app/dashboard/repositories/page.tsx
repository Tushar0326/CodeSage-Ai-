import { prisma } from "@/lib/prisma";

export default async function RepositoriesPage() {
  const repos = await prisma.repository.findMany({});

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Repositories</h1>

      <ul className="space-y-2">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="border p-3 rounded"
          >
            {repo.fullName}
          </li>
        ))}
      </ul>
    </div>
  );
}
