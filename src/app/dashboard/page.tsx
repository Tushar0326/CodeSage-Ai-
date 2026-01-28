import { redirect } from "next/navigation";
import { getSession } from "@/lib/get-session";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">
        Welcome to CodeSage AI 🚀
      </h1>

      <p className="mt-2 text-gray-600">
        Logged in as {session.user.email}
      </p>
    </div>
  );
}
