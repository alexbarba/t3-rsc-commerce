import type { FC } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

type Props = {
  params: {
    id?: string;
  };
};

const page: FC<Props> = ({ params }) => {
  const { id } = params;

  return (
    <div>
      Pagina de edicion de producto
      <Link href="/products" className="flex cursor-pointer items-center">
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Regresar al menú de productos
      </Link>
      {id}
    </div>
  );
};

export default page;
