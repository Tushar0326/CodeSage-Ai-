import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Login to CodeSage AI</h1>

        <Button className="w-full">
          Continue with GitHub
        </Button>
      </div>
    </div>
  );
}
