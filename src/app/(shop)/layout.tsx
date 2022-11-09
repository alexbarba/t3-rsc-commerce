import { Header, Footer } from "@components/common";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col bg-slate-800 text-slate-100">
      <Header />
      <section className="h-full grow p-4">{children}</section>
      <Footer />
    </section>
  );
}
