import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ProductForm } from "@components/admin";
import { prisma } from "server/db/client";

const getProduct = (id: string) => prisma.product.findUnique({ where: { id } });

type Props = {
  params: {
    id?: string;
  };
};

const page = async ({ params }: Props) => {
  const { id } = params;
  const product = id ? await getProduct(id) : null;

  return (
    <div className="p-4">
      <Link
        href="/products"
        className="group flex cursor-pointer items-center hover:text-slate-400"
      >
        <ArrowLeftIcon className="mr-2 h-6 w-6 stroke-slate-200 stroke-2 group-hover:stroke-slate-400" />
        <span className="text-xl ">Regresar</span>
      </Link>

      <ProductForm product={product} />
    </div>
  );
};

export default page;
