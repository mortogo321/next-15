import { auth } from "@/app/auth";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div>
      <h1>Welcome, {session?.user?.name}</h1>
    </div>
  );
}
