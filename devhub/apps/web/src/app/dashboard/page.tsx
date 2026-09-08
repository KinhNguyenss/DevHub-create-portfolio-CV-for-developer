// src/app/dashboard/page.tsx
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your CVs and portfolio",
};

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-400">DevHub</span>
          <div className="flex items-center gap-4">
            <img
              src={session.user?.image ?? "/avatar-placeholder.png"}
              alt={session.user?.name ?? "User"}
              className="h-8 w-8 rounded-full ring-2 ring-indigo-500"
            />
            <span className="text-sm text-gray-300">{session.user?.name}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">My CVs</h1>
            <p className="text-gray-400 mt-1">Manage and publish your portfolios</p>
          </div>
          <a
            href="/cv/new"
            id="btn-create-new-cv"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold hover:bg-indigo-500 transition-colors"
          >
            + New CV
          </a>
        </div>

        {/* Empty state */}
        <div className="rounded-2xl border border-dashed border-white/20 p-16 text-center">
          <div className="text-5xl mb-4">📄</div>
          <h3 className="text-lg font-semibold">No CVs yet</h3>
          <p className="text-gray-400 mt-2 mb-6">
            Create your first AI-generated CV from your GitHub profile
          </p>
          <a
            href="/cv/new"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold hover:bg-indigo-500 transition-colors"
          >
            🤖 Generate from GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
