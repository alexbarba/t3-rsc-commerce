import type { FC } from "react";
import type { Product } from "@prisma/client";
import Link from "next/link";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

const thClassnames = "font-medium p-4 pr-8 pt-0 pb-3 ";
const tdClassnames = "p-4 truncate";

const ProductsTable: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="rounded-xl border border-slate-600 bg-slate-600 p-4">
      <table className="h-full w-full table-auto overflow-auto ">
        <thead>
          <tr className="border-b border-slate-400 text-center">
            <th className={thClassnames}>Id</th>
            <th className={thClassnames}>Nombre</th>
            <th className={thClassnames}>Descripción</th>
            <th className={thClassnames}>Precio</th>
            <th className={thClassnames}>Stock</th>
            <th className={thClassnames}>Actualizado</th>
            <th className={thClassnames}>Creado</th>
            <th className={thClassnames}>Editar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b border-slate-400 text-center"
            >
              <td className={tdClassnames}>{product.id}</td>
              <td className={tdClassnames}>{product.name}</td>
              <td className={tdClassnames}>{product.description}</td>
              <td className={tdClassnames}>
                {" "}
                {new Intl.NumberFormat("es-MX", {
                  currency: "MXN",
                  style: "currency",
                }).format(Number(product.price))}
              </td>
              <td className={tdClassnames}>{product.quantity}</td>
              <td className={tdClassnames}>
                {new Date(product.updatedAt).toLocaleString()}
              </td>
              <td className={tdClassnames}>
                {new Date(product.createdAt).toLocaleString()}
              </td>

              <td className={tdClassnames}>
                <Link href={`/products/${product.id}/edit`}>
                  <PencilSquareIcon className="mx-auto h-6 w-6" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
