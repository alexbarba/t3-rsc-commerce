import { Footer } from "@components/common";
import { AdminHeader, Sidebar } from "@components/admin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen  flex-col bg-slate-800 text-slate-100">
      <AdminHeader />

      <section className="flex h-full w-full max-w-[100vw] grow">
        <Sidebar />
        <main className="flex w-full justify-center p-4">{children}</main>
      </section>

      <Footer />
    </section>
  );
}
