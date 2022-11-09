import { Footer } from "@components/common";
import { AdminHeader } from "@components/admin";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col bg-slate-800 text-slate-100">
      <AdminHeader />

      <section className="flex h-full grow p-4">{children}</section>

      <Footer />
    </section>
  );
}
