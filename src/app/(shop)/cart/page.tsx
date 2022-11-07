import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const cart = () => {
  return (
    <div>
      <Link href="/" className="flex cursor-pointer items-center">
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Regresar a la tienda
      </Link>
      Este es nuestro carrito
    </div>
  );
};

export default cart;
