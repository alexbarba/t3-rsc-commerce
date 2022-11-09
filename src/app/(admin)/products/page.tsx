import { prisma } from "server/db/client";
import { ProductsTable } from "@components/admin";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export const revalidate = 30; // revalidate every 30 sec

const getProducts = () => prisma.product.findMany();

const page = async () => {
  const products = await getProducts();

  return (
    <>
      <div className="my-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Productos</h1>

        <Link
          href="products/create"
          className="flex items-center justify-center rounded-md border border-slate-300 py-2 px-4 hover:bg-slate-300 hover:text-slate-900"
        >
          <PlusIcon className="mr-4 h-5 w-5" />
          Nuevo producto
        </Link>
      </div>
      <ProductsTable products={products} />
    </>
  );
};

export default page;
