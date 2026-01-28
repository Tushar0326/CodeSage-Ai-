import Link from "next/link";

const navItems = [
  { name: "Overview", href: "/dashboard" },
  { name: "Repositories", href: "/dashboard/repositories" },
  { name: "Reviews", href: "/dashboard/reviews" },
  { name: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-6">
      <h2 className="text-xl font-bold mb-8">CodeSage AI</h2>

      <nav className="space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block text-gray-700 hover:text-black"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
