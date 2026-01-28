export function Header({ email }: { email: string }) {
  return (
    <header className="h-16 border-b bg-white px-6 flex items-center justify-between">
      <span className="text-sm text-gray-600">
        Logged in as {email}
      </span>
    </header>
  );
}
