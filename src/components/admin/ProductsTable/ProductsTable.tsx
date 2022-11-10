import type { FC } from "react";
import type { Product } from "@prisma/client";
import Link from "next/link";

const thClassnames = "font-medium p-4 pr-8 pt-0 pb-3 ";
const tdClassnames = "px-4 py-8 truncate";

const ProductsTable: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="w-full max-w-[calc(100vw-200px)] overflow-auto rounded-xl border border-slate-600 bg-slate-600 p-4">
      <table className="h-full w-full table-auto  ">
        <thead>
          <tr className="border-b border-slate-400 text-center">
            <th className={thClassnames}>Id</th>
            <th className={thClassnames}>Nombre</th>
            <th className={thClassnames}>Descripción</th>
            <th className={thClassnames}>Precio</th>
            <th className={thClassnames}>Stock</th>
            <th className={thClassnames}>Última actualización</th>
            <th className={thClassnames}>Creado</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b border-slate-400 text-center"
            >
              <td className={tdClassnames}>{product.id}</td>
              <td className={tdClassnames}>
                <Link
                  href={`/products/${product.id}`}
                  className="font-bold text-emerald-300"
                >
                  {product.name}
                </Link>
              </td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
