import { auth } from "../lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import SignOutButton from "../components/SignOutButton";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log("Dashboard Session:", session?.user.role);

  if (!session) {
    redirect("/auth/signin");
  }

  const user = session.user;
  const isAdmin = user.role === "admin";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-600">
              Welcome, {user.name} ({isAdmin ? "Admin" : "User"})
            </p>
          </div>
          <SignOutButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Admin Actions */}
        {isAdmin && (
          <div className="mb-6">
            <Link href="/dashboard/products/create" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              + Add New Product
            </Link>
          </div>
        )}

        <div></div>
      </main>
    </div>
  );
}
