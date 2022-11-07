import { Header, Footer } from "@components/common";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col justify-between bg-slate-800 text-slate-100">
      <Header />
      <section className="h-full p-4">{children}</section>
      <Footer />
    </section>
  );
}
